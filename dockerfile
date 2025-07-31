# ==============================================================================
# Fase 1: Instalación de dependencias (usando pnpm)
# ==============================================================================
FROM node:18-alpine AS deps

# Instalar compatibilidad con libc, a menudo necesaria para Next.js en Alpine
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Instalar pnpm globalmente, ya que no viene en la imagen base de Node
RUN npm install -g pnpm

# Copiar los archivos de manifiesto del proyecto
COPY package.json pnpm-lock.yaml* ./

# Instalar dependencias usando pnpm. --frozen-lockfile garantiza que se use exactamente
# lo que está en el archivo de bloqueo, ideal para CI/CD y Docker.
RUN pnpm install --frozen-lockfile

# ==============================================================================
# Fase 2: Construcción de la aplicación para producción
# ==============================================================================
FROM node:18-alpine AS builder
WORKDIR /app

# Instalar pnpm también en esta fase
RUN npm install -g pnpm

# Copiar las dependencias ya instaladas desde la fase 'deps'
COPY --from=deps /app/node_modules ./node_modules
# Copiar el resto del código fuente de la aplicación
COPY . .

# Importante: Asegúrate de que tu archivo next.config.js tenga 'output: "standalone"'
# Esto es crucial para que la imagen final sea pequeña y optimizada.
RUN pnpm run build

# ==============================================================================
# Fase 3: Imagen final de producción (súper ligera)
# ==============================================================================
FROM node:18-alpine AS runner
WORKDIR /app

# Establecer el entorno a 'production' para optimizaciones de Next.js
ENV NODE_ENV=production
# (Opcional) Deshabilitar telemetría de Next.js
ENV NEXT_TELEMETRY_DISABLED 1

# Crear un usuario y grupo sin privilegios para ejecutar la aplicación
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar los artefactos de construcción optimizados desde la fase 'builder'
# La salida 'standalone' incluye un servidor Node.js y solo los node_modules necesarios.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Cambiar al usuario sin privilegios por seguridad.
USER nextjs

EXPOSE 3000
ENV PORT 3000

# El comando final para iniciar el servidor de producción de Next.js
# que fue generado por la salida 'standalone'.
CMD ["node", "server.js"]
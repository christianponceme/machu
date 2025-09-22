import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { sessionId, message } = await request.json()

  if (!process.env.N8N_WEBHOOK_URL) {
    return NextResponse.json(
      { reply: 'La URL del webhook de n8n no está configurada.' },
      { status: 500 }
    )
  }

  try {
    const response = await fetch(process.env.N8N_WEBHOOK_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sessionId, message }),
    })

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error al contactar al webhook de n8n:', error)
    return NextResponse.json(
      { reply: 'Hubo un error al contactar al chatbot.' },
      { status: 500 }
    )
  }
}

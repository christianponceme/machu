import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { message, sessionId } = await request.json()

    if (!message) {
      return NextResponse.json({ error: 'Message is required' }, { status: 400 })
    }

    const webhookUrl = process.env.N8N_WEBHOOK_URL
    const publicKey = process.env.PUBLIC_KEY

    if (!webhookUrl || !publicKey) {
      return NextResponse.json({ error: 'Webhook configuration missing' }, { status: 500 })
    }

    const response = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `${publicKey}`, // Assuming Bearer token auth
      },
      body: JSON.stringify({ message, sessionId }),
    })

    if (!response.ok) {
      throw new Error(`Webhook error: ${response.status}`)
    }

    const data = await response.json()

    return NextResponse.json({ response: data.response || data.message || 'Respuesta del webhook' })
  } catch (error) {
    console.error('Chat API error:', error)
    return NextResponse.json({ error: 'Error processing message' }, { status: 500 })
  }
}

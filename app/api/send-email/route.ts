import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, company, area, services, samples, message } = await request.json()

    // Email content HTML
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2D5016;">Új ajánlatkérés érkezett!</h2>
        
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Név:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></p>
          <p><strong>Cég:</strong> ${company || 'Nincs megadva'}</p>
          <p><strong>Gazdálkodási terület:</strong> ${area || 'Nincs megadva'} hektár</p>
        </div>
        
        <h3 style="color: #2D5016;">Kért szolgáltatások:</h3>
        <ul>
          ${services.map((service: string) => `<li>${service}</li>`).join('')}
        </ul>
        
        ${samples ? `<p><strong>Minták beküldése:</strong> ${samples}</p>` : ''}
        
        <h3 style="color: #2D5016;">Üzenet:</h3>
        <div style="background: #fff; padding: 15px; border-left: 4px solid #1A936F; margin: 20px 0;">
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
        
        <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;">
        <p style="color: #666; font-size: 12px;">
          Küldés időpontja: ${new Date().toLocaleString('hu-HU', { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric', 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>
    `

    // Send email via Resend (only if API key is configured)
    if (process.env.RESEND_API_KEY) {
      const resend = new Resend(process.env.RESEND_API_KEY)
      const data = await resend.emails.send({
        from: 'AgroLab Weboldal <onboarding@resend.dev>',
        to: ['peter.hrubos.szte@gmail.com'],
        subject: `Új ajánlatkérés - ${name}`,
        html: emailHtml,
        replyTo: email,
      })
      console.log('Email sent successfully:', data)
    } else {
      // Test mode - just log the data
      console.log('⚠️ TEST MODE - No RESEND_API_KEY found')
      console.log('📧 Email would be sent to: peter.hrubos.szte@gmail.com')
      console.log('📝 Form data:', { name, email, phone, company, area, services, samples, message })
      console.log('💡 To enable email sending, add RESEND_API_KEY to .env.local')
    }

    return NextResponse.json({ 
      success: true,
      message: process.env.RESEND_API_KEY 
        ? 'Email sikeresen elküldve!' 
        : 'Teszt mód: Adatok mentve (email küldés kikapcsolva)'
    })
  } catch (error) {
    console.error('Email sending error:', error)
    return NextResponse.json(
      { error: 'Email küldése sikertelen', details: error },
      { status: 500 }
    )
  }
}

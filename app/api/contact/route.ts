import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/replitmail';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, company, message } = body;

    console.log('=== Ny kontakthenvendelse ===');
    console.log('Navn:', name);
    console.log('E-post:', email);
    console.log('Telefon:', phone || 'Ikke oppgitt');
    console.log('Selskap:', company || 'Ikke oppgitt');
    console.log('Melding:', message);
    console.log('Tidspunkt:', new Date().toISOString());
    console.log('============================');

    const emailSubject = `Ny kontakthenvendelse fra ${name}${company ? ` (${company})` : ''}`;
    
    const emailText = `
Ny kontakthenvendelse fra nettsiden
====================================

Navn: ${name}
E-post: ${email}
Telefon: ${phone || 'Ikke oppgitt'}
Selskap: ${company || 'Ikke oppgitt'}

Melding:
${message}

Tidspunkt: ${new Date().toLocaleString('nb-NO', { timeZone: 'Europe/Oslo' })}
`;

    const emailHtml = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #000 0%, #1a1a1a 100%); color: #fff; padding: 30px; border-radius: 8px 8px 0 0; }
    .header h1 { margin: 0; font-size: 24px; }
    .header .accent { color: #ff6600; }
    .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 20px; }
    .field-label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
    .field-value { font-size: 16px; color: #000; }
    .message-box { background: white; padding: 20px; border-radius: 6px; border-left: 3px solid #ff6600; margin-top: 10px; }
    .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #999; text-align: center; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1><span class="accent">Solven</span> Solutions</h1>
      <p style="margin: 10px 0 0; font-size: 14px; opacity: 0.9;">Ny kontakthenvendelse</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Navn</div>
        <div class="field-value">${name}</div>
      </div>
      <div class="field">
        <div class="field-label">E-post</div>
        <div class="field-value"><a href="mailto:${email}" style="color: #ff6600;">${email}</a></div>
      </div>
      ${phone ? `
      <div class="field">
        <div class="field-label">Telefon</div>
        <div class="field-value"><a href="tel:${phone}" style="color: #ff6600;">${phone}</a></div>
      </div>
      ` : ''}
      ${company ? `
      <div class="field">
        <div class="field-label">Selskap</div>
        <div class="field-value">${company}</div>
      </div>
      ` : ''}
      <div class="field">
        <div class="field-label">Melding</div>
        <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
      </div>
      <div class="footer">
        Mottatt ${new Date().toLocaleString('nb-NO', { 
          timeZone: 'Europe/Oslo',
          dateStyle: 'long',
          timeStyle: 'short'
        })}
      </div>
    </div>
  </div>
</body>
</html>
`;

    await sendEmail({
      to: 'sales@solven.no',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
    });

    console.log('✓ E-post sendt til sales@solven.no');

    return NextResponse.json(
      { 
        success: true, 
        message: 'Takk for henvendelsen! Vi svarer raskt.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Feil ved behandling av kontaktskjema:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Noe gikk galt. Vennligst prøv igjen eller send e-post direkt til sales@solven.no.' 
      },
      { status: 500 }
    );
  }
}

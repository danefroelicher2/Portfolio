import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, message } = body;

    // Server-side validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate message length
    if (message.length < 10) {
      return NextResponse.json(
        { error: 'Message must be at least 10 characters long' },
        { status: 400 }
      );
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: ['danefroelicher@gmail.com'],
      subject: `Portfolio Contact: ${name}`,
      text: `
New message from your portfolio contact form

From: ${name}
Email: ${email}

Message:
${message}

---
Sent from danefroelicher.com portfolio
      `.trim(),
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #a855f7; border-bottom: 2px solid #a855f7; padding-bottom: 10px;">
            New Portfolio Contact Message
          </h2>

          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #a855f7;">${email}</a></p>
          </div>

          <div style="margin: 20px 0;">
            <p style="margin-bottom: 10px;"><strong>Message:</strong></p>
            <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; white-space: pre-wrap;">
${message}
            </div>
          </div>

          <hr style="border: none; border-top: 1px solid #ddd; margin: 30px 0;" />

          <p style="color: #666; font-size: 12px; text-align: center;">
            Sent from danefroelicher.com portfolio
          </p>
        </div>
      `.trim(),
    });

    console.log('Email sent successfully:', data);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);

    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    );
  }
}

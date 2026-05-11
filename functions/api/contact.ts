export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string>;
}) {
  try {
    const body = await context.request.json() as {
      fullName: string;
      company?: string;
      email: string;
      phone?: string;
      region: string;
      message: string;
    };

    // Basic validation
    if (!body.fullName || !body.email || !body.message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Log the contact enquiry (in production, forward to Resend/SendGrid/email API)
    console.log('[Contact Form]', {
      from: body.fullName,
      email: body.email,
      company: body.company,
      region: body.region,
      message: body.message.substring(0, 100),
    });

    // To forward via Resend, uncomment and set RESEND_API_KEY in Cloudflare Pages env:
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'website@ulkamgroup.com',
    //     to: 'hello@ulkamgroup.com',
    //     subject: `New Enquiry from ${body.fullName} (${body.region})`,
    //     html: `<p><strong>Name:</strong> ${body.fullName}</p>
    //            <p><strong>Company:</strong> ${body.company ?? 'N/A'}</p>
    //            <p><strong>Email:</strong> ${body.email}</p>
    //            <p><strong>Phone:</strong> ${body.phone ?? 'N/A'}</p>
    //            <p><strong>Region:</strong> ${body.region}</p>
    //            <p><strong>Message:</strong><br/>${body.message}</p>`,
    //   }),
    // });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[Contact Form Error]', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

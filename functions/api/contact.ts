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

    // Send to Google Apps Script
    const scriptRes = await fetch(context.env.GOOGLE_SCRIPT_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        secret: context.env.GOOGLE_SCRIPT_SECRET,
        fullName: body.fullName,
        company: body.company,
        email: body.email,
        phone: body.phone,
        region: body.region,
        message: body.message,
      }),
    });

    const result = await scriptRes.json() as { success?: boolean; error?: string };

    if (!result.success) {
      console.error('[Contact Form Error]', result.error);
      return new Response(JSON.stringify({ error: 'Failed to send message' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

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

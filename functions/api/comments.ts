export async function onRequestPost(context: {
  request: Request;
  env: Record<string, string>;
}) {
  try {
    const body = await context.request.json() as {
      name: string;
      email: string;
      comment: string;
      postSlug: string;
    };

    if (!body.name || !body.email || !body.comment || !body.postSlug) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    // Log the comment (in production, store in a DB or forward to a moderation queue)
    console.log('[Blog Comment]', {
      post: body.postSlug,
      from: body.name,
      email: body.email,
      comment: body.comment.substring(0, 80),
    });

    // To forward comment notification via Resend, uncomment and configure env var:
    // await fetch('https://api.resend.com/emails', {
    //   method: 'POST',
    //   headers: {
    //     Authorization: `Bearer ${context.env.RESEND_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     from: 'website@ulkamgroup.com',
    //     to: 'hello@ulkamgroup.com',
    //     subject: `New Comment on "${body.postSlug}" by ${body.name}`,
    //     html: `<p><strong>Post:</strong> ${body.postSlug}</p>
    //            <p><strong>Name:</strong> ${body.name}</p>
    //            <p><strong>Email:</strong> ${body.email}</p>
    //            <p><strong>Comment:</strong><br/>${body.comment}</p>`,
    //   }),
    // });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (err) {
    console.error('[Comments Error]', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

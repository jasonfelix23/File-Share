import { EmailTemplate } from './../../_components/email-template';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
    const response = await req.json();
  try {
    const data = await resend.emails.send({
      from: 'Jason <email@jasonfelix.in>',
      to: [response?.emailToSend],
      subject: `${response?.userName} shared a file with you.`,
      react: EmailTemplate({ response }),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}

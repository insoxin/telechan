import md5 from 'md5';
const VERCEL_URL = process.env.VERCEL_URL;
const TCKEY = process.env.TCKEY;

const replyToMessage = (ctx: any, messageId: string, string: string) =>
  ctx.reply(string, {
    reply_to_message_id: messageId,
  });



export { sendkey };

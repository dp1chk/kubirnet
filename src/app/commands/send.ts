import type { ChatInputCommand, CommandMetadata, MessageCommand, CommandData } from 'commandkit';

export const command: CommandData = {
  name: 'send',
  description: "Do not use it",
  options: [
    {
      name: 'text',
      description: 'Text',
      type: 3,
      required: true,
    },
    {
      name: 'msg_id',
      description: 'Reply message ID',
      type: 3,
      required: false,
    },
  ]
};

export const metadata: CommandMetadata = {
  guilds: ['1222954115580301382'],
};

export const chatInput: ChatInputCommand = async (ctx) => {
  const text = ctx.options.getString('text', true);
  const msgId = ctx.options.getString('msg_id', false);

  const allowedUsers = ['1538666400829149317', '720322457382420632']

  if (!allowedUsers.includes(ctx.interaction.user.id))
    return;

  const channel = ctx.interaction.channel;

  if (!channel?.isTextBased() || !channel.isSendable())
    return;

  if (msgId) {
    const messageToReply = await channel.messages.fetch(msgId);

    await messageToReply.reply(text);
  }
  else {
    await channel.send(text);
  }

  await ctx.interaction.reply('Отправлено');
};

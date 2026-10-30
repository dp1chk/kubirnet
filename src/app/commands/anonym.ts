import type { ChatInputCommand, CommandMetadata, CommandData } from 'commandkit';
import { EmbedBuilder, MessageFlags } from 'discord.js';

export const command: CommandData = {
  name: 'anonym',
  description: 'Отправить анонимное сообщение',
  description_localizations: {
    "en-US": "Send an anonymous message",
  },
  options: [
    {
      name: 'text',
      description: 'Сообщение',
      description_localizations: {
        "en-US": "Message",
      },
      type: 3,
      required: true,
    }
  ]
}

export const metadata: CommandMetadata = {
  guilds: ['1222954115580301382'],
}

export const chatInput: ChatInputCommand = async (ctx) => {
  const userLanguage = ctx.getUserLocale();
  const message = ctx.options.getString('text', true);

  const embed = new EmbedBuilder()
    .setAuthor({
      name: 'Anonym',
      iconURL: 'https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fimg.freepik.com%2Fpremium-vector%2Fvector-black-question-mark-icon_940471-1422.jpg&sp=1793371038T5e0af11e90d7a57e1b1c55b382432fecb388fe496ffddbbb8430acb93f987c25'
    })
    .setDescription(message)
    .setColor('Blurple');

  if (ctx.interaction.channel?.isTextBased() && ctx.interaction.channel.isSendable()) {
    await ctx.interaction.channel.send({ embeds: [embed] });

    await ctx.interaction.reply({
      content: userLanguage == "en-US" ? 'Sended' : 'Отправлено',
      flags: MessageFlags.Ephemeral,
    });
  }
}

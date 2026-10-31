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
      iconURL: 'https://klipy.com/gifs/ado-ado-shield',
    })
    .setDescription(message)
    .setColor('DarkGrey')
    .setFooter({ text: ctx.interaction.user.id.slice(0, 3) });

  if (ctx.interaction.channel?.isTextBased() && ctx.interaction.channel.isSendable()) {
    await ctx.interaction.channel.send({ embeds: [embed] });

    await ctx.interaction.reply({
      content: userLanguage == "en-US" ? 'Sended' : 'Отправлено',
      flags: MessageFlags.Ephemeral,
    });
  }
}

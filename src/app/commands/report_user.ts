import type { ChatInputCommand, CommandMetadata, MessageCommand, CommandData } from 'commandkit';
import { EmbedBuilder, EmbedFlags, inlineCode, MessageFlags } from 'discord.js';


export const command: CommandData = {
  name: 'report_user',
  description: "Пожаловаться на пользователя",
  options: [
    {
      name: 'user',
      description: 'Пользователь',
      type: 6,
      required: true,
    },
    {
      name: 'report_text',
      description: 'Ваша жалоба',
      type: 3,
      required: true,
    }
  ]
};

export const metadata: CommandMetadata = {
  guilds: ['1222954115580301382'],
};

export const chatInput: ChatInputCommand = async (ctx) => {
  const user = ctx.options.getUser('user', true);
  const reportText = ctx.options.getString('report_text', true);

  const embed = new EmbedBuilder()
    .setTitle('Report System')
    .setDescription(`Вы пожаловались на <@${user.id}>\nЖалоба: ${inlineCode(reportText)}`);

  await ctx.interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
};

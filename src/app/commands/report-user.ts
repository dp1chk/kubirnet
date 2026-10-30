import type { ChatInputCommand, CommandMetadata, CommandData } from 'commandkit';
import { EmbedBuilder, codeBlock, MessageFlags } from 'discord.js';

import { reportService } from '../services/ReportService';


/**
 * This command provide the user reporting ability
 */
export const command: CommandData = {
  name: 'report_user',
  description: "Report user from Kubir",
  description_localizations: {
    "ru": "Пожаловаться на пользователя"
  },
  options: [
    {
      name: 'user',
      description: 'User',
      description_localizations: {
        "ru": "Пользователь, на которого вы хотите пожаловаться"
      },
      type: 6,
      required: true,
    },
    {
      name: 'text',
      description: 'Your report',
      description_localizations: {
        "ru": "Ваша жалоба",
      },
      type: 3,
      required: true,
    }
  ]
};

export const metadata: CommandMetadata = {
  guilds: ['1222954115580301382'],
};

export const chatInput: ChatInputCommand = async (ctx) => {
  const reporterUser = ctx.interaction.user;
  const reportedUser = ctx.options.getUser('user', true);
  const reportText = ctx.options.getString('text', true);

  await reportService.createReport(
    reporterUser.id,
    reportedUser.id,
    reportText
  );

  const replyEmbed = new EmbedBuilder()
    .setTitle('Report System')

  const reportsChannel = await ctx.guild?.channels.fetch(process.env['REPORTS_CHANNEL_ID'] ?? '');

  if (reportsChannel?.isTextBased() && reportsChannel.isSendable()) {
    const notificationEmbed = new EmbedBuilder()
      .setTitle('Report System')
      .setColor('Red')
      .setDescription(`Жалоба на <@${reportedUser.id}> от <@${reporterUser.id}>:\n\n${codeBlock(reportText)}`);

    reportsChannel.send({ content: '<@720322457382420632>', embeds: [notificationEmbed] })

    replyEmbed
      .setColor('Green')
      .setDescription(`Вы пожаловались на <@${reportedUser.id}>\n\nЖалоба: ${codeBlock(reportText)}`);

    return await ctx.interaction.reply({
      embeds: [replyEmbed],
      flags: MessageFlags.Ephemeral,
    });
  }

  replyEmbed
    .setDescription(`Произошла неизвестная ошибка`)
    .setColor('Red');

  await ctx.interaction.reply({
    embeds: [replyEmbed],
    flags: MessageFlags.Ephemeral,
  });
};

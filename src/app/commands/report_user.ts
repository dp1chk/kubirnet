import type { ChatInputCommand, CommandMetadata, CommandData } from 'commandkit';
import { EmbedBuilder, EmbedFlags, inlineCode, MessageFlags } from 'discord.js';


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
        "ru": "Пользователь"
      },
      type: 6,
      required: true,
    },
    {
      name: 'report_text',
      description: 'Your report',
      description_localizations: {
        "ru": "Жалоба",
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
  const user = ctx.options.getUser('user', true);
  const reportText = ctx.options.getString('report_text', true);

  await ctx.interaction.reply("Inop");
  return;

  const embed = new EmbedBuilder()
    .setTitle('Report System')
    .setDescription(`Вы пожаловались на <@${user.id}>\nЖалоба: ${inlineCode(reportText)}`);

  await ctx.interaction.reply({
    embeds: [embed],
    flags: MessageFlags.Ephemeral,
  });
};

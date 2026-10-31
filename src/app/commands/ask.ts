import type { ChatInputCommand, CommandMetadata, MessageCommand, CommandData } from 'commandkit';
import { randomInt } from 'crypto';
import { EmbedBuilder, MessageFlags, Colors } from 'discord.js';


export const command: CommandData = {
  name: 'ask',
  description: "Ask Romanov about something you want",
  options: [
    {
      name: 'question',
      description: 'Question',
      type: 3,
      required: true,
    },
  ]
};

export const metadata: CommandMetadata = {
  guilds: ['1222954115580301382'],
};

export const chatInput: ChatInputCommand = async (ctx) => {
  let question = ctx.options.getString('question', true);

  const answers = ['Да', 'Нет', 'Возможно'];

  let finalAnswer = answers[randomInt(answers.length)]

  if (question.includes('%y%')) {
    finalAnswer = 'Да';
    question = question.replace('%y%', '');
  }
  else if (question.includes('%n%')) {
    finalAnswer = 'Нет';
    question = question.replace('%n%', '');
  }
  else if (question.includes('%m%')) {
    finalAnswer = 'Возможно';
    question = question.replace('%m%', '');
  }

  const embed = new EmbedBuilder()
    .setDescription(`<@${ctx.interaction.user.id}>: ${question}\n\n<@${ctx.client.user.id}>: ${finalAnswer}`)
    .setColor('Blurple');

  await ctx.interaction.reply({ embeds: [embed] });
};

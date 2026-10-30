
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { reportService } from "../services/ReportService.js";
import { EmbedBuilder, MessageFlags, codeBlock } from "discord.js";

// src/app/commands/report-user.ts
/**
* This command provide the user reporting ability
*/
const command = {
	name: "report_user",
	description: "Report user from Kubir",
	description_localizations: { "ru": "Пожаловаться на пользователя" },
	options: [{
		name: "user",
		description: "User",
		description_localizations: { "ru": "Пользователь, на которого вы хотите пожаловаться" },
		type: 6,
		required: true
	}, {
		name: "text",
		description: "Your report",
		description_localizations: { "ru": "Ваша жалоба" },
		type: 3,
		required: true
	}]
};
const metadata = { guilds: ["1222954115580301382"] };
const chatInput = async (ctx) => {
	var _ctx$guild;
	const reporterUser = ctx.interaction.user;
	const reportedUser = ctx.options.getUser("user", true);
	const reportText = ctx.options.getString("text", true);
	await reportService.createReport(reporterUser.id, reportedUser.id, reportText);
	const replyEmbed = new EmbedBuilder().setTitle("Report System");
	const reportsChannel = await ((_ctx$guild = ctx.guild) === null || _ctx$guild === void 0 ? void 0 : _ctx$guild.channels.fetch(process.env["REPORTS_CHANNEL_ID"] ?? ""));
	if ((reportsChannel === null || reportsChannel === void 0 ? void 0 : reportsChannel.isTextBased()) && reportsChannel.isSendable()) {
		const notificationEmbed = new EmbedBuilder().setTitle("Report System").setColor("Red").setDescription(`Жалоба на <@${reportedUser.id}> от <@${reporterUser.id}>:\n\n${codeBlock(reportText)}`);
		reportsChannel.send({
			content: "<@720322457382420632>",
			embeds: [notificationEmbed]
		});
		replyEmbed.setColor("Green").setDescription(`Вы пожаловались на <@${reportedUser.id}>\n\nЖалоба: ${codeBlock(reportText)}`);
		return await ctx.interaction.reply({
			embeds: [replyEmbed],
			flags: MessageFlags.Ephemeral
		});
	}
	replyEmbed.setDescription(`Произошла неизвестная ошибка`).setColor("Red");
	await ctx.interaction.reply({
		embeds: [replyEmbed],
		flags: MessageFlags.Ephemeral
	});
};

export { chatInput, command, metadata };
//# sourceMappingURL=report-user.js.map
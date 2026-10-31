
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { EmbedBuilder, MessageFlags } from "discord.js";

// src/app/commands/anonym.ts
const command = {
	name: "anonym",
	description: "Отправить анонимное сообщение",
	description_localizations: { "en-US": "Send an anonymous message" },
	options: [{
		name: "text",
		description: "Сообщение",
		description_localizations: { "en-US": "Message" },
		type: 3,
		required: true
	}]
};
const metadata = { guilds: ["1222954115580301382"] };
const chatInput = async (ctx) => {
	var _ctx$interaction$chan;
	const userLanguage = ctx.getUserLocale();
	const message = ctx.options.getString("text", true);
	const embed = new EmbedBuilder().setAuthor({
		name: "Anonym",
		iconURL: "https://klipy.com/gifs/ado-ado-shield"
	}).setDescription(message).setColor("DarkGrey").setFooter({ text: ctx.interaction.user.id.slice(0, 3) });
	if (((_ctx$interaction$chan = ctx.interaction.channel) === null || _ctx$interaction$chan === void 0 ? void 0 : _ctx$interaction$chan.isTextBased()) && ctx.interaction.channel.isSendable()) {
		await ctx.interaction.channel.send({ embeds: [embed] });
		await ctx.interaction.reply({
			content: userLanguage == "en-US" ? "Sended" : "Отправлено",
			flags: MessageFlags.Ephemeral
		});
	}
};

export { chatInput, command, metadata };
//# sourceMappingURL=anonym.js.map
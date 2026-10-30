
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { EmbedBuilder, MessageFlags } from "discord.js";

// src/app/commands/report_user.ts
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
		description_localizations: { "ru": "Пользователь" },
		type: 6,
		required: true
	}, {
		name: "report_text",
		description: "Your report",
		description_localizations: { "ru": "Жалоба" },
		type: 3,
		required: true
	}]
};
const metadata = { guilds: ["1222954115580301382"] };
const chatInput = async (ctx) => {
	ctx.options.getUser("user", true);
	ctx.options.getString("report_text", true);
	await ctx.interaction.reply("Inop");
};

export { chatInput, command, metadata };
//# sourceMappingURL=report_user.js.map
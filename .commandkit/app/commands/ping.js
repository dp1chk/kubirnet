
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

// src/app/commands/ping.ts
const command = {
	name: "ping",
	description: "Ping the bot to check if it's online."
};
const metadata = { guilds: ["1222954115580301382"] };
const chatInput = async (ctx) => {
	const response = `Pong! Latency: ${(ctx.client.ws.ping ?? -1).toString()}ms`;
	await ctx.interaction.reply(response);
};
const message = async (ctx) => {
	const response = `Pong! Latency: ${(ctx.client.ws.ping ?? -1).toString()}ms`;
	await ctx.message.reply(response);
};

export { chatInput, command, message, metadata };
//# sourceMappingURL=ping.js.map
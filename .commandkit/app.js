
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { Client } from "discord.js";

// src/app.ts
const client = new Client({ intents: [
	"Guilds",
	"GuildMembers",
	"GuildMessages",
	"MessageContent"
] });

export { client as default };
//# sourceMappingURL=app.js.map
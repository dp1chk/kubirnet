
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { Logger } from "commandkit/logger";

// src/app/events/clientReady/log.ts
const handler = async (client) => {
	Logger.info(`Logged in as ${client.user.username}!`);
};

export { handler as default };
//# sourceMappingURL=log.js.map
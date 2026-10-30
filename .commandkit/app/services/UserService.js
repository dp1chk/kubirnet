
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { prisma } from "../../lib/prisma.js";

// src/app/services/UserService.ts
var UserService = class {
	async findOrCreate(id) {
		const user = await prisma.user.findFirst({ where: { id } });
		if (!user) return await prisma.user.create({ data: { id } });
		return user;
	}
};
const userService = new UserService();

export { userService };
//# sourceMappingURL=UserService.js.map

import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { prisma } from "../../lib/prisma.js";
import { userService } from "./UserService.js";

// src/app/services/ReportService.ts
var ReportService = class {
	async createReport(reporterId, reportedId, text) {
		await userService.findOrCreate(reporterId);
		await userService.findOrCreate(reportedId);
		await prisma.report.create({ data: {
			id: crypto.randomUUID().toString(),
			reporterId,
			reportedId,
			text
		} });
	}
};
const reportService = new ReportService();

export { reportService };
//# sourceMappingURL=ReportService.js.map
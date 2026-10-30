
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import { getPrismaClientClass } from "./internal/class.js";
import "./internal/prismaNamespace.js";
import * as path from "node:path";
import { fileURLToPath } from "node:url";

// generated/prisma/client.ts
globalThis["__dirname"] = path.dirname(fileURLToPath(import.meta.url));
/**
* ## Prisma Client
* 
* Type-safe database client for TypeScript
* @example
* ```
* const prisma = new PrismaClient({
*   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
* })
* // Fetch zero or more Reports
* const reports = await prisma.report.findMany()
* ```
* 
* Read more in our [docs](https://pris.ly/d/client).
*/
const PrismaClient = getPrismaClientClass();

export { PrismaClient };
//# sourceMappingURL=client.js.map
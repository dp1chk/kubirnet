
import __tsdown_shims_path from 'node:path'
import __tsdown_shims_url from 'node:url'

const __TSDOWN_SHIM_FILENAME__ = /* @__PURE__ */ __tsdown_shims_url.fileURLToPath(import.meta.url)
const __TSDOWN_SHIM_DIRNAME__ = /* @__PURE__ */ __tsdown_shims_path.dirname(__TSDOWN_SHIM_FILENAME__)

import * as runtime from "@prisma/client/runtime/client";

// generated/prisma/internal/prismaNamespace.ts
const getExtensionContext = runtime.Extensions.getExtensionContext;
const NullTypes = {
	DbNull: runtime.NullTypes.DbNull,
	JsonNull: runtime.NullTypes.JsonNull,
	AnyNull: runtime.NullTypes.AnyNull
};
/**
* Enums
*/
const TransactionIsolationLevel = runtime.makeStrictEnum({ Serializable: "Serializable" });
const defineExtension = runtime.Extensions.defineExtension;

export {  };
//# sourceMappingURL=prismaNamespace.js.map
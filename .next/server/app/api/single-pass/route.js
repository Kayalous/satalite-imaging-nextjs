"use strict";
(() => {
var exports = {};
exports.id = 3;
exports.ids = [3];
exports.modules = {

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 7783:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@edge-runtime/cookies");

/***/ }),

/***/ 8530:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@opentelemetry/api");

/***/ }),

/***/ 4426:
/***/ ((module) => {

module.exports = require("next/dist/compiled/chalk");

/***/ }),

/***/ 252:
/***/ ((module) => {

module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 1110:
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ 3687:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/single-pass/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(5387);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9267);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(2413);
// EXTERNAL MODULE: external "@prisma/client"
var client_ = __webpack_require__(3524);
// EXTERNAL MODULE: external "next/dist/lib/import-next-warning"
var import_next_warning_ = __webpack_require__(1110);
// EXTERNAL MODULE: ./lib/utils.ts
var utils = __webpack_require__(7725);
;// CONCATENATED MODULE: ./app/api/single-pass/route.js




const prisma = new client_.PrismaClient();
const pageSize = 20;
async function GET(req, res) {
    let skip = (0,utils/* getQSParamFromURL */.V)("page", req.url) ? (0,utils/* getQSParamFromURL */.V)("page", req.url) * pageSize : 0;
    let imageNames = [
        (0,utils/* getQSParamFromURL */.V)("image_name", req.url)
    ];
    const trans = await prisma.$transaction([
        prisma.ml_localization.count({
            where: {
                image_name: {
                    in: imageNames
                }
            }
        }),
        prisma.ml_localization.findMany({
            skip: skip,
            take: pageSize,
            where: {
                image_name: {
                    in: imageNames
                }
            }
        })
    ]);
    const data = {
        count: trans[0],
        data: trans[1]
    };
    return next_response/* default */.Z.json({
        data
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fsingle-pass%2Froute&name=app%2Fapi%2Fsingle-pass%2Froute&pagePath=private-next-app-dir%2Fapi%2Fsingle-pass%2Froute.js&appDir=%2FUsers%2Fabdulrhmanelkayal%2FDocuments%2Fwork%2Fnextjs%2Fsatalite-imaging-nextjs%2Fapp&appPaths=%2Fapi%2Fsingle-pass%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/single-pass/route","pathname":"/api/single-pass","filename":"route","bundlePath":"app/api/single-pass/route"},"resolvedPagePath":"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/api/single-pass/route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/single-pass/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981,917,433], () => (__webpack_exec__(3687)));
module.exports = __webpack_exports__;

})();
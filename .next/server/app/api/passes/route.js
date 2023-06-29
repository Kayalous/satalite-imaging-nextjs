"use strict";
(() => {
var exports = {};
exports.id = 946;
exports.ids = [946];
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

/***/ 1968:
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

// NAMESPACE OBJECT: ./app/api/passes/route.js
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
;// CONCATENATED MODULE: ./app/api/passes/route.js




const prisma = new client_.PrismaClient();
const pageSize = 20;
async function GET(req, res) {
    let skip = (0,utils/* getQSParamFromURL */.V)("page", req.url) ? (0,utils/* getQSParamFromURL */.V)("page", req.url) * pageSize : 0;
    let sat_name = (0,utils/* getQSParamFromURL */.V)("sat_name", req.url);
    const today = new Date();
    let startTime = new Date((0,utils/* getQSParamFromURL */.V)("startTime", req.url)) ?? new Date(today.getTime() - 15 * 24 * 60 * 60 * 1000);
    let endTime = new Date((0,utils/* getQSParamFromURL */.V)("endTime", req.url)) ?? new Date(today.getTime() + 15 * 24 * 60 * 60 * 1000);
    let passes = await prisma.ml_localization.groupBy({
        by: [
            "image_name",
            "error_start_time",
            "error_end_time"
        ],
        where: {
            sat_name: {
                equals: sat_name
            },
            // error_start_time after 2021-01-01
            // error_end_time before 2021-01-01
            error_start_time: {
                gte: startTime
            },
            error_end_time: {
                lte: endTime
            }
        }
    });
    // imageNames = imageNames.map((obj) => obj.image_name);
    // const trans = await prisma.$transaction([
    //   prisma.ml_localization.count({
    //     where: {
    //       image_name: {
    //         in: imageNames,
    //       },
    //     },
    //   }),
    //   prisma.ml_localization.findMany({
    //     skip: skip,
    //     take: pageSize,
    //     where: {
    //       image_name: {
    //         in: imageNames,
    //       },
    //     },
    //   }),
    // ]);
    // const data = {
    //   count: trans[0],
    //   data: trans[1],
    // };
    return next_response/* default */.Z.json({
        passes
    });
} // export { handler as GET, handler as POST };

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fpasses%2Froute&name=app%2Fapi%2Fpasses%2Froute&pagePath=private-next-app-dir%2Fapi%2Fpasses%2Froute.js&appDir=%2FUsers%2Fabdulrhmanelkayal%2FDocuments%2Fwork%2Fnextjs%2Fsatalite-imaging-nextjs%2Fapp&appPaths=%2Fapi%2Fpasses%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/passes/route","pathname":"/api/passes","filename":"route","bundlePath":"app/api/passes/route"},"resolvedPagePath":"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/api/passes/route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/passes/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [381,981,917,433], () => (__webpack_exec__(1968)));
module.exports = __webpack_exports__;

})();
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./app/page.js":
/*!*********************!*\
  !*** ./app/page.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Steps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Steps */ \"(app-client)/./app/components/Steps.jsx\");\n/* harmony import */ var _components_screens_Locations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/screens/Locations */ \"(app-client)/./app/components/screens/Locations.jsx\");\n/* harmony import */ var _components_screens_Passes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/screens/Passes */ \"(app-client)/./app/components/screens/Passes.jsx\");\n/* harmony import */ var _components_screens_Satalites__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/screens/Satalites */ \"(app-client)/./app/components/screens/Satalites.jsx\");\n/* harmony import */ var _components_screens_Preview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/screens/Preview */ \"(app-client)/./app/components/screens/Preview.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_8__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Home() {\n    _s();\n    const [steps, setSteps] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([\n        {\n            id: \"Step 1\",\n            name: \"Select Location\"\n        },\n        {\n            id: \"Step 2\",\n            name: \"Select Satalite\"\n        },\n        {\n            id: \"Step 3\",\n            name: \"Select Pass\"\n        },\n        {\n            id: \"Step 4\",\n            name: \"Preview\"\n        }\n    ]);\n    const { data: session, status, error, isLoading } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession)();\n    const [activeStep, setActiveStep] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(0);\n    const [locations, setLocations] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)([\n        {\n            id: 1,\n            title: \"AOML\",\n            description: \"Last scan was 2 hours ago\",\n            additional: \"4 Satalites\",\n            satalites: [\n                {\n                    id: \"NOAA18\",\n                    title: \"NOAA-18\",\n                    description: \"Last pass was 2 hours ago\",\n                    additional: \"1,265 passes\",\n                    numOfPasses: 17\n                },\n                {\n                    id: \"NOAA19\",\n                    title: \"NOAA-19\",\n                    description: \"Last pass was 15 minutes ago\",\n                    additional: \"615 passes\",\n                    numOfPasses: 0\n                },\n                {\n                    id: \"METOP-B\",\n                    title: \"METOP-B\",\n                    description: \"Last pass was 2 hours ago\",\n                    additional: \"1,562 passes\",\n                    numOfPasses: 0\n                },\n                {\n                    id: \"METOP-C\",\n                    title: \"METOP-C\",\n                    description: \"Last pass was 15 minutes ago\",\n                    additional: \"615 passes\",\n                    numOfPasses: 0\n                }\n            ]\n        },\n        {\n            id: 2,\n            title: \"Hawaii\",\n            description: \"-\",\n            additional: \"0 Satalites\",\n            satalites: []\n        }\n    ]);\n    const [selectedLocation, setSelectedLocation] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(locations[0]);\n    const [selectedSatelite, setSelectedSatelite] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(selectedLocation.satalites[0]);\n    // set the active step\n    const onStepChange = (index)=>{\n        setActiveStep(index);\n    };\n    // next step\n    const nextStep = ()=>{\n        if (activeStep === steps.length - 1) return;\n        setActiveStep((prevActiveStep)=>prevActiveStep + 1);\n    };\n    // previous step\n    const prevStep = ()=>{\n        if (activeStep === 0) return;\n        if (activeStep === 1) setSelectedLocation(locations[0]);\n        setActiveStep((prevActiveStep)=>prevActiveStep - 1);\n    };\n    const onSelectedLocation = (location)=>{\n        setSelectedLocation(location);\n    };\n    const onSelectedSatelite = (satelite)=>{\n        setSelectedSatelite(satelite);\n    };\n    const [selectedPass, setSelectedPass] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)(null);\n    const onSelectedPass = (pass)=>{\n        setSelectedPass(pass);\n        nextStep();\n    };\n    // get server side props\n    // display the current screen based on the active step\n    const displayScreen = ()=>{\n        switch(activeStep){\n            case 0:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_Locations__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    locations: locations,\n                    nextStep: nextStep,\n                    onSelectedLocation: onSelectedLocation\n                }, void 0, false, {\n                    fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                    lineNumber: 117,\n                    columnNumber: 11\n                }, this);\n            case 1:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_Satalites__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                    satalites: selectedLocation.satalites,\n                    nextStep: nextStep,\n                    prevStep: prevStep,\n                    onSelectedSatelite: onSelectedSatelite\n                }, void 0, false, {\n                    fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                    lineNumber: 125,\n                    columnNumber: 11\n                }, this);\n            case 2:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_Passes__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                    satalite: selectedSatelite,\n                    selectPass: onSelectedPass,\n                    prevStep: prevStep\n                }, void 0, false, {\n                    fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                    lineNumber: 134,\n                    columnNumber: 11\n                }, this);\n            case 3:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_Preview__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                    pass: selectedPass,\n                    prevStep: prevStep\n                }, void 0, false, {\n                    fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                    lineNumber: 142,\n                    columnNumber: 11\n                }, this);\n            default:\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_screens_Locations__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    locations: locations,\n                    nextStep: nextStep\n                }, void 0, false, {\n                    fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                    lineNumber: 149,\n                    columnNumber: 11\n                }, this);\n        }\n    };\n    if (isLoading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n        lineNumber: 156,\n        columnNumber: 25\n    }, this);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: error.message\n    }, void 0, false, {\n        fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n        lineNumber: 157,\n        columnNumber: 21\n    }, this);\n    else return status == \"unauthenticated\" ? (0,next_auth_react__WEBPACK_IMPORTED_MODULE_8__.signIn)(\"credentials\", {\n        callbackUrl: \"localhost:22137\"\n    }) : // signIn()\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"container flex flex-col items-center w-screen min-h-screen gap-10 py-24\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Steps__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                steps: steps,\n                activeStep: activeStep,\n                onStepChange: onStepChange\n            }, void 0, false, {\n                fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n                lineNumber: 164,\n                columnNumber: 9\n            }, this),\n            displayScreen()\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/abdulrhmanelkayal/Documents/work/nextjs/satalite-imaging-nextjs/app/page.js\",\n        lineNumber: 163,\n        columnNumber: 7\n    }, this);\n}\n_s(Home, \"Omuh2dWOfOY2ycrTUZ3ayE6drP4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_8__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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OztZQUcxQixLQUFLO2dCQUNILHFCQUNFLDhEQUFDdkMsa0VBQU1BO29CQUNMOEMsVUFBVWpCO29CQUNWa0IsWUFBWUo7b0JBQ1pQLFVBQVVBOzs7Ozs7WUFHaEIsS0FBSztnQkFDSCxxQkFDRSw4REFBQ2xDLG1FQUFPQTtvQkFDTjBDLE1BQU1IO29CQUNOTCxVQUFVQTs7Ozs7O1lBR2hCO2dCQUNFLHFCQUNFLDhEQUFDckMscUVBQVNBO29CQUNScUIsV0FBV0E7b0JBQ1hhLFVBQVVBOzs7Ozs7UUFHbEI7SUFDRjtJQUNBLElBQUloQixXQUFXLHFCQUFPLDhEQUFDK0I7a0JBQUk7Ozs7OztJQUMzQixJQUFJaEMsT0FBTyxxQkFBTyw4REFBQ2dDO2tCQUFLaEMsTUFBTWlDOzs7Ozs7U0FFNUIsT0FBT2xDLFVBQVUsb0JBQ2ZSLHVEQUFNQSxDQUFDLGVBQWU7UUFBRTJDLGFBQWE7SUFBa0IsS0FFdkQsV0FBVztrQkFDWCw4REFBQ0M7UUFBS0MsV0FBVTs7MEJBQ2QsOERBQUN0RCx5REFBS0E7Z0JBQ0pXLE9BQU9BO2dCQUNQUyxZQUFZQTtnQkFDWmEsY0FBY0E7Ozs7OztZQUdmYzs7Ozs7OztBQUdUO0dBbEt3QnJDOztRQU84QkYsdURBQVVBOzs7S0FQeENFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLmpzP2JlNjciXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IFN0ZXBzIGZyb20gXCIuL2NvbXBvbmVudHMvU3RlcHNcIjtcbmltcG9ydCBMb2NhdGlvbnMgZnJvbSBcIi4vY29tcG9uZW50cy9zY3JlZW5zL0xvY2F0aW9uc1wiO1xuaW1wb3J0IFBhc3NlcyBmcm9tIFwiLi9jb21wb25lbnRzL3NjcmVlbnMvUGFzc2VzXCI7XG5pbXBvcnQgU2F0YWxpdGVzIGZyb20gXCIuL2NvbXBvbmVudHMvc2NyZWVucy9TYXRhbGl0ZXNcIjtcbmltcG9ydCBQcmV2aWV3IGZyb20gXCIuL2NvbXBvbmVudHMvc2NyZWVucy9QcmV2aWV3XCI7XG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2UgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IHVzZVNlc3Npb24sIHNpZ25JbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtzdGVwcywgc2V0U3RlcHNdID0gdXNlU3RhdGUoW1xuICAgIHsgaWQ6IFwiU3RlcCAxXCIsIG5hbWU6IFwiU2VsZWN0IExvY2F0aW9uXCIgfSxcbiAgICB7IGlkOiBcIlN0ZXAgMlwiLCBuYW1lOiBcIlNlbGVjdCBTYXRhbGl0ZVwiIH0sXG4gICAgeyBpZDogXCJTdGVwIDNcIiwgbmFtZTogXCJTZWxlY3QgUGFzc1wiIH0sXG4gICAgeyBpZDogXCJTdGVwIDRcIiwgbmFtZTogXCJQcmV2aWV3XCIgfSxcbiAgXSk7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzLCBlcnJvciwgaXNMb2FkaW5nIH0gPSB1c2VTZXNzaW9uKCk7XG5cbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgW2xvY2F0aW9ucywgc2V0TG9jYXRpb25zXSA9IHVzZVN0YXRlKFtcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiBcIkFPTUxcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIkxhc3Qgc2NhbiB3YXMgMiBob3VycyBhZ29cIixcbiAgICAgIGFkZGl0aW9uYWw6IFwiNCBTYXRhbGl0ZXNcIixcbiAgICAgIHNhdGFsaXRlczogW1xuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiTk9BQTE4XCIsXG4gICAgICAgICAgdGl0bGU6IFwiTk9BQS0xOFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgcGFzcyB3YXMgMiBob3VycyBhZ29cIixcbiAgICAgICAgICBhZGRpdGlvbmFsOiBcIjEsMjY1IHBhc3Nlc1wiLFxuICAgICAgICAgIG51bU9mUGFzc2VzOiAxNyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiBcIk5PQUExOVwiLFxuICAgICAgICAgIHRpdGxlOiBcIk5PQUEtMTlcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXN0IHBhc3Mgd2FzIDE1IG1pbnV0ZXMgYWdvXCIsXG4gICAgICAgICAgYWRkaXRpb25hbDogXCI2MTUgcGFzc2VzXCIsXG4gICAgICAgICAgbnVtT2ZQYXNzZXM6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBpZDogXCJNRVRPUC1CXCIsXG4gICAgICAgICAgdGl0bGU6IFwiTUVUT1AtQlwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkxhc3QgcGFzcyB3YXMgMiBob3VycyBhZ29cIixcbiAgICAgICAgICBhZGRpdGlvbmFsOiBcIjEsNTYyIHBhc3Nlc1wiLFxuICAgICAgICAgIG51bU9mUGFzc2VzOiAwLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IFwiTUVUT1AtQ1wiLFxuICAgICAgICAgIHRpdGxlOiBcIk1FVE9QLUNcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJMYXN0IHBhc3Mgd2FzIDE1IG1pbnV0ZXMgYWdvXCIsXG4gICAgICAgICAgYWRkaXRpb25hbDogXCI2MTUgcGFzc2VzXCIsXG4gICAgICAgICAgbnVtT2ZQYXNzZXM6IDAsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICB0aXRsZTogXCJIYXdhaWlcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcIi1cIixcbiAgICAgIGFkZGl0aW9uYWw6IFwiMCBTYXRhbGl0ZXNcIixcbiAgICAgIHNhdGFsaXRlczogW10sXG4gICAgfSxcbiAgXSk7XG5cbiAgY29uc3QgW3NlbGVjdGVkTG9jYXRpb24sIHNldFNlbGVjdGVkTG9jYXRpb25dID0gdXNlU3RhdGUobG9jYXRpb25zWzBdKTtcblxuICBjb25zdCBbc2VsZWN0ZWRTYXRlbGl0ZSwgc2V0U2VsZWN0ZWRTYXRlbGl0ZV0gPSB1c2VTdGF0ZShcbiAgICBzZWxlY3RlZExvY2F0aW9uLnNhdGFsaXRlc1swXVxuICApO1xuXG4gIC8vIHNldCB0aGUgYWN0aXZlIHN0ZXBcblxuICBjb25zdCBvblN0ZXBDaGFuZ2UgPSAoaW5kZXgpID0+IHtcbiAgICBzZXRBY3RpdmVTdGVwKGluZGV4KTtcbiAgfTtcblxuICAvLyBuZXh0IHN0ZXBcblxuICBjb25zdCBuZXh0U3RlcCA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSkgcmV0dXJuO1xuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xuICB9O1xuXG4gIC8vIHByZXZpb3VzIHN0ZXBcblxuICBjb25zdCBwcmV2U3RlcCA9ICgpID0+IHtcbiAgICBpZiAoYWN0aXZlU3RlcCA9PT0gMCkgcmV0dXJuO1xuICAgIGlmIChhY3RpdmVTdGVwID09PSAxKSBzZXRTZWxlY3RlZExvY2F0aW9uKGxvY2F0aW9uc1swXSk7XG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XG4gIH07XG5cbiAgY29uc3Qgb25TZWxlY3RlZExvY2F0aW9uID0gKGxvY2F0aW9uKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRMb2NhdGlvbihsb2NhdGlvbik7XG4gIH07XG5cbiAgY29uc3Qgb25TZWxlY3RlZFNhdGVsaXRlID0gKHNhdGVsaXRlKSA9PiB7XG4gICAgc2V0U2VsZWN0ZWRTYXRlbGl0ZShzYXRlbGl0ZSk7XG4gIH07XG5cbiAgY29uc3QgW3NlbGVjdGVkUGFzcywgc2V0U2VsZWN0ZWRQYXNzXSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIGNvbnN0IG9uU2VsZWN0ZWRQYXNzID0gKHBhc3MpID0+IHtcbiAgICBzZXRTZWxlY3RlZFBhc3MocGFzcyk7XG4gICAgbmV4dFN0ZXAoKTtcbiAgfTtcblxuICAvLyBnZXQgc2VydmVyIHNpZGUgcHJvcHNcblxuICAvLyBkaXNwbGF5IHRoZSBjdXJyZW50IHNjcmVlbiBiYXNlZCBvbiB0aGUgYWN0aXZlIHN0ZXBcbiAgY29uc3QgZGlzcGxheVNjcmVlbiA9ICgpID0+IHtcbiAgICBzd2l0Y2ggKGFjdGl2ZVN0ZXApIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8TG9jYXRpb25zXG4gICAgICAgICAgICBsb2NhdGlvbnM9e2xvY2F0aW9uc31cbiAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgIG9uU2VsZWN0ZWRMb2NhdGlvbj17b25TZWxlY3RlZExvY2F0aW9ufVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNhdGFsaXRlc1xuICAgICAgICAgICAgc2F0YWxpdGVzPXtzZWxlY3RlZExvY2F0aW9uLnNhdGFsaXRlc31cbiAgICAgICAgICAgIG5leHRTdGVwPXtuZXh0U3RlcH1cbiAgICAgICAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgICAgICAgIG9uU2VsZWN0ZWRTYXRlbGl0ZT17b25TZWxlY3RlZFNhdGVsaXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3Nlc1xuICAgICAgICAgICAgc2F0YWxpdGU9e3NlbGVjdGVkU2F0ZWxpdGV9XG4gICAgICAgICAgICBzZWxlY3RQYXNzPXtvblNlbGVjdGVkUGFzc31cbiAgICAgICAgICAgIHByZXZTdGVwPXtwcmV2U3RlcH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxQcmV2aWV3XG4gICAgICAgICAgICBwYXNzPXtzZWxlY3RlZFBhc3N9XG4gICAgICAgICAgICBwcmV2U3RlcD17cHJldlN0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPExvY2F0aW9uc1xuICAgICAgICAgICAgbG9jYXRpb25zPXtsb2NhdGlvbnN9XG4gICAgICAgICAgICBuZXh0U3RlcD17bmV4dFN0ZXB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICB9XG4gIH07XG4gIGlmIChpc0xvYWRpbmcpIHJldHVybiA8ZGl2PkxvYWRpbmcuLi48L2Rpdj47XG4gIGlmIChlcnJvcikgcmV0dXJuIDxkaXY+e2Vycm9yLm1lc3NhZ2V9PC9kaXY+O1xuICBlbHNlXG4gICAgcmV0dXJuIHN0YXR1cyA9PSBcInVuYXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgc2lnbkluKFwiY3JlZGVudGlhbHNcIiwgeyBjYWxsYmFja1VybDogXCJsb2NhbGhvc3Q6MjIxMzdcIiB9KVxuICAgICkgOiAoXG4gICAgICAvLyBzaWduSW4oKVxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwiY29udGFpbmVyIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHctc2NyZWVuIG1pbi1oLXNjcmVlbiBnYXAtMTAgcHktMjRcIj5cbiAgICAgICAgPFN0ZXBzXG4gICAgICAgICAgc3RlcHM9e3N0ZXBzfVxuICAgICAgICAgIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9XG4gICAgICAgICAgb25TdGVwQ2hhbmdlPXtvblN0ZXBDaGFuZ2V9XG4gICAgICAgIC8+XG5cbiAgICAgICAge2Rpc3BsYXlTY3JlZW4oKX1cbiAgICAgIDwvbWFpbj5cbiAgICApO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwiU3RlcHMiLCJMb2NhdGlvbnMiLCJQYXNzZXMiLCJTYXRhbGl0ZXMiLCJQcmV2aWV3IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2UiLCJ1c2VTZXNzaW9uIiwic2lnbkluIiwiSG9tZSIsInN0ZXBzIiwic2V0U3RlcHMiLCJpZCIsIm5hbWUiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImVycm9yIiwiaXNMb2FkaW5nIiwiYWN0aXZlU3RlcCIsInNldEFjdGl2ZVN0ZXAiLCJsb2NhdGlvbnMiLCJzZXRMb2NhdGlvbnMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiYWRkaXRpb25hbCIsInNhdGFsaXRlcyIsIm51bU9mUGFzc2VzIiwic2VsZWN0ZWRMb2NhdGlvbiIsInNldFNlbGVjdGVkTG9jYXRpb24iLCJzZWxlY3RlZFNhdGVsaXRlIiwic2V0U2VsZWN0ZWRTYXRlbGl0ZSIsIm9uU3RlcENoYW5nZSIsImluZGV4IiwibmV4dFN0ZXAiLCJsZW5ndGgiLCJwcmV2QWN0aXZlU3RlcCIsInByZXZTdGVwIiwib25TZWxlY3RlZExvY2F0aW9uIiwibG9jYXRpb24iLCJvblNlbGVjdGVkU2F0ZWxpdGUiLCJzYXRlbGl0ZSIsInNlbGVjdGVkUGFzcyIsInNldFNlbGVjdGVkUGFzcyIsIm9uU2VsZWN0ZWRQYXNzIiwicGFzcyIsImRpc3BsYXlTY3JlZW4iLCJzYXRhbGl0ZSIsInNlbGVjdFBhc3MiLCJkaXYiLCJtZXNzYWdlIiwiY2FsbGJhY2tVcmwiLCJtYWluIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/page.js\n"));

/***/ })

});
(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 27));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages.json ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}

if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/login', function () {return Vue.extend(__webpack_require__(/*! pages/index/login.vue?mpType=page */ 2).default);});
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 13).default);});

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 3);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 10);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e40dfa5a\",\n  null,\n  false,\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0MGRmYTVhJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTQwZGZhNWFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "main"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "status_bar"),
        attrs: { _i: 1 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "content"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "navigatebar"), attrs: { _i: 3 } },
            [
              _c("image", {
                staticClass: _vm._$s(4, "sc", "close"),
                attrs: {
                  src: _vm._$s(
                    4,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/close.png */ 5)
                  ),
                  _i: 4
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(5, "sc", "logo-text"), attrs: { _i: 5 } },
            [
              _c("image", {
                staticClass: _vm._$s(6, "sc", "mid-logo"),
                attrs: {
                  src: _vm._$s(6, "a-src", __webpack_require__(/*! ../../static/logo.png */ 6)),
                  _i: 6
                }
              }),
              _c(
                "view",
                { staticClass: _vm._$s(7, "sc", "mid-text"), attrs: { _i: 7 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(8, "sc", "mtext"),
                      attrs: { _i: 8 }
                    },
                    [_c("text")]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(10, "sc", "mtext"),
                      attrs: { _i: 10 }
                    },
                    [_c("text")]
                  )
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "event"), attrs: { _i: 12 } },
            [
              _c(
                "button",
                {
                  staticClass: _vm._$s(13, "sc", "login-btn"),
                  attrs: { _i: 13 },
                  on: { click: _vm.login }
                },
                [_c("text")]
              ),
              _c(
                "button",
                {
                  staticClass: _vm._$s(15, "sc", "login-btn"),
                  attrs: { _i: 15 }
                },
                [_c("text")]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(17, "sc", "login-way-text"),
              attrs: { _i: 17 }
            },
            [_c("text")]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(19, "sc", "login-way-select"),
              attrs: { _i: 19 }
            },
            [
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      21,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/weibo.png */ 7)
                    ),
                    _i: 21
                  }
                }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      25,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/qq.png */ 8)
                    ),
                    _i: 25
                  }
                }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      29,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/wechat.png */ 9)
                    ),
                    _i: 29
                  }
                }),
                _c("view", [_c("text")])
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(32, "sc", "agreement"), attrs: { _i: 32 } },
            [_c("text", [_c("span"), _c("span")])]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/close.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/close.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9waWMvY2xvc2UucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*****************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/logo.png ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/logo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9sb2dvLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!**********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/weibo.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/weibo.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9waWMvd2VpYm8ucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///7\n");

/***/ }),
/* 8 */
/*!*******************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/qq.png ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/qq.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9waWMvcXEucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!***********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/wechat.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/wechat.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IFwiL3N0YXRpYy9waWMvd2VjaGF0LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///9\n");

/***/ }),
/* 10 */
/*!***********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///10\n");

/***/ }),
/* 11 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  methods: {\n    login: function login() {\n      uni.navigateTo({\n        url: 'index' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBOzs7QUFHQSxHQUxBO0FBTUE7QUFDQSxTQURBLG1CQUNBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxLQUxBLEVBTkEsRSIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzX2JhclwiPlxyXG4gICAgICA8IS0tIOi/memHjOaYr+eKtuaAgeagjyAtLT5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm5hdmlnYXRlYmFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiY2xvc2VcIiBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL2Nsb3NlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2dvLXRleHRcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJtaWQtbG9nb1wiIHNyYz1cIi4uLy4uL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJtaWQtdGV4dFwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJtdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiAxLjVyZW07IGZvbnQtZmFtaWx5OiAn5bm85ZyGJztcIj48dGV4dD7phbfni5fpn7PkuZA8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJtdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiAwLjZyZW07IGZvbnQtZmFtaWx5OiAn5Y2O5paH57uG6buRJztcIj48dGV4dD7pn7PkuZDmgLvmnInmlrDnjqnms5U8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImV2ZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ0blwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzBjOTZlNjtcIiBAY2xpY2s9XCJsb2dpblwiPjx0ZXh0PueZu+W9lTwvdGV4dD48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibG9naW4tYnRuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMGNlNmM1O1wiPjx0ZXh0PuazqOWGjDwvdGV4dD48L2J1dHRvbj5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImxvZ2luLXdheS10ZXh0XCI+PHRleHQ+5YW25LuW55m75b2V5pa55byPPC90ZXh0Pjwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2dpbi13YXktc2VsZWN0XCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy93ZWliby5wbmdcIj5cclxuICAgICAgICAgIDx2aWV3Pjx0ZXh0PuW+ruWNmjwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcXEucG5nXCI+XHJcbiAgICAgICAgICA8dmlldz48dGV4dD5RUTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvd2VjaGF0LnBuZ1wiPlxyXG4gICAgICAgICAgPHZpZXc+PHRleHQ+5b6u5L+hPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJhZ3JlZW1lbnRcIj48dGV4dD7nmbvlvZXku6PooajkvaDlkIzmhI88c3Bhbj7phbfni5fmnI3liqE8L3NwYW4+5ZKMPHNwYW4+6ZqQ56eB5p2h5qy+PC9zcGFuPjwvdGV4dD48L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBsb2dpbigpIHtcclxuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdpbmRleCdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICd+QC90b29sLnNjc3MnO1xyXG4vKiAjaWZkZWYgQVBQLVBMVVMgKi9cclxuICAubWFpbiB7XHJcbiAgICBAaW5jbHVkZSBpLWJhY2tncm91bmQtaDUoJ35AL3N0YXRpYy9waWMvYmcxLmpwZycpO1xyXG4gIH1cclxuLyogI2VuZGlmICovXHJcbi8qICNpZmRlZiBINSAqL1xyXG4gIHBhZ2Uge1xyXG4gICAgQGluY2x1ZGUgaS1iYWNrZ3JvdW5kLWg1KCd+QC9zdGF0aWMvcGljL2JnMS5qcGcnKTtcclxuICB9XHJcbi8qICNlbmRpZiAqL1xyXG4gIC5jb250ZW50IHtcclxuICAgIEBleHRlbmQgLmktZmlsbC1jb250YWluZXI7XHJcbiAgICAvKiDpobXpnaLpu5jorqTkvb/nlKjnmb3oibLljY7mlofmpbfkvZMgKi9cclxuICAgIGZvbnQtZmFtaWx5OiBcIuWNjuaWh+alt+S9k1wiO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0ZWJhciB7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9nby10ZXh0IHtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAxcHg7XHJcbiAgICBcclxuICAgIC5taWQtbG9nbyB7XHJcbiAgICAgIHdpZHRoOiA1OXB4OyBoZWlnaHQ6IDU5cHg7XHJcbiAgICB9XHJcbiAgICAubWlkLXRleHQge1xyXG4gICAgICBAZXh0ZW5kIC5pLWNvbC12ZXJ0aWNhbC1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgXHJcbiAgICAgIC5tdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIEBleHRlbmQgLmktdGV4dC1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5ldmVudCB7XHJcbiAgICBtYXJnaW4tdG9wOiAxODNweDtcclxuICAgIFxyXG4gICAgLmxvZ2luLWJ0biB7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICAgIHdpZHRoOiAyNDhweDsgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLXdheS10ZXh0IHtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtY2VudGVyLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgd2hpdGUtc3BhY2U6IHByZTtcclxuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDM4cHg7XHJcbiAgICBcclxuICAgICY6OmFmdGVyLCAmOjpiZWZvcmV7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICB3aWR0aDogMzUlO1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9naW4td2F5LXNlbGVjdCB7XHJcbiAgICB3aWR0aDogMjM1cHg7IGhlaWdodDogNDFweDtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbWFyZ2luOjAgYXV0bztcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbiAgICBcclxuICAgIGltYWdlIHtcclxuICAgICAgd2lkdGg6IDIycHg7IGhlaWdodDogMjJweDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYWdyZWVtZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMzFweDtcclxuICAgIFxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiAjMDM3Y2MyO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 13 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 14);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 25);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmU4NGEzYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZTg0YTNjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!*****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "main"), attrs: { _i: 0 } },
    [
      _c("view", {
        staticClass: _vm._$s(1, "sc", "status_bar"),
        attrs: { _i: 1 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(2, "sc", "content"), attrs: { _i: 2 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(3, "sc", "navigatebar"), attrs: { _i: 3 } },
            [
              _c("image", {
                staticClass: _vm._$s(4, "sc", "menu"),
                attrs: {
                  src: _vm._$s(
                    4,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/hamburger.png */ 16)
                  ),
                  _i: 4
                }
              }),
              _c("view", [_c("text")]),
              _c("view", [_c("text")]),
              _c("view", [_c("text")]),
              _c("image", {
                staticClass: _vm._$s(11, "sc", "search"),
                attrs: {
                  src: _vm._$s(
                    11,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/search.png */ 17)
                  ),
                  _i: 11
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(12, "sc", "personal"), attrs: { _i: 12 } },
            [
              _c("image", {
                staticClass: _vm._$s(13, "sc", "avatar"),
                attrs: { src: _vm._$s(13, "a-src", _vm.me.avatarUrl), _i: 13 }
              }),
              _c(
                "view",
                { staticClass: _vm._$s(14, "sc", "infor"), attrs: { _i: 14 } },
                [
                  _c(
                    "view",
                    { staticClass: _vm._$s(15, "sc", "up"), attrs: { _i: 15 } },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(16, "sc", "nickname"),
                          attrs: { _i: 16 }
                        },
                        [_vm._v(_vm._$s(16, "t0-0", _vm._s(_vm.me.nickname)))]
                      ),
                      _c("image", {
                        staticClass: _vm._$s(17, "sc", "vip"),
                        attrs: {
                          src: _vm._$s(
                            17,
                            "a-src",
                            __webpack_require__(/*! ../../static/pic/vip.png */ 18)
                          ),
                          _i: 17
                        }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(18, "sc", "down"),
                      attrs: { _i: 18 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(19, "sc", "level"),
                          attrs: { _i: 19 }
                        },
                        [_vm._v(_vm._$s(19, "t0-0", _vm._s(_vm.me.level)))]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(20, "sc", "duration"),
                          attrs: { _i: 20 }
                        },
                        [_vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.me.duration)))]
                      )
                    ]
                  )
                ]
              ),
              _c("image", {
                staticClass: _vm._$s(21, "sc", "messege"),
                attrs: {
                  src: _vm._$s(
                    21,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/email.png */ 19)
                  ),
                  _i: 21
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(22, "sc", "my-music"), attrs: { _i: 22 } },
            _vm._l(_vm._$s(23, "f", { forItems: _vm.myMusic }), function(
              item,
              $10,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(23, "f", { forIndex: $20, key: 23 + "-" + $30 }),
                  staticClass: _vm._$s("23-" + $30, "sc", "my-music-item"),
                  attrs: { _i: "23-" + $30 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s("24-" + $30, "sc", "icon"),
                    attrs: {
                      src: _vm._$s("24-" + $30, "a-src", item.iconUrl),
                      _i: "24-" + $30
                    }
                  }),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s("25-" + $30, "sc", "alt"),
                      attrs: { _i: "25-" + $30 }
                    },
                    [_vm._v(_vm._$s("25-" + $30, "t0-0", _vm._s(item.title)))]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s("26-" + $30, "sc", "num"),
                      attrs: { _i: "26-" + $30 }
                    },
                    [_vm._v(_vm._$s("26-" + $30, "t0-0", _vm._s(item.num)))]
                  )
                ]
              )
            }),
            0
          ),
          _c(
            "view",
            { staticClass: _vm._$s(27, "sc", "all-music"), attrs: { _i: 27 } },
            _vm._l(_vm._$s(28, "f", { forItems: _vm.allMusic }), function(
              item,
              $11,
              $21,
              $31
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(28, "f", { forIndex: $21, key: 28 + "-" + $31 }),
                  staticClass: _vm._$s("28-" + $31, "sc", "all-music-item"),
                  attrs: { _i: "28-" + $31 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("29-" + $31, "sc", "icon-bg"),
                      style: _vm._$s(
                        "29-" + $31,
                        "s",
                        "background-color:" + item.bgc
                      ),
                      attrs: { _i: "29-" + $31 }
                    },
                    [
                      _c("image", {
                        staticClass: _vm._$s("30-" + $31, "sc", "icon"),
                        attrs: {
                          src: _vm._$s("30-" + $31, "a-src", item.iconUrl),
                          _i: "30-" + $31
                        }
                      })
                    ]
                  ),
                  _c(
                    "text",
                    {
                      staticClass: _vm._$s("31-" + $31, "sc", "alt"),
                      attrs: { _i: "31-" + $31 }
                    },
                    [_vm._v(_vm._$s("31-" + $31, "t0-0", _vm._s(item.title)))]
                  )
                ]
              )
            }),
            0
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(32, "sc", "advitisement"),
              attrs: { _i: 32 }
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(33, "sc", "left"), attrs: { _i: 33 } },
                [
                  _c("image", {
                    staticClass: _vm._$s(34, "sc", "icon"),
                    attrs: {
                      src: _vm._$s(
                        34,
                        "a-src",
                        __webpack_require__(/*! ../../static/pic/sound.png */ 20)
                      ),
                      _i: 34
                    }
                  }),
                  _c("text", {
                    staticClass: _vm._$s(35, "sc", "alt"),
                    attrs: { _i: 35 }
                  })
                ]
              ),
              _c("text", {
                staticClass: _vm._$s(36, "sc", "report"),
                attrs: { _i: 36 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(37, "sc", "tabbar"), attrs: { _i: 37 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(38, "sc", "left"), attrs: { _i: 38 } },
                [
                  _c("view", [
                    _c("image", {
                      staticClass: _vm._$s(40, "sc", "cover"),
                      attrs: {
                        src: _vm._$s(
                          40,
                          "a-src",
                          __webpack_require__(/*! ../../static/pic/disc.jpg */ 21)
                        ),
                        _i: 40
                      }
                    })
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(41, "sc", "right"), attrs: { _i: 41 } },
                [
                  _c(
                    "view",
                    { staticClass: _vm._$s(42, "sc", "up"), attrs: { _i: 42 } },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(43, "sc", "loading"),
                          attrs: { _i: 43 }
                        },
                        [
                          _c("view", {
                            staticClass: _vm._$s(44, "sc", "pass"),
                            attrs: { _i: 44 }
                          }),
                          _c("view", {
                            staticClass: _vm._$s(45, "sc", "in"),
                            attrs: { _i: 45 }
                          })
                        ]
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(46, "sc", "down"),
                      attrs: { _i: 46 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(47, "sc", "information"),
                          attrs: { _i: 47 }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(48, "sc", "m-name"),
                              attrs: { _i: 48 }
                            },
                            [
                              _vm._v(
                                _vm._$s(48, "t0-0", _vm._s(_vm.playing.m_name))
                              )
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(49, "sc", "m-singer"),
                              attrs: { _i: 49 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  49,
                                  "t0-0",
                                  _vm._s(_vm.playing.m_singer)
                                )
                              )
                            ]
                          )
                        ]
                      ),
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(50, "sc", "operation"),
                          attrs: { _i: 50 }
                        },
                        [
                          _c("view", [
                            _c("image", {
                              staticClass: _vm._$s(52, "sc", "icon"),
                              attrs: {
                                src: _vm._$s(
                                  52,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/pic/play.png */ 22)
                                ),
                                _i: 52
                              }
                            })
                          ]),
                          _c("view", [
                            _c("image", {
                              staticClass: _vm._$s(54, "sc", "icon"),
                              attrs: {
                                src: _vm._$s(
                                  54,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/pic/next.png */ 23)
                                ),
                                _i: 54
                              }
                            })
                          ]),
                          _c("view", [
                            _c("image", {
                              staticClass: _vm._$s(56, "sc", "icon"),
                              attrs: {
                                src: _vm._$s(
                                  56,
                                  "a-src",
                                  __webpack_require__(/*! ../../static/pic/menu.png */ 24)
                                ),
                                _i: 56
                              }
                            })
                          ])
                        ]
                      )
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 16 */
/*!**************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/hamburger.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/hamburger.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL2hhbWJ1cmdlci5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!***********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/search.png ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/search.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3NlYXJjaC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/vip.png ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/vip.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3ZpcC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/email.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/email.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL2VtYWlsLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/sound.png ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/sound.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3NvdW5kLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/disc.jpg ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/disc.jpg\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL2Rpc2MuanBnXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!*********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIyLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!*********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/next.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/next.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL25leHQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!*********************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/menu.png ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/menu.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL21lbnUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///24\n");

/***/ }),
/* 25 */
/*!***********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 26);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIyNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      me: {\n        avatarUrl: '../../static/pic/avatar.png',\n        nickname: '胡萝北',\n        level: 5,\n        duration: 15302 },\n\n      playing: {\n        id: 1,\n        cover: '../../static/pic/disc.jpg',\n        m_name: '日落大道歌手2017第阿双方均按法律奇偶发哈',\n        m_singer: '梁博' },\n\n      myMusic: [\n      {\n        iconUrl: '../../static/pic/pc.png',\n        title: '本地音乐',\n        num: 148 },\n\n      {\n        iconUrl: '../../static/pic/heart.png',\n        title: '喜欢·歌单',\n        num: 3 },\n      {\n        iconUrl: '../../static/pic/dwonload.png',\n        title: '下载',\n        num: 2 },\n      {\n        iconUrl: '../../static/pic/clock.png',\n        title: '最近',\n        num: 100 }],\n\n\n      allMusic: [\n      {\n        iconUrl: '../../static/pic/lib.png',\n        bgc: '#06b062',\n        title: '乐库' },\n\n      {\n        iconUrl: '../../static/pic/list.png',\n        bgc: '#067ab0',\n        title: '歌单' },\n\n      {\n        iconUrl: '../../static/pic/chart.png',\n        bgc: '#e62134',\n        title: '电台·酷群' },\n\n      {\n        iconUrl: '../../static/pic/radio.png',\n        bgc: '#c25bd1',\n        title: '猜你喜欢' },\n\n      {\n        iconUrl: '../../static/pic/chart.png',\n        bgc: '#edb231',\n        title: '每日推荐' },\n\n      {\n        iconUrl: '../../static/pic/speech.png',\n        bgc: '#4be22d',\n        title: '听歌识曲' }] };\n\n\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0ZBO0FBQ0EsTUFEQSxrQkFDQTtBQUNBO0FBQ0E7QUFDQSxnREFEQTtBQUVBLHVCQUZBO0FBR0EsZ0JBSEE7QUFJQSx1QkFKQSxFQURBOztBQU9BO0FBQ0EsYUFEQTtBQUVBLDBDQUZBO0FBR0Esd0NBSEE7QUFJQSxzQkFKQSxFQVBBOztBQWFBO0FBQ0E7QUFDQSwwQ0FEQTtBQUVBLHFCQUZBO0FBR0EsZ0JBSEEsRUFEQTs7QUFNQTtBQUNBLDZDQURBO0FBRUEsc0JBRkE7QUFHQSxjQUhBLEVBTkE7QUFVQTtBQUNBLGdEQURBO0FBRUEsbUJBRkE7QUFHQSxjQUhBLEVBVkE7QUFjQTtBQUNBLDZDQURBO0FBRUEsbUJBRkE7QUFHQSxnQkFIQSxFQWRBLENBYkE7OztBQWlDQTtBQUNBO0FBQ0EsMkNBREE7QUFFQSxzQkFGQTtBQUdBLG1CQUhBLEVBREE7O0FBTUE7QUFDQSw0Q0FEQTtBQUVBLHNCQUZBO0FBR0EsbUJBSEEsRUFOQTs7QUFXQTtBQUNBLDZDQURBO0FBRUEsc0JBRkE7QUFHQSxzQkFIQSxFQVhBOztBQWdCQTtBQUNBLDZDQURBO0FBRUEsc0JBRkE7QUFHQSxxQkFIQSxFQWhCQTs7QUFxQkE7QUFDQSw2Q0FEQTtBQUVBLHNCQUZBO0FBR0EscUJBSEEsRUFyQkE7O0FBMEJBO0FBQ0EsOENBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBLEVBMUJBLENBakNBOzs7O0FBa0VBLEdBcEVBO0FBcUVBLGFBckVBLEUiLCJmaWxlIjoiMjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHZpZXcgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJuYXZpZ2F0ZWJhclwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cIm1lbnVcIiBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL2hhbWJ1cmdlci5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDx2aWV3Pjx0ZXh0PuWQrDwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+PHRleHQ+55yLPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8dmlldz48dGV4dD7llLE8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cInNlYXJjaFwiIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvc2VhcmNoLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJwZXJzb25hbFwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImF2YXRhclwiIDpzcmM9XCJtZS5hdmF0YXJVcmxcIj48L2ltYWdlPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiaW5mb3JcIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidXBcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJuaWNrbmFtZVwiPnt7IG1lLm5pY2tuYW1lIH19PC90ZXh0PlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJ2aXBcIiBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3ZpcC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJkb3duXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGV2ZWxcIj5MVi57eyBtZS5sZXZlbCB9fTwvdmlldz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkdXJhdGlvblwiPuWQrOatjHt7IG1lLmR1cmF0aW9uIH195YiG6ZKfPC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJtZXNzZWdlXCIgc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9lbWFpbC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibXktbXVzaWNcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cIm15LW11c2ljLWl0ZW1cIiB2LWZvcj1cIml0ZW0gaW4gbXlNdXNpY1wiPlxyXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJpdGVtLmljb25VcmxcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJhbHRcIj57eyBpdGVtLnRpdGxlIH19PC90ZXh0PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJudW1cIj57eyBpdGVtLm51bSB9fTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJhbGwtbXVzaWNcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImFsbC1tdXNpYy1pdGVtXCIgdi1mb3I9XCJpdGVtIGluIGFsbE11c2ljXCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImljb24tYmdcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1jb2xvcjonK2l0ZW0uYmdjXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiA6c3JjPVwiaXRlbS5pY29uVXJsXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYWx0XCI+e3sgaXRlbS50aXRsZSB9fTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJhZHZpdGlzZW1lbnRcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3NvdW5kLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImFsdFwiPuaOqOW5vzwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJyZXBvcnRcIj7oo4Xkuobov5nkuKphcHDkuI3nlKjlho3ljrtrdHY8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJjb3ZlclwiIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvZGlzYy5qcGdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldyBjbGFzcz1cInJpZ2h0XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cInVwXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibG9hZGluZ1wiPlxyXG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwicGFzc1wiPjwvdmlldz5cclxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImluXCI+PC92aWV3PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImRvd25cIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibS1uYW1lXCI+e3sgcGxheWluZy5tX25hbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJtLXNpbmdlclwiPnt7IHBsYXlpbmcubV9zaW5nZXIgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJvcGVyYXRpb25cIj5cclxuICAgICAgICAgICAgICA8dmlldz5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXkucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9uZXh0LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvbWVudS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZToge1xyXG4gICAgICAgICAgYXZhdGFyVXJsOiAnLi4vLi4vc3RhdGljL3BpYy9hdmF0YXIucG5nJyxcclxuICAgICAgICAgIG5pY2tuYW1lOiAn6IOh6JCd5YyXJyxcclxuICAgICAgICAgIGxldmVsOiA1LFxyXG4gICAgICAgICAgZHVyYXRpb246IDE1MzAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5aW5nOiB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGNvdmVyOiAnLi4vLi4vc3RhdGljL3BpYy9kaXNjLmpwZycsXHJcbiAgICAgICAgICBtX25hbWU6ICfml6XokL3lpKfpgZPmrYzmiYsyMDE356ys6Zi/5Y+M5pa55Z2H5oyJ5rOV5b6L5aWH5YG25Y+R5ZOIJyxcclxuICAgICAgICAgIG1fc2luZ2VyOiAn5qKB5Y2aJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbXlNdXNpYzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnLi4vLi4vc3RhdGljL3BpYy9wYy5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+acrOWcsOmfs+S5kCcsXHJcbiAgICAgICAgICAgIG51bTogMTQ4XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnLi4vLi4vc3RhdGljL3BpYy9oZWFydC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+WWnOasosK35q2M5Y2VJyxcclxuICAgICAgICAgICAgbnVtOiAzXHJcbiAgICAgICAgICB9LCAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcuLi8uLi9zdGF0aWMvcGljL2R3b25sb2FkLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5LiL6L29JyxcclxuICAgICAgICAgICAgbnVtOiAyXHJcbiAgICAgICAgICB9LCAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcuLi8uLi9zdGF0aWMvcGljL2Nsb2NrLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pyA6L+RJyxcclxuICAgICAgICAgICAgbnVtOiAxMDBcclxuICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGFsbE11c2ljOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcuLi8uLi9zdGF0aWMvcGljL2xpYi5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjMDZiMDYyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfkuZDlupMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnLi4vLi4vc3RhdGljL3BpYy9saXN0LnBuZycsXHJcbiAgICAgICAgICAgIGJnYzogJyMwNjdhYjAnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+atjOWNlSdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcuLi8uLi9zdGF0aWMvcGljL2NoYXJ0LnBuZycsXHJcbiAgICAgICAgICAgIGJnYzogJyNlNjIxMzQnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+eUteWPsMK36YW3576kJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy4uLy4uL3N0YXRpYy9waWMvcmFkaW8ucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2MyNWJkMScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn54yc5L2g5Zac5qyiJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy4uLy4uL3N0YXRpYy9waWMvY2hhcnQucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2VkYjIzMScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5q+P5pel5o6o6I2QJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy4uLy4uL3N0YXRpYy9waWMvc3BlZWNoLnBuZycsXHJcbiAgICAgICAgICAgIGJnYzogJyM0YmUyMmQnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+WQrOatjOivhuabsidcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7fVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC8qICNpZmRlZiBBUFAtUExVUyAqL1xyXG4gICAgLm1haW4ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35AL3N0YXRpYy9waWMvYmcyLmpwZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7ICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiBhdXRvO1xyXG4gICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICB6LWluZGV4OiAtMjtcclxuICAgIH1cclxuICAvKiAjZW5kaWYgKi9cclxuICAvKiAjaWZkZWYgSDUgKi9cclxuICAgIHBhZ2Uge1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ35AL3N0YXRpYy9waWMvYmcyLmpwZycpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgICAgd2lkdGg6IDEwMCU7ICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgLyogI2VuZGlmICovXHJcbiAgcGFnZSB7XHJcbiAgICBmb250LWZhbWlseTogJ+WNjuaWh+alt+S9kyc7XHJcbiAgfVxyXG4gIHRleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLm5hdmlnYXRlYmFyIHtcclxuICAgIGhlaWdodDogNTFweDtcclxuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICflubzlnIYnO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIH1cclxuICAubWVudSB7XHJcbiAgICB3aWR0aDogMThweDsgIGhlaWdodDogMTVweDtcclxuICB9XHJcbiAgLnNlYXJjaCB7XHJcbiAgICB3aWR0aDogMThweDsgIGhlaWdodDogMThweDtcclxuICB9XHJcbiAgXHJcbiAgLnBlcnNvbmFsIHtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIHBhZGRpbmc6IDBweCAxOHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICAuYXZhdGFyIHtcclxuICAgIHdpZHRoOiA0M3B4OyAgaGVpZ2h0OiA0M3B4O1xyXG4gIH1cclxuICAuaW5mb3J7XHJcbiAgICBtYXJnaW4tbGVmdDogMTQuNjZweDtcclxuICB9XHJcbiAgLm5pY2tuYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMC42ZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICB9XHJcbiAgLnZpcCB7XHJcbiAgICB3aWR0aDogOHB4OyAgaGVpZ2h0OiA1cHg7XHJcbiAgfVxyXG4gIC5kb3duIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgLmxldmVsIHtcclxuICAgIGZvbnQtc2l6ZTogMC4zNGVtO1xyXG4gICAgZm9udC1mYW1pbHk6ICfljY7mlofkuK3lrosnO1xyXG4gICAgY29sb3I6ICNmOWE4MGI7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlhODBiIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gIH1cclxuICAuZHVyYXRpb24ge1xyXG4gICAgZm9udC1zaXplOiAwLjM2ZW07XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgY29sb3I6ICNiNWI0YjE7XHJcbiAgfVxyXG4gIC5tZXNzZWdlIHtcclxuICAgIHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDExcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTY5cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5teS1tdXNpYyB7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNS42NnB4IDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMTZweDtcclxuICB9XHJcbiAgLm15LW11c2ljLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IFxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgLm15LW11c2ljLWl0ZW0gLmljb24ge1xyXG4gICAgd2lkdGg6IDI2cHg7ICBoZWlnaHQ6IDI2cHg7ICAgIFxyXG4gIH1cclxuICAubXktbXVzaWMtaXRlbSAuYWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgfVxyXG4gIC5teS1tdXNpYy1pdGVtIC5udW0ge1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBjb2xvcjogI2I1YjRiMTtcclxuICAgIG1hcmdpbi10b3A6IDlweDtcclxuICB9XHJcbiAgLmFsbC1tdXNpYyB7XHJcbiAgICBoZWlnaHQ6IDIwNnB4OyAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICB9XHJcbiAgLmFsbC1tdXNpYy1pdGVtIHtcclxuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAzMnB4O1xyXG4gIH1cclxuICAuYWxsLW11c2ljLWl0ZW0gLmljb24tYmcge1xyXG4gICAgd2lkdGg6IDU1cHg7ICBoZWlnaHQ6IDU1cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNy41cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICAuYWxsLW11c2ljLWl0ZW0gLmljb24ge1xyXG4gICAgd2lkdGg6IDE4cHg7ICBoZWlnaHQ6IDIxcHg7ICAgXHJcbiAgfVxyXG4gIC5hbGwtbXVzaWMtaXRlbSAuYWx0IHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgY29sb3I6ICM4N2NiY2M7XHJcbiAgICBtYXJnaW46IDExcHggMHB4O1xyXG4gIH1cclxuICBcclxuICAuYWR2aXRpc2VtZW50IHtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIG1hcmdpbjogMHB4IDIwcHg7XHJcbiAgICBib3JkZXItdG9wOjFweCBzb2xpZCAjMGE4ZWM1O1xyXG4gICAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgIzBhOGVjNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICB9XHJcbiAgLmFkdml0aXNlbWVudCAubGVmdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5hZHZpdGlzZW1lbnQgLmljb24ge1xyXG4gICAgd2lkdGg6IDE5cHg7ICBoZWlnaHQ6IDE5cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XHJcbiAgfVxyXG4gIC5hZHZpdGlzZW1lbnQgLmFsdCB7XHJcbiAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICBjb2xvcjogIzg3Y2JjYztcclxuICB9XHJcbiAgLmFkdml0aXNlbWVudCAucmVwb3J0IHtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgY29sb3I6ICM4N2NiY2M7XHJcbiAgfVxyXG4gIC50YWJiYXIge1xyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNjZweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTUxZjI4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgfVxyXG4gIC50YWJiYXIgLmNvdmVye1xyXG4gICAgd2lkdGg6IDU5cHg7IGhlaWdodDogNTlweDtcclxuICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgYm9yZGVyOiBzb2xpZCAjMDgwYzEwIDNweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvdHRvbTogNXB4O1xyXG4gIH1cclxuICAudGFiYmFyIC5yaWdodHtcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIC50YWJiYXIgLnVwe1xyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgLnRhYmJhciAudXAgLmxvYWRpbmd7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDExODJkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC50YWJiYXIgLnVwIC5sb2FkaW5nIC5wYXNze1xyXG4gICAgd2lkdGg6IDUwJTsgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5MGYzO1xyXG4gIH1cclxuICAudGFiYmFyIC51cCAubG9hZGluZyAuaW57XHJcbiAgICB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTkwZjM7XHJcbiAgfVxyXG4gIC50YWJiYXIgLmRvd257XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIG1hcmdpbi10b3A6IDBweDtcclxuICB9XHJcbiAgLnRhYmJhciAuaW5mb3JtYXRpb257XHJcbiAgICB3aWR0aDogNTAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgfVxyXG4gIC50YWJiYXIgLm9wZXJhdGlvbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuICAudGFiYmFyIC5tLW5hbWV7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjsgICBcclxuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7ICAgICBcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcclxuICB9XHJcbiAgLnRhYmJhciAubS1zaW5nZXJ7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICAgIGZvbnQtc2l6ZTogMC40OHJlbTtcclxuICB9XHJcbiAgLnRhYmJhciAuaWNvbntcclxuICAgIHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 28 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 29);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 12);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDd007QUFDeE0sZ0JBQWdCLGtOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 30);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1yQixDQUFnQiw2c0JBQUcsRUFBQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 31)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function jsonStringifyReplacer (k, p) {
  switch (typof(p)) {
    case 'Function':
      return 'function() { [native code] }'
    default :
      return p
  }
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v, jsonStringifyReplacer) + '---END:JSON---'
      } catch (e) {
        v = type
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ })
],[[0,"app-config"]]]);
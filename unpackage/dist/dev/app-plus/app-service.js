(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 34));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 35));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcCBmcm9tICcuL0FwcCdcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcblxyXG5BcHAubXBUeXBlID0gJ2FwcCdcclxuXHJcbmNvbnN0IGFwcCA9IG5ldyBWdWUoe1xyXG4gICAgLi4uQXBwXHJcbn0pXHJcbmFwcC4kbW91bnQoKSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///0\n");

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
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 8).default);});
__definePage('pages/index/play', function () {return Vue.extend(__webpack_require__(/*! pages/index/play.vue?mpType=page */ 13).default);});
__definePage('pages/index/playlist', function () {return Vue.extend(__webpack_require__(/*! pages/index/playlist.vue?mpType=page */ 22).default);});

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 3);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e40dfa5a\",\n  null,\n  false,\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0MGRmYTVhJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTQwZGZhNWFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

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
      _c("view", { staticClass: _vm._$s(1, "sc", "bg"), attrs: { _i: 1 } }),
      _c("view", {
        staticClass: _vm._$s(2, "sc", "status_bar"),
        attrs: { _i: 2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "content"), attrs: { _i: 3 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "navigatebar"), attrs: { _i: 4 } },
            [
              _c("image", {
                staticClass: _vm._$s(5, "sc", "close"),
                attrs: { _i: 5 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(6, "sc", "logo-text"), attrs: { _i: 6 } },
            [
              _c("image", {
                staticClass: _vm._$s(7, "sc", "mid-logo"),
                attrs: { _i: 7 }
              }),
              _c(
                "view",
                { staticClass: _vm._$s(8, "sc", "mid-text"), attrs: { _i: 8 } },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(9, "sc", "mtext"),
                      attrs: { _i: 9 }
                    },
                    [_c("text")]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(11, "sc", "mtext"),
                      attrs: { _i: 11 }
                    },
                    [_c("text")]
                  )
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(13, "sc", "event"), attrs: { _i: 13 } },
            [
              _c(
                "button",
                {
                  staticClass: _vm._$s(14, "sc", "login-btn"),
                  attrs: { _i: 14 },
                  on: { click: _vm.login }
                },
                [_c("text")]
              ),
              _c(
                "button",
                {
                  staticClass: _vm._$s(16, "sc", "login-btn"),
                  attrs: { _i: 16 }
                },
                [_c("text")]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(18, "sc", "login-way-text"),
              attrs: { _i: 18 }
            },
            [_c("text")]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(20, "sc", "login-way-select"),
              attrs: { _i: 20 }
            },
            [
              _c("view", [
                _c("image", { attrs: { _i: 22 } }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", { attrs: { _i: 26 } }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", { attrs: { _i: 30 } }),
                _c("view", [_c("text")])
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(33, "sc", "agreement"), attrs: { _i: 33 } },
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
/*!***********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./login.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xvZ2luLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {};\n\n\n  },\n  methods: {\n    login: function login() {\n      uni.navigateTo({\n        url: 'index' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTs7O0FBR0EsR0FMQTtBQU1BO0FBQ0EsU0FEQSxtQkFDQTtBQUNBO0FBQ0Esb0JBREE7O0FBR0EsS0FMQSxFQU5BLEUiLCJmaWxlIjoiNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmdcIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJuYXZpZ2F0ZWJhclwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cImNsb3NlXCIgc3JjPVwiL3N0YXRpYy9waWMvbG9naW4vY2xvc2UucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImxvZ28tdGV4dFwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cIm1pZC1sb2dvXCIgc3JjPVwiL3N0YXRpYy9sb2dvLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJtaWQtdGV4dFwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJtdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiAxLjVyZW07IGZvbnQtZmFtaWx5OiAn5bm85ZyGJztcIj48dGV4dD7phbfni5fpn7PkuZA8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJtdGV4dFwiIHN0eWxlPVwiZm9udC1zaXplOiAwLjZyZW07IGZvbnQtZmFtaWx5OiAn5Y2O5paH57uG6buRJztcIj48dGV4dD7pn7PkuZDmgLvmnInmlrDnjqnms5U8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImV2ZW50XCI+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ0blwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzBjOTZlNjtcIiBAY2xpY2s9XCJsb2dpblwiPjx0ZXh0PueZu+W9lTwvdGV4dD48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwibG9naW4tYnRuXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWNvbG9yOiAjMGNlNmM1O1wiPjx0ZXh0PuazqOWGjDwvdGV4dD48L2J1dHRvbj5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImxvZ2luLXdheS10ZXh0XCI+PHRleHQ+5YW25LuW55m75b2V5pa55byPPC90ZXh0Pjwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2dpbi13YXktc2VsZWN0XCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvbG9naW4vd2VpYm8ucG5nXCI+XHJcbiAgICAgICAgICA8dmlldz48dGV4dD7lvq7ljZo8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL3BpYy9sb2dpbi9xcS5wbmdcIj5cclxuICAgICAgICAgIDx2aWV3Pjx0ZXh0PlFRPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvbG9naW4vd2VjaGF0LnBuZ1wiPlxyXG4gICAgICAgICAgPHZpZXc+PHRleHQ+5b6u5L+hPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJhZ3JlZW1lbnRcIj48dGV4dD7nmbvlvZXku6PooajkvaDlkIzmhI88c3Bhbj7phbfni5fmnI3liqE8L3NwYW4+5ZKMPHNwYW4+6ZqQ56eB5p2h5qy+PC9zcGFuPjwvdGV4dD48L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBsb2dpbigpIHtcclxuICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICdpbmRleCdcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICd+QC90b29sLnNjc3MnO1xyXG4gICRiZ2k6ICcvc3RhdGljL3BpYy9sb2dpbi9iZzEuanBnJztcclxuICAuYmcge1xyXG4gICAgQGluY2x1ZGUgaS1iYWNrZ3JvdW5kLWFwcCgkYmdpKTtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgQGV4dGVuZCAuaS1maWxsLWNvbnRhaW5lcjsgICAgXHJcbiAgICBmb250LWZhbWlseTogXCLljY7mlofmpbfkvZNcIjtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAubmF2aWdhdGViYXIge1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAzM3B4O1xyXG4gICAgXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTlweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ28tdGV4dCB7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDEwMXB4O1xyXG4gICAgXHJcbiAgICAubWlkLWxvZ28ge1xyXG4gICAgICB3aWR0aDogNTlweDsgaGVpZ2h0OiA1OXB4O1xyXG4gICAgfVxyXG4gICAgLm1pZC10ZXh0IHtcclxuICAgICAgQGV4dGVuZCAuaS1jb2wtdmVydGljYWwtYmV0d2VlbjtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDI2cHg7XHJcbiAgICAgIFxyXG4gICAgICAubXRleHQge1xyXG4gICAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgICAgICBAZXh0ZW5kIC5pLXRleHQtYmV0d2VlbjtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZXZlbnQge1xyXG4gICAgbWFyZ2luLXRvcDogMTgzcHg7XHJcbiAgICBcclxuICAgIC5sb2dpbi1idG4ge1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgICB3aWR0aDogMjQ4cHg7IGhlaWdodDogMzVweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dpbi13YXktdGV4dCB7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XHJcbiAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAzOHB4O1xyXG4gICAgXHJcbiAgICAmOjphZnRlciwgJjo6YmVmb3Jle1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgd2lkdGg6IDM1JTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvZ2luLXdheS1zZWxlY3Qge1xyXG4gICAgd2lkdGg6IDIzNXB4OyBoZWlnaHQ6IDQxcHg7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIG1hcmdpbjowIGF1dG87XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWJldHdlZW47XHJcbiAgICBtYXJnaW4tdG9wOiAyOHB4O1xyXG4gICAgXHJcbiAgICBpbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAyMnB4OyBoZWlnaHQ6IDIycHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHRleHQge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgLmFncmVlbWVudCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIG1hcmdpbi10b3A6IDMxcHg7XHJcbiAgICBcclxuICAgIHNwYW4ge1xyXG4gICAgICBjb2xvcjogIzAzN2NjMjtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
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
/* 8 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 9);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 11);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmJlODRhM2NcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///8\n");

/***/ }),
/* 9 */
/*!*****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 10);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 10 */
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
      _c("view", { staticClass: _vm._$s(1, "sc", "bg"), attrs: { _i: 1 } }),
      _c("view", {
        staticClass: _vm._$s(2, "sc", "status_bar"),
        attrs: { _i: 2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "content"), attrs: { _i: 3 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "navigatebar"), attrs: { _i: 4 } },
            [
              _c("image", {
                staticClass: _vm._$s(5, "sc", "menu"),
                attrs: { _i: 5 }
              }),
              _c("view", [
                _c("text", {
                  staticClass: _vm._$s(7, "sc", "gri"),
                  attrs: { _i: 7 }
                })
              ]),
              _c("view", [_c("text")]),
              _c("view", [_c("text")]),
              _c("image", {
                staticClass: _vm._$s(12, "sc", "search"),
                attrs: { _i: 12 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(13, "sc", "personal"), attrs: { _i: 13 } },
            [
              _c("image", {
                staticClass: _vm._$s(14, "sc", "avatar"),
                attrs: { src: _vm._$s(14, "a-src", _vm.me.avatarUrl), _i: 14 }
              }),
              _c(
                "view",
                { staticClass: _vm._$s(15, "sc", "infor"), attrs: { _i: 15 } },
                [
                  _c(
                    "view",
                    { staticClass: _vm._$s(16, "sc", "up"), attrs: { _i: 16 } },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(17, "sc", "nickname"),
                          attrs: { _i: 17 }
                        },
                        [_vm._v(_vm._$s(17, "t0-0", _vm._s(_vm.me.nickname)))]
                      ),
                      _c("image", {
                        staticClass: _vm._$s(18, "sc", "vip"),
                        attrs: { _i: 18 }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(19, "sc", "down"),
                      attrs: { _i: 19 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(20, "sc", "level"),
                          attrs: { _i: 20 }
                        },
                        [_vm._v(_vm._$s(20, "t0-0", _vm._s(_vm.me.level)))]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s(21, "sc", "duration"),
                          attrs: { _i: 21 }
                        },
                        [_vm._v(_vm._$s(21, "t0-0", _vm._s(_vm.me.duration)))]
                      )
                    ]
                  )
                ]
              ),
              _c("image", {
                staticClass: _vm._$s(22, "sc", "messege"),
                attrs: { _i: 22 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(23, "sc", "my-music"), attrs: { _i: 23 } },
            _vm._m(0),
            0
          ),
          _c(
            "view",
            { staticClass: _vm._$s(28, "sc", "all-music"), attrs: { _i: 28 } },
            _vm._m(1),
            0
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(33, "sc", "advitisement"),
              attrs: { _i: 33 }
            },
            [
              _c(
                "view",
                { staticClass: _vm._$s(34, "sc", "left"), attrs: { _i: 34 } },
                [
                  _c("image", {
                    staticClass: _vm._$s(35, "sc", "icon"),
                    attrs: { _i: 35 }
                  }),
                  _c("text", {
                    staticClass: _vm._$s(36, "sc", "alt"),
                    attrs: { _i: 36 }
                  })
                ]
              ),
              _c("text", {
                staticClass: _vm._$s(37, "sc", "report"),
                attrs: { _i: 37 }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(38, "sc", "tabbar"), attrs: { _i: 38 } },
            [
              _c(
                "view",
                { staticClass: _vm._$s(39, "sc", "left"), attrs: { _i: 39 } },
                [
                  _c("view", [
                    _c("image", {
                      staticClass: _vm._$s(41, "sc", "cover"),
                      attrs: {
                        src: _vm._$s(41, "a-src", _vm.playing.cover),
                        _i: 41
                      }
                    })
                  ])
                ]
              ),
              _c(
                "view",
                { staticClass: _vm._$s(42, "sc", "right"), attrs: { _i: 42 } },
                [
                  _c(
                    "view",
                    { staticClass: _vm._$s(43, "sc", "up"), attrs: { _i: 43 } },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(44, "sc", "loading"),
                          attrs: { _i: 44 }
                        },
                        [
                          _c("view", {
                            staticClass: _vm._$s(45, "sc", "pass"),
                            attrs: { _i: 45 }
                          }),
                          _c("view", {
                            staticClass: _vm._$s(46, "sc", "in"),
                            attrs: { _i: 46 }
                          })
                        ]
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(47, "sc", "down"),
                      attrs: { _i: 47 }
                    },
                    [
                      _c(
                        "view",
                        {
                          staticClass: _vm._$s(48, "sc", "information"),
                          attrs: { _i: 48 }
                        },
                        [
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(49, "sc", "m-name"),
                              attrs: { _i: 49 }
                            },
                            [
                              _vm._v(
                                _vm._$s(49, "t0-0", _vm._s(_vm.playing.m_name))
                              )
                            ]
                          ),
                          _c(
                            "text",
                            {
                              staticClass: _vm._$s(50, "sc", "m-singer"),
                              attrs: { _i: 50 }
                            },
                            [
                              _vm._v(
                                _vm._$s(
                                  50,
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
                          staticClass: _vm._$s(51, "sc", "operation"),
                          attrs: { _i: 51 }
                        },
                        [
                          _c("view", [
                            _c("image", {
                              staticClass: _vm._$s(53, "sc", "icon"),
                              attrs: { _i: 53 }
                            })
                          ]),
                          _c("view", [
                            _c("image", {
                              staticClass: _vm._$s(55, "sc", "icon"),
                              attrs: { _i: 55 }
                            })
                          ]),
                          _c(
                            "view",
                            { attrs: { _i: 56 }, on: { click: _vm.toPlaying } },
                            [
                              _c("image", {
                                staticClass: _vm._$s(57, "sc", "icon"),
                                attrs: { _i: 57 }
                              })
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
    ]
  )
}
var recyclableRender = false
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _vm._l(_vm._$s(24, "f", { forItems: _vm.myMusic }), function(
      item,
      index,
      $20,
      $30
    ) {
      return _c(
        "view",
        {
          key: _vm._$s(24, "f", { forIndex: $20, key: index }),
          staticClass: _vm._$s("24-" + $30, "sc", "my-music-item"),
          attrs: { _i: "24-" + $30 },
          on: {
            click: function($event) {
              return _vm.toPlayList(index)
            }
          }
        },
        [
          _c("image", {
            staticClass: _vm._$s("25-" + $30, "sc", "icon"),
            attrs: {
              src: _vm._$s("25-" + $30, "a-src", item.iconUrl),
              _i: "25-" + $30
            }
          }),
          _c(
            "text",
            {
              staticClass: _vm._$s("26-" + $30, "sc", "alt"),
              attrs: { _i: "26-" + $30 }
            },
            [_vm._v(_vm._$s("26-" + $30, "t0-0", _vm._s(item.title)))]
          ),
          _c(
            "text",
            {
              staticClass: _vm._$s("27-" + $30, "sc", "num"),
              attrs: { _i: "27-" + $30 }
            },
            [_vm._v(_vm._$s("27-" + $30, "t0-0", _vm._s(item.num)))]
          )
        ]
      )
    })
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _vm._l(_vm._$s(29, "f", { forItems: _vm.allMusic }), function(
      item,
      index,
      $21,
      $31
    ) {
      return _c(
        "view",
        {
          key: _vm._$s(29, "f", { forIndex: $21, key: index }),
          staticClass: _vm._$s("29-" + $31, "sc", "all-music-item"),
          attrs: { _i: "29-" + $31 }
        },
        [
          _c(
            "view",
            {
              staticClass: _vm._$s("30-" + $31, "sc", "icon-bg"),
              style: _vm._$s("30-" + $31, "s", "background-color:" + item.bgc),
              attrs: { _i: "30-" + $31 }
            },
            [
              _c("image", {
                staticClass: _vm._$s("31-" + $31, "sc", "icon"),
                attrs: {
                  src: _vm._$s("31-" + $31, "a-src", item.iconUrl),
                  _i: "31-" + $31
                }
              })
            ]
          ),
          _c(
            "text",
            {
              staticClass: _vm._$s("32-" + $31, "sc", "alt"),
              attrs: { _i: "32-" + $31 }
            },
            [_vm._v(_vm._$s("32-" + $31, "t0-0", _vm._s(item.title)))]
          )
        ]
      )
    })
  }
]
render._withStripped = true



/***/ }),
/* 11 */
/*!***********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 12);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIxMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///11\n");

/***/ }),
/* 12 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      me: {\n        avatarUrl: '/static/pic/index/avatar.png',\n        nickname: '胡萝北',\n        level: 5,\n        duration: 15302 },\n\n      playing: {\n        id: 1,\n        cover: '/static/pic/index/disc.jpg',\n        m_name: '日落大道歌手2017第阿双方均按法律奇偶发哈',\n        m_singer: '梁博' },\n\n      myMusic: [\n      {\n        iconUrl: '/static/pic/index/pc.png',\n        title: '本地音乐',\n        num: 148 },\n\n      {\n        iconUrl: '/static/pic/index/heart.png',\n        title: '喜欢·歌单',\n        num: 3 },\n      {\n        iconUrl: '/static/pic/index/dwonload.png',\n        title: '下载',\n        num: 2 },\n      {\n        iconUrl: '/static/pic/index/clock.png',\n        title: '最近',\n        num: 100 }],\n\n\n      allMusic: [\n      {\n        iconUrl: '/static/pic/index/lib.png',\n        bgc: '#06b062',\n        title: '乐库' },\n\n      {\n        iconUrl: '/static/pic/index/list.png',\n        bgc: '#067ab0',\n        title: '歌单' },\n\n      {\n        iconUrl: '/static/pic/index/chart.png',\n        bgc: '#e62134',\n        title: '电台·酷群' },\n\n      {\n        iconUrl: '/static/pic/index/radio.png',\n        bgc: '#c25bd1',\n        title: '猜你喜欢' },\n\n      {\n        iconUrl: '/static/pic/index/chart.png',\n        bgc: '#edb231',\n        title: '每日推荐' },\n\n      {\n        iconUrl: '/static/pic/index/speech.png',\n        bgc: '#4be22d',\n        title: '听歌识曲' }] };\n\n\n\n  },\n  methods: {\n    toPlayList: function toPlayList(id) {\n      if (id == 3)\n      uni.navigateTo({\n        url: 'playlist' });\n\n    },\n    toPlaying: function toPlaying() {\n      uni.navigateTo({\n        url: 'play' });\n\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVGQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBREE7QUFFQSx1QkFGQTtBQUdBLGdCQUhBO0FBSUEsdUJBSkEsRUFEQTs7QUFPQTtBQUNBLGFBREE7QUFFQSwyQ0FGQTtBQUdBLHdDQUhBO0FBSUEsc0JBSkEsRUFQQTs7QUFhQTtBQUNBO0FBQ0EsMkNBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBLEVBREE7O0FBTUE7QUFDQSw4Q0FEQTtBQUVBLHNCQUZBO0FBR0EsY0FIQSxFQU5BO0FBVUE7QUFDQSxpREFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQSxFQVZBO0FBY0E7QUFDQSw4Q0FEQTtBQUVBLG1CQUZBO0FBR0EsZ0JBSEEsRUFkQSxDQWJBOzs7QUFpQ0E7QUFDQTtBQUNBLDRDQURBO0FBRUEsc0JBRkE7QUFHQSxtQkFIQSxFQURBOztBQU1BO0FBQ0EsNkNBREE7QUFFQSxzQkFGQTtBQUdBLG1CQUhBLEVBTkE7O0FBV0E7QUFDQSw4Q0FEQTtBQUVBLHNCQUZBO0FBR0Esc0JBSEEsRUFYQTs7QUFnQkE7QUFDQSw4Q0FEQTtBQUVBLHNCQUZBO0FBR0EscUJBSEEsRUFoQkE7O0FBcUJBO0FBQ0EsOENBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBLEVBckJBOztBQTBCQTtBQUNBLCtDQURBO0FBRUEsc0JBRkE7QUFHQSxxQkFIQSxFQTFCQSxDQWpDQTs7OztBQWtFQSxHQXBFQTtBQXFFQTtBQUNBLGNBREEsc0JBQ0EsRUFEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQURBOztBQUdBLEtBTkE7QUFPQSxhQVBBLHVCQU9BO0FBQ0E7QUFDQSxtQkFEQTs7QUFHQSxLQVhBLEVBckVBLEUiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPHZpZXcgY2xhc3M9XCJtYWluXCI+XHJcbiAgICA8dmlldyBjbGFzcz1cImJnXCI+PC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJzdGF0dXNfYmFyXCI+XHJcbiAgICAgIDwhLS0g6L+Z6YeM5piv54q25oCB5qCPIC0tPlxyXG4gICAgPC92aWV3PlxyXG4gICAgPHZpZXcgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibmF2aWdhdGViYXJcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJtZW51XCIgc3JjPVwiL3N0YXRpYy9waWMvaW5kZXgvaGFtYnVyZ2VyLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXc+PHRleHQgY2xhc3M9XCJncmlcIj7lkKw8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDx2aWV3Pjx0ZXh0PuecizwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+PHRleHQ+5ZSxPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJzZWFyY2hcIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9zZWFyY2gucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInBlcnNvbmFsXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyXCIgOnNyYz1cIm1lLmF2YXRhclVybFwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvclwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ1cFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5pY2tuYW1lXCI+e3sgbWUubmlja25hbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInZpcFwiIHNyYz1cIi9zdGF0aWMvcGljL2luZGV4L3ZpcC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJkb3duXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGV2ZWxcIj5MVi57eyBtZS5sZXZlbCB9fTwvdmlldz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkdXJhdGlvblwiPuWQrOatjHt7IG1lLmR1cmF0aW9uIH195YiG6ZKfPC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJtZXNzZWdlXCIgc3JjPVwiL3N0YXRpYy9waWMvaW5kZXgvZW1haWwucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm15LW11c2ljXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJteS1tdXNpYy1pdGVtXCIgdi1mb3I9XCJpdGVtLGluZGV4IGluIG15TXVzaWNcIiA6a2V5PVwiaW5kZXhcIiAgQGNsaWNrPVwidG9QbGF5TGlzdChpbmRleClcIiB2LW9uY2U+XHJcbiAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgOnNyYz1cIml0ZW0uaWNvblVybFwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImFsdFwiPnt7IGl0ZW0udGl0bGUgfX08L3RleHQ+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cIm51bVwiPnt7IGl0ZW0ubnVtIH19PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImFsbC1tdXNpY1wiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwiYWxsLW11c2ljLWl0ZW1cIiB2LWZvcj1cIml0ZW0saW5kZXggaW4gYWxsTXVzaWNcIiA6a2V5PVwiaW5kZXhcIiB2LW9uY2U+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImljb24tYmdcIiA6c3R5bGU9XCInYmFja2dyb3VuZC1jb2xvcjonK2l0ZW0uYmdjXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiA6c3JjPVwiaXRlbS5pY29uVXJsXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYWx0XCI+e3sgaXRlbS50aXRsZSB9fTwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJhZHZpdGlzZW1lbnRcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9zb3VuZC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJhbHRcIj7mjqjlub88L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwicmVwb3J0XCI+6KOF5LqG6L+Z5LiqYXBw5LiN55So5YaN5Y67a3R2PC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwidGFiYmFyXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsZWZ0XCI+XHJcbiAgICAgICAgICA8dmlldz5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiY292ZXJcIiA6c3JjPVwicGxheWluZy5jb3ZlclwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwicmlnaHRcIj5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwidXBcIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJwYXNzXCI+PC92aWV3PlxyXG4gICAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW5cIj48L3ZpZXc+XHJcbiAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiZG93blwiPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImluZm9ybWF0aW9uXCI+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJtLW5hbWVcIj57eyBwbGF5aW5nLm1fbmFtZSB9fTwvdGV4dD5cclxuICAgICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm0tc2luZ2VyXCI+e3sgcGxheWluZy5tX3NpbmdlciB9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cIm9wZXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvcGljL2luZGV4L3BsYXkucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwiL3N0YXRpYy9waWMvaW5kZXgvbmV4dC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICA8dmlldyBAY2xpY2s9XCJ0b1BsYXlpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9tZW51LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG1lOiB7XHJcbiAgICAgICAgICBhdmF0YXJVcmw6ICcvc3RhdGljL3BpYy9pbmRleC9hdmF0YXIucG5nJyxcclxuICAgICAgICAgIG5pY2tuYW1lOiAn6IOh6JCd5YyXJyxcclxuICAgICAgICAgIGxldmVsOiA1LFxyXG4gICAgICAgICAgZHVyYXRpb246IDE1MzAyXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5aW5nOiB7XHJcbiAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgIGNvdmVyOiAnL3N0YXRpYy9waWMvaW5kZXgvZGlzYy5qcGcnLFxyXG4gICAgICAgICAgbV9uYW1lOiAn5pel6JC95aSn6YGT5q2M5omLMjAxN+esrOmYv+WPjOaWueWdh+aMieazleW+i+Wlh+WBtuWPkeWTiCcsXHJcbiAgICAgICAgICBtX3NpbmdlcjogJ+aigeWNmidcclxuICAgICAgICB9LFxyXG4gICAgICAgIG15TXVzaWM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy9zdGF0aWMvcGljL2luZGV4L3BjLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pys5Zyw6Z+z5LmQJyxcclxuICAgICAgICAgICAgbnVtOiAxNDhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9oZWFydC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+WWnOasosK35q2M5Y2VJyxcclxuICAgICAgICAgICAgbnVtOiAzXHJcbiAgICAgICAgICB9LCAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9kd29ubG9hZC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+S4i+i9vScsXHJcbiAgICAgICAgICAgIG51bTogMlxyXG4gICAgICAgICAgfSwgICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvY2xvY2sucG5nJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmnIDov5EnLFxyXG4gICAgICAgICAgICBudW06IDEwMFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYWxsTXVzaWM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy9zdGF0aWMvcGljL2luZGV4L2xpYi5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjMDZiMDYyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfkuZDlupMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvbGlzdC5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjMDY3YWIwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmrYzljZUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvY2hhcnQucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2U2MjEzNCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn55S15Y+wwrfphbfnvqQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvcmFkaW8ucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2MyNWJkMScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn54yc5L2g5Zac5qyiJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy9zdGF0aWMvcGljL2luZGV4L2NoYXJ0LnBuZycsXHJcbiAgICAgICAgICAgIGJnYzogJyNlZGIyMzEnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+avj+aXpeaOqOiNkCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9zcGVlY2gucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnIzRiZTIyZCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5ZCs5q2M6K+G5puyJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgdG9QbGF5TGlzdChpZCl7XHJcbiAgICAgICAgaWYoaWQgPT0gMylcclxuICAgICAgICAgIHVuaS5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAncGxheWxpc3QnXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdG9QbGF5aW5nKCl7XHJcbiAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAncGxheSdcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnfkAvdG9vbC5zY3NzJztcclxuICAkYmdpOiAnL3N0YXRpYy9waWMvaW5kZXgvYmcyLmpwZyc7XHJcbiAgLmJnIHtcclxuICAgIEBpbmNsdWRlIGktYmFja2dyb3VuZC1hcHAoJGJnaSk7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAn5Y2O5paH5qW35L2TJztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0ZWJhciB7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAn5bm85ZyGJztcclxuICAgIGNvbG9yOiAjMDc2Y2NlO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyLCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuO1xyXG4gIFxyXG4gICAgLm1lbnUge1xyXG4gICAgICB3aWR0aDogMThweDsgIGhlaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICB3aWR0aDogMThweDsgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIC5ncmkge1xyXG4gICAgICAvKiDmloflrZfmuJDlj5jvvIzlj6rmlK/mjIF3ZWJraXTmtY/op4jlmaggKi9cclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjNDNkNWViLCNmZmYpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGVyc29uYWwge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE4cHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNDNweDsgIGhlaWdodDogNDNweDtcclxuICAgIH1cclxuICAgIC5pbmZvcntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE0LjY2cHg7XHJcbiAgICAgIC51cCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5pY2tuYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXAge1xyXG4gICAgICAgICAgd2lkdGg6IDhweDsgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZG93biB7XHJcbiAgICAgICAgQGV4dGVuZCAuaS1yb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjM0cmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICfljY7mlofkuK3lrosnO1xyXG4gICAgICAgICAgY29sb3I6ICNmOWE4MGI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlhODBiIDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHVyYXRpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjM2cmVtO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGNvbG9yOiAjYjViNGIxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NlZ2Uge1xyXG4gICAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTY5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teS1tdXNpYyB7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNS42NnB4IDtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgXHJcbiAgICAubXktbXVzaWMtaXRlbSB7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNnB4OyAgaGVpZ2h0OiAyNnB4OyAgICBcclxuICAgICAgfSAgICAgIFxyXG4gICAgICAuYWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfSAgICAgXHJcbiAgICAgIC5udW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjYjViNGIxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxsLW11c2ljIHtcclxuICAgIGhlaWdodDogMjA2cHg7ICB3aWR0aDogMTAwJTtcclxuICAgIEBleHRlbmQgLmktcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5hbGwtbXVzaWMtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDBweCAzMnB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24tYmcge1xyXG4gICAgICAgIHdpZHRoOiA1NXB4OyAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI3LjVweDtcclxuICAgICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXIsIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7ICBoZWlnaHQ6IDIxcHg7ICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICAuYWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBjb2xvcjogIzg3Y2JjYztcclxuICAgICAgICBtYXJnaW46IDExcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZHZpdGlzZW1lbnQge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICMwYThlYzU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMGE4ZWM1O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyLCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIEBleHRlbmQgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIH0gICBcclxuICAgIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDE5cHg7ICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH0gIFxyXG4gICAgLmFsdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICAgICAgY29sb3I6ICM4N2NiY2M7XHJcbiAgICB9ICAgXHJcbiAgICAucmVwb3J0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgIGNvbG9yOiAjODdjYmNjO1xyXG4gICAgfVxyXG4gIH1cclxuICAudGFiYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDY2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWYyODtcclxuICAgIEBleHRlbmQgLmktcm93O1xyXG4gICAgXHJcbiAgICAuY292ZXJ7XHJcbiAgICAgIHdpZHRoOiA1OXB4OyBoZWlnaHQ6IDU5cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgIzA4MGMxMCAzcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHR7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAudXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTAlO1xyXG4gICAgICAgIEBleHRlbmQgLmktcm93LXZlcnRpY2FsLWNlbnRlciwgLmktcm93LWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICAubG9hZGluZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MmQ7XHJcbiAgICAgICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5wYXNze1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlOyBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTBmMztcclxuICAgICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgLmlue1xyXG4gICAgICAgICAgICB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5MGYzO1xyXG4gICAgICAgICAgfSAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5kb3due1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDUwJTtcclxuICAgICAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWJldHdlZW47XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5pbmZvcm1hdGlvbntcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBAZXh0ZW5kIC5pLWNvbDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLm0tbmFtZXtcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuOyAgIFxyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwOyAgICAgXHJcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzOyBcclxuICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgIC5tLXNpbmdlcntcclxuICAgICAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40OHJlbTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm9wZXJhdGlvbntcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWFyb3VuZDtcclxuICAgICAgICAgIFxyXG4gICAgICAgICAgLmljb257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMXB4OyBoZWlnaHQ6IDExcHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page */ 14);\n/* harmony import */ var _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js&mpType=page */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4947c54c\",\n  null,\n  false,\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/play.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NDdjNTRjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ5NDdjNTRjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3BsYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///13\n");

/***/ }),
/* 14 */
/*!****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page */ 15);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 15 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("view", { staticClass: _vm._$s(1, "sc", "bg"), attrs: { _i: 1 } }),
      _c("view", {
        staticClass: _vm._$s(2, "sc", "status_bar"),
        attrs: { _i: 2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "content"), attrs: { _i: 3 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "navigatebar"), attrs: { _i: 4 } },
            [
              _c("image", {
                staticClass: _vm._$s(5, "sc", "back"),
                attrs: { _i: 5 }
              }),
              _c(
                "text",
                { staticClass: _vm._$s(6, "sc", "m-name"), attrs: { _i: 6 } },
                [_vm._v(_vm._$s(6, "t0-0", _vm._s(_vm.playingMusic.title)))]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(7, "sc", "m-singer"), attrs: { _i: 7 } },
            [
              _c("text", [
                _vm._v(_vm._$s(8, "t0-0", _vm._s(_vm.playingMusic.singer)))
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(9, "sc", "m-effect"), attrs: { _i: 9 } },
            [
              _c("view", [_c("text"), _c("image", { attrs: { _i: 12 } })]),
              _c("view", [_c("text")]),
              _c("view", [_c("text"), _c("image", { attrs: { _i: 17 } })])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(18, "sc", "m-cover"), attrs: { _i: 18 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(19, "a-src", _vm.playingMusic.coverUrl),
                  _i: 19
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(20, "sc", "m-lyric"), attrs: { _i: 20 } },
            [
              _c("view", [
                _c("image"),
                _c("text", [
                  _vm._v(_vm._$s(23, "t0-0", _vm._s(_vm.playingMusic.lysic[0])))
                ]),
                _c("image", { attrs: { _i: 24 } })
              ]),
              _c("view", [
                _c("image"),
                _c("text", [
                  _vm._v(_vm._$s(27, "t0-0", _vm._s(_vm.playingMusic.lysic[1])))
                ]),
                _c("image", { attrs: { _i: 28 } })
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(29, "sc", "is-sing"), attrs: { _i: 29 } },
            [
              _c("view", {
                staticClass: _vm._$s(30, "sc", "sing"),
                style: _vm._$s(
                  30,
                  "s",
                  "background-color:" + _vm.otherSelect[_vm.other]
                ),
                attrs: { _i: 30 }
              }),
              _c("view", {
                staticClass: _vm._$s(31, "sc", "other"),
                style: _vm._$s(
                  31,
                  "s",
                  "background-color:" + _vm.otherSelect[1 - _vm.other]
                ),
                attrs: { _i: 31 }
              })
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(32, "sc", "interactive"),
              attrs: { _i: 32 }
            },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    33,
                    "a-src",
                    _vm.playingMusic.islike
                      ? "../../static/pic/play/like.png"
                      : "../../static/pic/play/dislike.png"
                  ),
                  _i: 33
                }
              }),
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    34,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/play/download.png */ 16)
                  ),
                  _i: 34
                }
              }),
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    35,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/play/comment.png */ 17)
                  ),
                  _i: 35
                }
              }),
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    36,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/play/share.png */ 18)
                  ),
                  _i: 36
                }
              }),
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    37,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/play/more.png */ 19)
                  ),
                  _i: 37
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(38, "sc", "loading"), attrs: { _i: 38 } },
            [
              _c(
                "text",
                { staticClass: _vm._$s(39, "sc", "now"), attrs: { _i: 39 } },
                [
                  _vm._v(
                    _vm._$s(
                      39,
                      "t0-0",
                      _vm._s(_vm.playNow * _vm.playingMusic.length)
                    )
                  )
                ]
              ),
              _c(
                "view",
                {
                  staticClass: _vm._$s(40, "sc", "loading-bar"),
                  attrs: { _i: 40 }
                },
                [
                  _c("view", {
                    staticClass: _vm._$s(41, "sc", "pass"),
                    attrs: { _i: 41 }
                  }),
                  _c("view", {
                    staticClass: _vm._$s(42, "sc", "in"),
                    attrs: { _i: 42 }
                  })
                ]
              ),
              _c(
                "text",
                { staticClass: _vm._$s(43, "sc", "all"), attrs: { _i: 43 } },
                [_vm._v(_vm._$s(43, "t0-0", _vm._s(_vm.playingMusic.length)))]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(44, "sc", "operation"), attrs: { _i: 44 } },
            [
              _c("image", {
                staticClass: _vm._$s(45, "sc", "a"),
                attrs: { _i: 45 }
              }),
              _c("view", [
                _c(
                  "view",
                  { staticClass: _vm._$s(47, "sc", "b"), attrs: { _i: 47 } },
                  [_c("image", { attrs: { _i: 48 } })]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(49, "sc", "c"), attrs: { _i: 49 } },
                  [_c("image", { attrs: { _i: 50 } })]
                ),
                _c(
                  "view",
                  { staticClass: _vm._$s(51, "sc", "b"), attrs: { _i: 51 } },
                  [_c("image", { attrs: { _i: 52 } })]
                )
              ]),
              _c("image", {
                staticClass: _vm._$s(53, "sc", "a"),
                attrs: { _i: 53 }
              })
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
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/download.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/download.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvZG93bmxvYWQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*****************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/comment.png ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/comment.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvY29tbWVudC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!***************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/share.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/share.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvc2hhcmUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///18\n");

/***/ }),
/* 19 */
/*!**************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/more.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/more.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjE5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvbW9yZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///19\n");

/***/ }),
/* 20 */
/*!**********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=script&lang=js&mpType=page */ 21);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV0QixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      playingMusic: {\n        title: '日落大道-歌手2017第一季第十期上分卡华丽丽',\n        singer: '梁博',\n        coverUrl: '/static/pic/play/disc.jpg',\n        lysic: ['我们寻找着在这条路的中间', '我们迷失着在这条路的两端'],\n        length: 276,\n        islike: false,\n        commentsNum: 1001 },\n\n      playNow: 0.4,\n      other: 0,\n      otherSelect: ['#ffffff', '#abb5bb'] };\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcGxheS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBREE7QUFFQSxvQkFGQTtBQUdBLDZDQUhBO0FBSUEsK0NBSkE7QUFLQSxtQkFMQTtBQU1BLHFCQU5BO0FBT0EseUJBUEEsRUFEQTs7QUFVQSxrQkFWQTtBQVdBLGNBWEE7QUFZQSx5Q0FaQTs7QUFjQSxHQWhCQTtBQWlCQSxhQWpCQSxFIiwiZmlsZSI6IjIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDx2aWV3IGNsYXNzPVwibWFpblwiPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJiZ1wiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzX2JhclwiPlxyXG4gICAgICA8IS0tIOi/memHjOaYr+eKtuaAgeagjyAtLT5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm5hdmlnYXRlYmFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYmFja1wiIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvTGVmdC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibS1uYW1lXCI+e3sgcGxheWluZ011c2ljLnRpdGxlIH19PC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibS1zaW5nZXJcIj48dGV4dD57eyBwbGF5aW5nTXVzaWMuc2luZ2VyIH19PC90ZXh0Pjwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJtLWVmZmVjdFwiPlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPHRleHQ+5qCH5YeGPC90ZXh0PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvRG93bi5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDx0ZXh0Pumfs+aViDwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8dGV4dD7lsIHpnaI8L3RleHQ+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9Eb3duLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibS1jb3ZlclwiPlxyXG4gICAgICAgIDxpbWFnZSA6c3JjPVwicGxheWluZ011c2ljLmNvdmVyVXJsXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm0tbHlyaWNcIj5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDxpbWFnZT48L2ltYWdlPlxyXG4gICAgICAgICAgPHRleHQ+e3sgcGxheWluZ011c2ljLmx5c2ljWzBdIH19PC90ZXh0PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvbWljcm8ucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2U+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pnt7IHBsYXlpbmdNdXNpYy5seXNpY1sxXSB9fTwvdGV4dD5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL3BpYy9wbGF5L2JhcnJhZ2UucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJpcy1zaW5nXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzaW5nXCIgOnN0eWxlPVwiJ2JhY2tncm91bmQtY29sb3I6JytvdGhlclNlbGVjdFtvdGhlcl1cIj48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJvdGhlclwiICA6c3R5bGU9XCInYmFja2dyb3VuZC1jb2xvcjonK290aGVyU2VsZWN0WzEtb3RoZXJdXCI+PC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiaW50ZXJhY3RpdmVcIj5cclxuICAgICAgICA8aW1hZ2UgOnNyYz1cInBsYXlpbmdNdXNpYy5pc2xpa2U/Jy4uLy4uL3N0YXRpYy9waWMvcGxheS9saWtlLnBuZyc6Jy4uLy4uL3N0YXRpYy9waWMvcGxheS9kaXNsaWtlLnBuZydcIj48L2ltYWdlPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXkvZG93bmxvYWQucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5L2NvbW1lbnQucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5L3NoYXJlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheS9tb3JlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2FkaW5nXCI+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJub3dcIj57eyBwbGF5Tm93KnBsYXlpbmdNdXNpYy5sZW5ndGggfX08L3RleHQ+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsb2FkaW5nLWJhclwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJwYXNzXCI+PC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJpblwiPjwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJhbGxcIj57eyBwbGF5aW5nTXVzaWMubGVuZ3RoIH19PC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwib3BlcmF0aW9uXCI+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvZGFycm93LnBuZ1wiIGNsYXNzPVwiYVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImJcIj5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvbGFzdC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJjXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL3BpYy9wbGF5L3BsYXkucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYlwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9uZXh0LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+ICAgICAgICAgIFxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9tZW51LnBuZ1wiIGNsYXNzPVwiYVwiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgIDwvdmlldz5cclxuICA8L3ZpZXc+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgcGxheWluZ011c2ljOiB7XHJcbiAgICAgICAgICB0aXRsZTogJ+aXpeiQveWkp+mBky3mrYzmiYsyMDE356ys5LiA5a2j56ys5Y2B5pyf5LiK5YiG5Y2h5Y2O5Li95Li9JyxcclxuICAgICAgICAgIHNpbmdlcjogJ+aigeWNmicsXHJcbiAgICAgICAgICBjb3ZlclVybDogJy9zdGF0aWMvcGljL3BsYXkvZGlzYy5qcGcnLFxyXG4gICAgICAgICAgbHlzaWM6IFsn5oiR5Lus5a+75om+552A5Zyo6L+Z5p2h6Lev55qE5Lit6Ze0Jywn5oiR5Lus6L+35aSx552A5Zyo6L+Z5p2h6Lev55qE5Lik56uvJ10sXHJcbiAgICAgICAgICBsZW5ndGg6IDI3NixcclxuICAgICAgICAgIGlzbGlrZTogZmFsc2UsXHJcbiAgICAgICAgICBjb21tZW50c051bTogMTAwMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGxheU5vdzogMC40LFxyXG4gICAgICAgIG90aGVyOiAwLFxyXG4gICAgICAgIG90aGVyU2VsZWN0OiBbJyNmZmZmZmYnLCcjYWJiNWJiJ11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e31cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJ35AL3Rvb2wuc2Nzcyc7XHJcbiAgJGJnaTogJy9zdGF0aWMvcGljL3BsYXkvZGlzYy5qcGcnO1xyXG4gIC5iZyB7XHJcbiAgICBAaW5jbHVkZSBpLWJhY2tncm91bmQtYXBwKCRiZ2kpO1xyXG4gICAgZmlsdGVyOiBibHVyKDhweCk7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAn5Y2O5paH5qW35L2TJztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAubmF2aWdhdGViYXIge1xyXG4gICAgaGVpZ2h0OiA1My4zM3B4O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgIHdpZHRoOiAxMC4zM3B4OyBoZWlnaHQ6IDE5LjY2cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEyLjMzcHg7XHJcbiAgICB9XHJcbiAgICAubS1uYW1lIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIEBleHRlbmQgLmktdGV4dC1vbWl0LWxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLXNpbmdlciB7XHJcbiAgICBoZWlnaHQ6IDIwLjMzcHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45NnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDExLjMzcHg7XHJcblxyXG4gICAgJjo6YWZ0ZXIsICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZDogI2IzYjViNDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgIH1cclxuICB9XHJcbiAgLm0tZWZmZWN0IHtcclxuICAgIHdpZHRoOiA0MCU7IGhlaWdodDogMjlweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgXHJcbiAgICB2aWV3IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NnJlbTtcclxuICAgIH1cclxuICAgIGltYWdlIHtcclxuICAgICAgd2lkdGg6IDUuNjZweDsgaGVpZ2h0OiAzLjMzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLWNvdmVyIHtcclxuICAgIGhlaWdodDogMjgyLjY2cHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIFxyXG4gICAgaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMjYycHg7IGhlaWdodDogMjYycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLyog6L+Z6YeM6ZyA6KaB5qC55o2u6IOM5pmv5Y+Y5YyWICovXHJcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkICM0ODQ4Mzc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLWx5cmljIHtcclxuICAgIGhlaWdodDogNjguNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgQGV4dGVuZCAuaS1jb2wtaG9yaXpvbnRhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIHZpZXcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQ7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuaXMtc2luZyB7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgIFxyXG4gICAgdmlldyB7XHJcbiAgICAgIHdpZHRoOiA2cHg7IGhlaWdodDo2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgbWFyZ2luOiAwcHggMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuaW50ZXJhY3RpdmUge1xyXG4gICAgaGVpZ2h0OiAzMS4zM3B4O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQ7XHJcbiAgICBcclxuICAgIGltYWdlIHtcclxuICAgICAgd2lkdGg6IDE4LjY2cHg7IGhlaWdodDogMTguNjZweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmxvYWRpbmcge1xyXG4gICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIHRleHQge1xyXG4gICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgIH1cclxuICAgIC5sb2FkaW5nLWJhciB7XHJcbiAgICAgIHdpZHRoOiA2MCU7IGhlaWdodDogMXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZiMmNiO1xyXG4gICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICAucGFzc3tcclxuICAgICAgICB3aWR0aDogNTAlOyBoZWlnaHQ6IDFweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5MGYzO1xyXG4gICAgICB9ICAgICBcclxuICAgICAgLmlue1xyXG4gICAgICAgIHdpZHRoOiA2cHg7IGhlaWdodDogNnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgICB9ICAgICAgICAgICBcclxuICAgIH1cclxuICB9XHJcbiAgLm9wZXJhdGlvbiB7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWFyb3VuZCwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIFxyXG4gICAgPiB2aWV3IHtcclxuICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuYSB7XHJcbiAgICAgIHdpZHRoOiAyMHB4OyBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAuYiB7XHJcbiAgICAgIHdpZHRoOiA0OHB4OyBoZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE2cHg7IGhlaWdodDogMTZweDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuICAgIC5jIHtcclxuICAgICAgd2lkdGg6IDcycHg7IGhlaWdodDogNzJweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN0FGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWFyb3VuZCwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page */ 23);\n/* harmony import */ var _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist.vue?vue&type=script&lang=js&mpType=page */ 32);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7e786e10\",\n  null,\n  false,\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/playlist.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTc4NmUxMCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGxheWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdlNzg2ZTEwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3BsYXlsaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///22\n");

/***/ }),
/* 23 */
/*!********************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page */ 24);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 24 */
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("view", { staticClass: _vm._$s(1, "sc", "bg"), attrs: { _i: 1 } }),
      _c("view", {
        staticClass: _vm._$s(2, "sc", "status_bar"),
        attrs: { _i: 2 }
      }),
      _c(
        "view",
        { staticClass: _vm._$s(3, "sc", "content"), attrs: { _i: 3 } },
        [
          _c(
            "view",
            { staticClass: _vm._$s(4, "sc", "navigatebar"), attrs: { _i: 4 } },
            [
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    5,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/playlist/Search.png */ 25)
                  ),
                  _i: 5
                }
              }),
              _c("text"),
              _c("image", {
                attrs: {
                  src: _vm._$s(
                    7,
                    "a-src",
                    __webpack_require__(/*! ../../static/pic/playlist/more.png */ 26)
                  ),
                  _i: 7
                }
              })
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(8, "sc", "rank-way"), attrs: { _i: 8 } },
            [_c("text"), _c("text"), _c("text"), _c("text"), _c("text")]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(14, "sc", "music-list"), attrs: { _i: 14 } },
            _vm._l(_vm._$s(15, "f", { forItems: _vm.musicList }), function(
              item,
              index,
              $20,
              $30
            ) {
              return _c(
                "view",
                {
                  key: _vm._$s(15, "f", { forIndex: $20, key: 15 + "-" + $30 }),
                  staticClass: _vm._$s("15-" + $30, "sc", "music-item"),
                  attrs: { _i: "15-" + $30 }
                },
                [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("16-" + $30, "sc", "isplay"),
                      attrs: { _i: "16-" + $30 }
                    },
                    [
                      _vm._$s("17-" + $30, "i", _vm.isplay != index)
                        ? _c("image", { attrs: { _i: "17-" + $30 } })
                        : _c("image", { attrs: { _i: "18-" + $30 } })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("19-" + $30, "sc", "infor"),
                      attrs: { _i: "19-" + $30 }
                    },
                    [
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("20-" + $30, "sc", "title"),
                          attrs: { _i: "20-" + $30 }
                        },
                        [
                          _vm._v(
                            _vm._$s("20-" + $30, "t0-0", _vm._s(item.title))
                          )
                        ]
                      ),
                      _c(
                        "text",
                        {
                          staticClass: _vm._$s("21-" + $30, "sc", "singer"),
                          attrs: { _i: "21-" + $30 }
                        },
                        [
                          _vm._v(
                            _vm._$s("21-" + $30, "t0-0", _vm._s(item.singer))
                          )
                        ]
                      )
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s("22-" + $30, "sc", "length"),
                      attrs: { _i: "22-" + $30 }
                    },
                    [
                      _c("text", [
                        _vm._v(
                          _vm._$s("23-" + $30, "t0-0", _vm._s(item.length))
                        )
                      ])
                    ]
                  )
                ]
              )
            }),
            0
          ),
          _c("view", {
            staticClass: _vm._$s(24, "sc", "tabbar-seat"),
            attrs: { _i: 24 }
          }),
          _c(
            "view",
            { staticClass: _vm._$s(25, "sc", "tabbar"), attrs: { _i: 25 } },
            [
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      27,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/music.png */ 27)
                    ),
                    _i: 27
                  }
                }),
                _c("text")
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      30,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/musiclib.png */ 28)
                    ),
                    _i: 30
                  }
                }),
                _c("text")
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      33,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/kind.png */ 29)
                    ),
                    _i: 33
                  }
                }),
                _c("text")
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      36,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/Record.png */ 30)
                    ),
                    _i: 36
                  }
                }),
                _c("text")
              ]),
              _c("view", [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      39,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/Profile.png */ 31)
                    ),
                    _i: 39
                  }
                }),
                _c("text")
              ])
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
/* 25 */
/*!********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/Search.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/Search.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L1NlYXJjaC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/more.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/more.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L21vcmUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!*******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/music.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/music.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L211c2ljLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/musiclib.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/musiclib.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L211c2ljbGliLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/kind.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/kind.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L2tpbmQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/Record.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/Record.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L1JlY29yZC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!*********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/Profile.png ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/Profile.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L1Byb2ZpbGUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist.vue?vue&type=script&lang=js&mpType=page */ 33);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJ0QixDQUFnQiw2dEJBQUcsRUFBQyIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      musicList: [\n      {\n        title: '樱花樱花想见你',\n        singer: '满汉全席音乐团队',\n        length: 403 },\n\n      {\n        title: 'aLIEz',\n        singer: 'mizuki',\n        length: 213 },\n\n      {\n        title: '惊鸿一面',\n        singer: '许嵩、黄龄',\n        length: 316 },\n\n      {\n        title: '大鱼',\n        singer: '周深',\n        length: 404 },\n\n      {\n        title: '焚情',\n        singer: '张信哲',\n        length: 200 }],\n\n\n      isplay: -1 };\n\n  },\n  methods: {} };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcGxheWxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBREE7QUFFQSwwQkFGQTtBQUdBLG1CQUhBLEVBREE7O0FBTUE7QUFDQSxzQkFEQTtBQUVBLHdCQUZBO0FBR0EsbUJBSEEsRUFOQTs7QUFXQTtBQUNBLHFCQURBO0FBRUEsdUJBRkE7QUFHQSxtQkFIQSxFQVhBOztBQWdCQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSxtQkFIQSxFQWhCQTs7QUFxQkE7QUFDQSxtQkFEQTtBQUVBLHFCQUZBO0FBR0EsbUJBSEEsRUFyQkEsQ0FEQTs7O0FBNEJBLGdCQTVCQTs7QUE4QkEsR0FoQ0E7QUFpQ0EsYUFqQ0EsRSIsImZpbGUiOiIzMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmdcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/og4zmma/lm74gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJuYXZpZ2F0ZWJhclwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXlsaXN0L1NlYXJjaC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0PuacgOi/kTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9tb3JlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJyYW5rLXdheVwiPlxyXG4gICAgICAgIDx0ZXh0PuWNleabsjwvdGV4dD5cclxuICAgICAgICA8dGV4dD7kuJPovpE8L3RleHQ+XHJcbiAgICAgICAgPHRleHQ+6K+m5oOFPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0PuatjOivjTwvdGV4dD5cclxuICAgICAgICA8dGV4dD7mrYzor43mnKw8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJtdXNpYy1saXN0XCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJtdXNpYy1pdGVtXCIgdi1mb3I9XCJpdGVtLGluZGV4IGluIG11c2ljTGlzdFwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJpc3BsYXlcIj5cclxuICAgICAgICAgICAgPGltYWdlIHYtaWY9XCJpc3BsYXkgIT0gaW5kZXhcIiBzcmM9XCIvc3RhdGljL3BpYy9wbGF5bGlzdC9wYXVzZS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugdi1lbHNlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXlsaXN0L3BsYXkucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaW5mb3JcIj5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJ0aXRsZVwiPnt7IGl0ZW0udGl0bGUgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwic2luZ2VyXCI+e3sgaXRlbS5zaW5nZXIgfX08L3RleHQ+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImxlbmd0aFwiPlxyXG4gICAgICAgICAgICA8dGV4dD57eyBpdGVtLmxlbmd0aCB9fTwvdGV4dD5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJiYXItc2VhdFwiPjwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXlsaXN0L211c2ljLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7pn7PkuZA8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheWxpc3QvbXVzaWNsaWIucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pumfs+S5kOmmhjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9raW5kLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7pn7PkuZDliIbnsbs8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheWxpc3QvUmVjb3JkLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7miJHnmoRtdjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9Qcm9maWxlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7kuKrkurrkuK3lv4M8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG11c2ljTGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+aoseiKseaoseiKseaDs+ingeS9oCcsXHJcbiAgICAgICAgICAgIHNpbmdlcjogJ+a7oeaxieWFqOW4remfs+S5kOWboumYnycsXHJcbiAgICAgICAgICAgIGxlbmd0aDogNDAzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ2FMSUV6JyxcclxuICAgICAgICAgICAgc2luZ2VyOiAnbWl6dWtpJyxcclxuICAgICAgICAgICAgbGVuZ3RoOiAyMTNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5oOK6bi/5LiA6Z2iJyxcclxuICAgICAgICAgICAgc2luZ2VyOiAn6K645bWp44CB6buE6b6EJyxcclxuICAgICAgICAgICAgbGVuZ3RoOiAzMTZcclxuICAgICAgICAgIH0sIFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+Wkp+mxvCcsXHJcbiAgICAgICAgICAgIHNpbmdlcjogJ+WRqOa3sScsXHJcbiAgICAgICAgICAgIGxlbmd0aDogNDA0XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+eEmuaDhScsXHJcbiAgICAgICAgICAgIHNpbmdlcjogJ+W8oOS/oeWTsicsXHJcbiAgICAgICAgICAgIGxlbmd0aDogMjAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBpc3BsYXk6IC0xXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOnt9XHJcbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0ICd+QC90b29sLnNjc3MnO1xyXG4gICRiZ2k6ICcvc3RhdGljL3BpYy9wbGF5bGlzdC9iZzIuanBnJztcclxuICAuYmcge1xyXG4gICAgQGluY2x1ZGUgaS1iYWNrZ3JvdW5kLWFwcCgkYmdpKTtcclxuICB9XHJcbiAgLmNvbnRlbnQge1xyXG4gICAgLyog5a2Y5pS+5pW05L2T6aG16Z2i5L+h5oGvICovXHJcbiAgICBmb250LWZhbWlseTogJ+WNjuaWh+alt+S9kyc7XHJcbiAgICBmb250LXNpemU6IDFyZW07XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcbiAgLm5hdmlnYXRlYmFyIHtcclxuICAgIGhlaWdodDogOTFweDtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYmV0d2VlbiwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIG1hcmdpbjogMHB4IDE5cHggMTZweDtcclxuICAgIFxyXG4gICAgaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMTVweDsgaGVpZ2h0OiAxNXB4O1xyXG4gICAgfVxyXG4gICAgdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJhbmstd2F5IHtcclxuICAgIGhlaWdodDogNDJweDtcclxuICAgIGZvbnQtc2l6ZTogMC44NHJlbTtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kO1xyXG4gIH1cclxuICAubXVzaWMtaXRlbSB7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICBwYWRkaW5nLXRvcDogOHB4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICM3MjdhOTA7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdztcclxuICAgIFxyXG4gICAgLmlzcGxheSB7XHJcbiAgICAgIHdpZHRoOiA5MXB4O1xyXG4gICAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICB3aWR0aDogNDBweDsgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW5mb3Ige1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgQGV4dGVuZCAuaS1jb2wtdmVydGljYWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgICAgIH1cclxuICAgICAgLnNpbmdlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjU0cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAubGVuZ3RoIHtcclxuICAgICAgd2lkdGg6IDkycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC41cmVtO1xyXG4gICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50YWJiYXItc2VhdCB7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1OHB4O1xyXG4gIH1cclxuICAudGFiYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDU4cHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWYyODtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWFyb3VuZDtcclxuICAgIFxyXG4gICAgdmlldyB7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgICAgXHJcbiAgICAgIGltYWdlIHtcclxuICAgICAgICB3aWR0aDogMjRweDsgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICB9XHJcbiAgICAgIHRleHQge1xyXG4gICAgICAgIGNvbG9yOiAjOGE4Zjk0O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///33\n");

/***/ }),
/* 34 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 35 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 36);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 7);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDd007QUFDeE0sZ0JBQWdCLGtOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 37);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1yQixDQUFnQiw2c0JBQUcsRUFBQyIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 38)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
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
(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/main.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 44));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 45));\nvar _mytool = __webpack_require__(/*! api/mytool.js */ 48);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n// const MusicPlayer = uni.createInnerAudioContext()\nvar MusicPlayer = new _mytool.Player();\n\n_vue.default.config.productionTip = false;\n// 开启调试模式\n_vue.default.config.devtools = true;\n// 添加全局对象\n_vue.default.prototype.$database = _mytool.toDatabase;\n_vue.default.prototype.$audio = MusicPlayer;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJNdXNpY1BsYXllciIsIlBsYXllciIsIlZ1ZSIsImNvbmZpZyIsInByb2R1Y3Rpb25UaXAiLCJkZXZ0b29scyIsInByb3RvdHlwZSIsIiRkYXRhYmFzZSIsInRvRGF0YWJhc2UiLCIkYXVkaW8iLCJBcHAiLCJtcFR5cGUiLCJhcHAiLCIkbW91bnQiXSwibWFwcGluZ3MiOiJBQUFBLHdDQUFtQjtBQUNuQjtBQUNBLDJEOztBQUVBO0FBQ0EsSUFBTUEsV0FBVyxHQUFHLElBQUlDLGNBQUosRUFBcEI7O0FBRUFDLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjtBQUNBO0FBQ0FGLGFBQUlDLE1BQUosQ0FBV0UsUUFBWCxHQUFzQixJQUF0QjtBQUNBO0FBQ0FILGFBQUlJLFNBQUosQ0FBY0MsU0FBZCxHQUEwQkMsa0JBQTFCO0FBQ0FOLGFBQUlJLFNBQUosQ0FBY0csTUFBZCxHQUF1QlQsV0FBdkI7O0FBRUFVLGFBQUlDLE1BQUosR0FBYSxLQUFiOztBQUVBLElBQU1DLEdBQUcsR0FBRyxJQUFJVixZQUFKO0FBQ0xRLFlBREssRUFBWjs7QUFHQUUsR0FBRyxDQUFDQyxNQUFKIiwiZmlsZSI6IjAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3VuaS1wYWdlcyc7aW1wb3J0IFZ1ZSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXHJcbmltcG9ydCB7dG9EYXRhYmFzZSxQbGF5ZXJ9IGZyb20gXCJhcGkvbXl0b29sLmpzXCJcclxuXHJcbi8vIGNvbnN0IE11c2ljUGxheWVyID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KClcclxuY29uc3QgTXVzaWNQbGF5ZXIgPSBuZXcgUGxheWVyKClcclxuXHJcblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXHJcbi8vIOW8gOWQr+iwg+ivleaooeW8j1xyXG5WdWUuY29uZmlnLmRldnRvb2xzID0gdHJ1ZVxyXG4vLyDmt7vliqDlhajlsYDlr7nosaFcclxuVnVlLnByb3RvdHlwZS4kZGF0YWJhc2UgPSB0b0RhdGFiYXNlXHJcblZ1ZS5wcm90b3R5cGUuJGF1ZGlvID0gTXVzaWNQbGF5ZXJcclxuXHJcbkFwcC5tcFR5cGUgPSAnYXBwJ1xyXG5cclxuY29uc3QgYXBwID0gbmV3IFZ1ZSh7XHJcbiAgICAuLi5BcHBcclxufSlcclxuYXBwLiRtb3VudCgpIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

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
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 12).default);});
__definePage('pages/index/play', function () {return Vue.extend(__webpack_require__(/*! pages/index/play.vue?mpType=page */ 17).default);});
__definePage('pages/index/playlist', function () {return Vue.extend(__webpack_require__(/*! pages/index/playlist.vue?mpType=page */ 32).default);});

/***/ }),
/* 2 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/login.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.vue?vue&type=template&id=e40dfa5a&scoped=true&mpType=page */ 3);\n/* harmony import */ var _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _login_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"e40dfa5a\",\n  null,\n  false,\n  _login_vue_vue_type_template_id_e40dfa5a_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/login.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWU0MGRmYTVhJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sb2dpbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vbG9naW4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZTQwZGZhNWFcIixcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGFnZXMvaW5kZXgvbG9naW4udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

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
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm._$s(5, "v-show", _vm.toInputShow != 0),
                    expression: "_$s(5,'v-show',toInputShow != 0)"
                  }
                ],
                staticClass: _vm._$s(5, "sc", "close"),
                attrs: { _i: 5 },
                on: { click: _vm.cancel }
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
            { staticClass: _vm._$s(13, "sc", "input"), attrs: { _i: 13 } },
            [
              _c(
                "view",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(14, "v-show", _vm.toInputShow != 0),
                      expression: "_$s(14,'v-show',toInputShow != 0)"
                    }
                  ],
                  attrs: { _i: 14 }
                },
                [
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.acc,
                        expression: "acc"
                      }
                    ],
                    attrs: { _i: 15 },
                    domProps: { value: _vm._$s(15, "v-model", _vm.acc) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.acc = $event.target.value
                      }
                    }
                  }),
                  _c("input", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.pass,
                        expression: "pass"
                      }
                    ],
                    attrs: { _i: 16 },
                    domProps: { value: _vm._$s(16, "v-model", _vm.pass) },
                    on: {
                      input: function($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.pass = $event.target.value
                      }
                    }
                  })
                ]
              )
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(17, "sc", "event"), attrs: { _i: 17 } },
            [
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(18, "v-show", _vm.toInputShow != 2),
                      expression: "_$s(18,'v-show',toInputShow != 2)"
                    }
                  ],
                  staticClass: _vm._$s(18, "sc", "login-btn"),
                  attrs: { _i: 18 },
                  on: { click: _vm.toLogin }
                },
                [_c("text")]
              ),
              _c(
                "button",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm._$s(20, "v-show", _vm.toInputShow != 1),
                      expression: "_$s(20,'v-show',toInputShow != 1)"
                    }
                  ],
                  staticClass: _vm._$s(20, "sc", "login-btn"),
                  attrs: { _i: 20 },
                  on: { click: _vm.toSignin }
                },
                [_c("text")]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(22, "sc", "login-way-text"),
              attrs: { _i: 22 }
            },
            [_c("text")]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(24, "sc", "login-way-select"),
              attrs: { _i: 24 }
            },
            [
              _c("view", [
                _c("image", { attrs: { _i: 26 } }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", { attrs: { _i: 30 } }),
                _c("view", [_c("text")])
              ]),
              _c("view", [
                _c("image", { attrs: { _i: 34 } }),
                _c("view", [_c("text")])
              ])
            ]
          ),
          _c(
            "view",
            { staticClass: _vm._$s(37, "sc", "agreement"), attrs: { _i: 37 } },
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
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      toInputShow: 0,\n      acc: \"test\",\n      pass: \"123\" };\n\n  },\n  methods: {\n    _login: function _login() {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var acc, pass;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n                acc = _this.acc;\n                pass = _this.pass;\n                __f__(\"log\", acc, pass, \" at pages/index/login.vue:61\");\n                _this.$database.get(\n                'users',\n                {\n                  username: acc,\n                  password: pass },\n\n                '_id,username',\n                function (data) {\n                  if (data.length == 0) {\n                    uni.showToast({\n                      icon: 'none',\n                      title: '帐号或密码错误' });\n\n                  } else\n                  {\n                    var rm = data[0];\n                    getApp().globalData.uid = rm._id;\n                    getApp().globalData.uname = rm.username;\n                    uni.navigateTo({\n                      url: 'index' });\n\n                  }\n                });case 4:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n    toLogin: function toLogin() {\n      if (this.toInputShow == 0)\n      this.toInputShow = 1;else\n      {\n        this._login();\n      }\n    },\n    toSignin: function toSignin() {\n      if (this.toInputShow == 0)\n      this.toInputShow = 2;else\n      {\n\n      }\n    },\n    cancel: function cancel() {\n      this.toInputShow = 0;\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvbG9naW4udnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsaUJBRkE7QUFHQSxpQkFIQTs7QUFLQSxHQVBBO0FBUUE7QUFDQSxVQURBLG9CQUNBO0FBQ0EsbUJBREEsR0FDQSxTQURBO0FBRUEsb0JBRkEsR0FFQSxVQUZBO0FBR0E7QUFDQTtBQUNBLHVCQURBO0FBRUE7QUFDQSwrQkFEQTtBQUVBLGdDQUZBLEVBRkE7O0FBTUEsOEJBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQSxrQ0FEQTtBQUVBLHNDQUZBOztBQUlBLG1CQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQURBOztBQUdBO0FBQ0EsaUJBdEJBLEVBSkE7O0FBNEJBLEtBN0JBO0FBOEJBLFdBOUJBLHFCQThCQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQXBDQTtBQXFDQSxZQXJDQSxzQkFxQ0E7QUFDQTtBQUNBLDJCQURBO0FBRUE7O0FBRUE7QUFDQSxLQTNDQTtBQTRDQSxVQTVDQSxvQkE0Q0E7QUFDQTtBQUNBLEtBOUNBLEVBUkEsRSIsImZpbGUiOiI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDx2aWV3IGNsYXNzPVwibWFpblwiPlxyXG4gICAgPHZpZXcgY2xhc3M9XCJiZ1wiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzX2JhclwiPlxyXG4gICAgICA8IS0tIOi/memHjOaYr+eKtuaAgeagjyAtLT5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm5hdmlnYXRlYmFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiY2xvc2VcIiBzcmM9XCIvc3RhdGljL3BpYy9sb2dpbi9leGl0LnBuZ1wiIHYtc2hvdz1cInRvSW5wdXRTaG93ICE9IDBcIiBAY2xpY2s9XCJjYW5jZWxcIj48L2ltYWdlPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibG9nby10ZXh0XCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwibWlkLWxvZ29cIiBzcmM9XCIvc3RhdGljL2xvZ28ucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8dmlldyBjbGFzcz1cIm1pZC10ZXh0XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm10ZXh0XCIgc3R5bGU9XCJmb250LXNpemU6IDEuNXJlbTsgZm9udC1mYW1pbHk6ICflubzlnIYnO1wiPjx0ZXh0PumFt+eLl+mfs+S5kDwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cIm10ZXh0XCIgc3R5bGU9XCJmb250LXNpemU6IDAuNnJlbTsgZm9udC1mYW1pbHk6ICfljY7mlofnu4bpu5EnO1wiPjx0ZXh0Pumfs+S5kOaAu+acieaWsOeOqeazlTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiaW5wdXRcIiA+XHJcbiAgICAgICAgPHZpZXcgdi1zaG93PVwidG9JbnB1dFNob3cgIT0gMFwiPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cImFjY1wiIHBsYWNlaG9sZGVyPVwi5biQ5Y+3XCIvPlxyXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdi1tb2RlbD1cInBhc3NcIiBwbGFjZWhvbGRlcj1cIuWvhueggVwiLz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJldmVudFwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJsb2dpbi1idG5cIiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICMwYzk2ZTY7XCIgQGNsaWNrPVwidG9Mb2dpblwiIHYtc2hvdz1cInRvSW5wdXRTaG93ICE9IDJcIj48dGV4dD7nmbvlvZU8L3RleHQ+PC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImxvZ2luLWJ0blwiIHN0eWxlPVwiYmFja2dyb3VuZC1jb2xvcjogIzBjZTZjNTtcIiBAY2xpY2s9XCJ0b1NpZ25pblwiIHYtc2hvdz1cInRvSW5wdXRTaG93ICE9IDFcIj48dGV4dD7ms6jlhow8L3RleHQ+PC9idXR0b24+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJsb2dpbi13YXktdGV4dFwiPjx0ZXh0PuWFtuS7lueZu+W9leaWueW8jzwvdGV4dD48L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibG9naW4td2F5LXNlbGVjdFwiPlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL2xvZ2luL3dlaWJvLnBuZ1wiPlxyXG4gICAgICAgICAgPHZpZXc+PHRleHQ+5b6u5Y2aPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvbG9naW4vcXEucG5nXCI+XHJcbiAgICAgICAgICA8dmlldz48dGV4dD5RUTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL2xvZ2luL3dlY2hhdC5wbmdcIj5cclxuICAgICAgICAgIDx2aWV3Pjx0ZXh0PuW+ruS/oTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiYWdyZWVtZW50XCI+PHRleHQ+55m75b2V5Luj6KGo5L2g5ZCM5oSPPHNwYW4+6YW354uX5pyN5YqhPC9zcGFuPuWSjDxzcGFuPumakOengeadoeasvjwvc3Bhbj48L3RleHQ+PC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0b0lucHV0U2hvdzogMCxcclxuICAgICAgICBhY2M6IFwidGVzdFwiLFxyXG4gICAgICAgIHBhc3M6IFwiMTIzXCJcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgYXN5bmMgX2xvZ2luKCkge1xyXG4gICAgICAgIGxldCBhY2MgPSB0aGlzLmFjYztcclxuICAgICAgICBsZXQgcGFzcyA9IHRoaXMucGFzcztcclxuICAgICAgICBjb25zb2xlLmxvZyhhY2MsIHBhc3MpO1xyXG4gICAgICAgIHRoaXMuJGRhdGFiYXNlLmdldChcclxuICAgICAgICAgICd1c2VycycsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVzZXJuYW1lOiBhY2MsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgJ19pZCx1c2VybmFtZScsXHJcbiAgICAgICAgICBmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgaWYoZGF0YS5sZW5ndGggPT0gMCl7XHJcbiAgICAgICAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ+W4kOWPt+aIluWvhueggemUmeivrydcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgY29uc3Qgcm0gPSBkYXRhWzBdO1xyXG4gICAgICAgICAgICAgIGdldEFwcCgpLmdsb2JhbERhdGEudWlkID0gcm0uX2lkO1xyXG4gICAgICAgICAgICAgIGdldEFwcCgpLmdsb2JhbERhdGEudW5hbWUgPSBybS51c2VybmFtZTtcclxuICAgICAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdpbmRleCdcclxuICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICApXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTG9naW4oKSB7XHJcbiAgICAgICAgaWYodGhpcy50b0lucHV0U2hvdz09MClcclxuICAgICAgICAgIHRoaXMudG9JbnB1dFNob3c9MTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX2xvZ2luKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0b1NpZ25pbigpIHtcclxuICAgICAgICBpZih0aGlzLnRvSW5wdXRTaG93PT0wKVxyXG4gICAgICAgICAgdGhpcy50b0lucHV0U2hvdz0yO1xyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICAgIH0sXHJcbiAgICAgIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLnRvSW5wdXRTaG93PTA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJ35AL3Rvb2wuc2Nzcyc7XHJcbiAgJGJnaTogJy9zdGF0aWMvcGljL2xvZ2luL2JnaS5qcGcnO1xyXG4gIC5iZyB7XHJcbiAgICBAaW5jbHVkZSBpLWJhY2tncm91bmQtYXBwKCRiZ2kpO1xyXG4gIH1cclxuICAuY29udGVudCB7XHJcbiAgICBAZXh0ZW5kIC5pLWZpbGwtY29udGFpbmVyOyAgICBcclxuICAgIGZvbnQtZmFtaWx5OiBcIuWNjuaWh+alt+S9k1wiO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0ZWJhciB7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDMzcHg7XHJcbiAgICBcclxuICAgIC5jbG9zZSB7XHJcbiAgICAgIHdpZHRoOiAxNHB4OyBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAxOXB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9nby10ZXh0IHtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgbWFyZ2luLXRvcDogMTAxcHg7XHJcbiAgICBcclxuICAgIC5taWQtbG9nbyB7XHJcbiAgICAgIHdpZHRoOiA1OXB4OyBoZWlnaHQ6IDU5cHg7XHJcbiAgICB9XHJcbiAgICAubWlkLXRleHQge1xyXG4gICAgICBAZXh0ZW5kIC5pLWNvbC12ZXJ0aWNhbC1iZXR3ZWVuO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjZweDtcclxuICAgICAgXHJcbiAgICAgIC5tdGV4dCB7XHJcbiAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgIEBleHRlbmQgLmktdGV4dC1iZXR3ZWVuO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5pbnB1dCB7XHJcbiAgICBoZWlnaHQ6IDE4M3B4OyBcclxuICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyLC5pLWNvbC12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIGlucHV0IHtcclxuICAgICAgd2lkdGg6IDI0OHB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIHRleHQtaW5kZW50OjEwcHg7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDJweCAjRkZGRkZGIHNvbGlkO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuZXZlbnQge1xyXG4gICAgaGVpZ2h0OiA0OXB4O1xyXG4gICAgXHJcbiAgICAubG9naW4tYnRuIHtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgICAgd2lkdGg6IDI0OHB4OyBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAubG9naW4td2F5LXRleHQge1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1jZW50ZXIsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogcHJlO1xyXG4gICAgZm9udC1zaXplOiAwLjcycmVtO1xyXG4gICAgbWFyZ2luLXRvcDogMzhweDtcclxuICAgIFxyXG4gICAgJjo6YWZ0ZXIsICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIHdpZHRoOiAzNSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2dpbi13YXktc2VsZWN0IHtcclxuICAgIHdpZHRoOiAyMzVweDsgaGVpZ2h0OiA0MXB4O1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuO1xyXG4gICAgbWFyZ2luLXRvcDogMjhweDtcclxuICAgIFxyXG4gICAgaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMjJweDsgaGVpZ2h0OiAyMnB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICB0ZXh0IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1jZW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZ3JlZW1lbnQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAzMXB4O1xyXG4gICAgXHJcbiAgICBzcGFuIHtcclxuICAgICAgY29sb3I6ICMwMzdjYzI7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
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


/***/ }),
/* 8 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 9);

/***/ }),
/* 9 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 10);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 10 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 11 */
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
/* 12 */
/*!***********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?mpType=page ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 13);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 15);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"2be84a3c\",\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUk7QUFDekk7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSx1R0FBTTtBQUNSLEVBQUUsZ0hBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYmU4NGEzYyZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjJiZTg0YTNjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///12\n");

/***/ }),
/* 13 */
/*!*****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page ***!
  \*****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&scoped=true&mpType=page */ 14);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 14 */
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
                  _c(
                    "view",
                    { attrs: { _i: 40 }, on: { click: _vm.gotoPlay } },
                    [
                      _c("image", {
                        staticClass: _vm._$s(41, "sc", "cover anplay"),
                        class: _vm._$s(41, "c", { anpause: _vm.ispause }),
                        attrs: {
                          src: _vm._$s(
                            41,
                            "a-src",
                            _vm.list[_vm.nowMusic].curl
                          ),
                          _i: 41
                        }
                      })
                    ]
                  )
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
                            style: _vm._$s(45, "s", {
                              width: _vm.loading + "%"
                            }),
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
                                _vm._$s(
                                  49,
                                  "t0-0",
                                  _vm._s(_vm.list[_vm.nowMusic].title)
                                )
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
                                  _vm._s(_vm.list[_vm.nowMusic].singer)
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
                          _c(
                            "view",
                            { attrs: { _i: 52 }, on: { click: _vm.pop } },
                            [
                              _c("image", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm._$s(53, "v-show", _vm.ispause),
                                    expression: "_$s(53,'v-show',ispause)"
                                  }
                                ],
                                staticClass: _vm._$s(53, "sc", "icon"),
                                attrs: { _i: 53 }
                              }),
                              _c("image", {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm._$s(54, "v-show", !_vm.ispause),
                                    expression: "_$s(54,'v-show',!ispause)"
                                  }
                                ],
                                staticClass: _vm._$s(54, "sc", "icon"),
                                attrs: { _i: 54 }
                              })
                            ]
                          ),
                          _c(
                            "view",
                            { attrs: { _i: 55 }, on: { click: _vm.next } },
                            [
                              _c("image", {
                                staticClass: _vm._$s(56, "sc", "icon"),
                                attrs: { _i: 56 }
                              })
                            ]
                          ),
                          _c(
                            "view",
                            { attrs: { _i: 57 }, on: { click: _vm.gotoPlay } },
                            [
                              _c("image", {
                                staticClass: _vm._$s(58, "sc", "icon"),
                                attrs: { _i: 58 }
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
              return _vm.gotoPlaylist(index)
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
/* 15 */
/*!***********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 16);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd0QixDQUFnQiwwdEJBQUcsRUFBQyIsImZpbGUiOiIxNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///15\n");

/***/ }),
/* 16 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e) {throw _e;}, f: F };}throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e2) {didErr = true;err = _e2;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === \"Object\" && o.constructor) n = o.constructor.name;if (n === \"Map\" || n === \"Set\") return Array.from(o);if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      me: {\n        uid: '',\n        avatarUrl: '/static/pic/index/avatar.png',\n        nickname: '胡萝北',\n        level: 5,\n        duration: 15302 },\n\n      list: [\n      {\n        title: '',\n        singer: '',\n        curl: '' }],\n\n\n      ispause: true,\n      isautoplay: false,\n      loading: 0,\n      nowMusic: 0,\n      myMusic: [\n      {\n        iconUrl: '/static/pic/index/pc.png',\n        title: '本地音乐',\n        num: 148 },\n\n      {\n        iconUrl: '/static/pic/index/heart.png',\n        title: '喜欢·歌单',\n        num: 3 },\n      {\n        iconUrl: '/static/pic/index/download.png',\n        title: '下载',\n        num: 2 },\n      {\n        iconUrl: '/static/pic/index/time.png',\n        title: '最近',\n        num: 100 }],\n\n\n      allMusic: [\n      {\n        iconUrl: '/static/pic/index/note.png',\n        bgc: '#06b062',\n        title: '乐库' },\n\n      {\n        iconUrl: '/static/pic/index/work.png',\n        bgc: '#067ab0',\n        title: '歌单' },\n\n      {\n        iconUrl: '/static/pic/index/chart.png',\n        bgc: '#e62134',\n        title: '电台·酷群' },\n\n      {\n        iconUrl: '/static/pic/index/radio.png',\n        bgc: '#c25bd1',\n        title: '猜你喜欢' },\n\n      {\n        iconUrl: '/static/pic/index/chart.png',\n        bgc: '#edb231',\n        title: '每日推荐' },\n\n      {\n        iconUrl: '/static/pic/index/micro.png',\n        bgc: '#4be22d',\n        title: '听歌识曲' }] };\n\n\n\n  },\n  methods: {\n    gotoPlaylist: function gotoPlaylist(id) {\n      if (id == 3)\n      uni.navigateTo({\n        url: 'playlist' });\n\n    },\n    gotoPlay: function gotoPlay() {\n      uni.navigateTo({\n        url: 'play' });\n\n    },\n    // 获取用户信息\n    initMe: function initMe() {\n      this.me.nickname = getApp().globalData.uname;\n      this.me.uid = getApp().globalData.uid;\n    },\n    // 初始化播放器信息\n    initMusicList: function initMusicList() {var _this = this;\n      this.$database.get(\n      'listen, musicList',\n      {\n        uid: getApp().globalData.uid },\n\n      'mid',\n      function (data) {\n        var list = [];\n        // 解包\n        var _iterator = _createForOfIteratorHelper(data),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var item = _step.value;\n            list.push(item.mid[0]);\n          }} catch (err) {_iterator.e(err);} finally {_iterator.f();}\n        _this.$audio.initList(list);\n        _this.$audio.initMusic();\n        _this.$audio.initPlaying(function () {\n          _this.loading = _this.$audio.getLoading();\n        });\n        _this.pullPlayer();\n        __f__(\"log\", data, \" at pages/index/index.vue:201\");\n      });\n\n    },\n    // 同步播放器信息\n    pullPlayer: function pullPlayer() {\n      this.list = this.$audio.musiclist;\n      this.ispause = this.$audio.getPaused();\n      this.nowMusic = this.$audio.index;\n      this.loading = this.$audio.getLoading();\n    },\n    // play or pause\n    pop: function pop() {\n      if (this.ispause) {\n        this.$audio.play();\n        this.ispause = this.$audio.getPaused();\n      } else\n      {\n        this.$audio.pause();\n        this.ispause = this.$audio.getPaused();\n      }\n    },\n    // 下一曲\n    next: function next() {\n      this.$audio.toNextMusic();\n      this.pullPlayer();\n    } },\n\n  mounted: function mounted() {\n    this.initMe();\n    this.initMusicList();\n  },\n  onShow: function onShow() {\n    this.pullPlayer();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3RkE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQSxpREFGQTtBQUdBLHVCQUhBO0FBSUEsZ0JBSkE7QUFLQSx1QkFMQSxFQURBOztBQVFBO0FBQ0E7QUFDQSxpQkFEQTtBQUVBLGtCQUZBO0FBR0EsZ0JBSEEsRUFEQSxDQVJBOzs7QUFlQSxtQkFmQTtBQWdCQSx1QkFoQkE7QUFpQkEsZ0JBakJBO0FBa0JBLGlCQWxCQTtBQW1CQTtBQUNBO0FBQ0EsMkNBREE7QUFFQSxxQkFGQTtBQUdBLGdCQUhBLEVBREE7O0FBTUE7QUFDQSw4Q0FEQTtBQUVBLHNCQUZBO0FBR0EsY0FIQSxFQU5BO0FBVUE7QUFDQSxpREFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQSxFQVZBO0FBY0E7QUFDQSw2Q0FEQTtBQUVBLG1CQUZBO0FBR0EsZ0JBSEEsRUFkQSxDQW5CQTs7O0FBdUNBO0FBQ0E7QUFDQSw2Q0FEQTtBQUVBLHNCQUZBO0FBR0EsbUJBSEEsRUFEQTs7QUFNQTtBQUNBLDZDQURBO0FBRUEsc0JBRkE7QUFHQSxtQkFIQSxFQU5BOztBQVdBO0FBQ0EsOENBREE7QUFFQSxzQkFGQTtBQUdBLHNCQUhBLEVBWEE7O0FBZ0JBO0FBQ0EsOENBREE7QUFFQSxzQkFGQTtBQUdBLHFCQUhBLEVBaEJBOztBQXFCQTtBQUNBLDhDQURBO0FBRUEsc0JBRkE7QUFHQSxxQkFIQSxFQXJCQTs7QUEwQkE7QUFDQSw4Q0FEQTtBQUVBLHNCQUZBO0FBR0EscUJBSEEsRUExQkEsQ0F2Q0E7Ozs7QUF3RUEsR0ExRUE7QUEyRUE7QUFDQSxnQkFEQSx3QkFDQSxFQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBREE7O0FBR0EsS0FOQTtBQU9BLFlBUEEsc0JBT0E7QUFDQTtBQUNBLG1CQURBOztBQUdBLEtBWEE7QUFZQTtBQUNBLFVBYkEsb0JBYUE7QUFDQTtBQUNBO0FBQ0EsS0FoQkE7QUFpQkE7QUFDQSxpQkFsQkEsMkJBa0JBO0FBQ0E7QUFDQSx5QkFEQTtBQUVBO0FBQ0Esb0NBREEsRUFGQTs7QUFLQSxXQUxBO0FBTUE7QUFDQTtBQUNBO0FBRkEsbURBR0EsSUFIQSxhQUdBO0FBQ0E7QUFDQSxXQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUZBO0FBR0E7QUFDQTtBQUNBLE9BbkJBOztBQXFCQSxLQXhDQTtBQXlDQTtBQUNBLGNBMUNBLHdCQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0EvQ0E7QUFnREE7QUFDQSxPQWpEQSxpQkFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUhBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFEQTtBQTJEQTtBQUNBLFFBNURBLGtCQTREQTtBQUNBO0FBQ0E7QUFDQSxLQS9EQSxFQTNFQTs7QUE0SUEsU0E1SUEscUJBNElBO0FBQ0E7QUFDQTtBQUNBLEdBL0lBO0FBZ0pBLFFBaEpBLG9CQWdKQTtBQUNBO0FBQ0EsR0FsSkEsRSIsImZpbGUiOiIxNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmdcIj48L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJuYXZpZ2F0ZWJhclwiPlxyXG4gICAgICAgIDxpbWFnZSBjbGFzcz1cIm1lbnVcIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9tZW51LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXc+PHRleHQgY2xhc3M9XCJncmlcIj7lkKw8L3RleHQ+PC92aWV3PlxyXG4gICAgICAgIDx2aWV3Pjx0ZXh0PuecizwvdGV4dD48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+PHRleHQ+5ZSxPC90ZXh0Pjwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJzZWFyY2hcIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9zZWFyY2gucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInBlcnNvbmFsXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYXZhdGFyXCIgOnNyYz1cIm1lLmF2YXRhclVybFwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvclwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ1cFwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cIm5pY2tuYW1lXCI+e3sgbWUubmlja25hbWUgfX08L3RleHQ+XHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cInZpcFwiIHNyYz1cIi9zdGF0aWMvcGljL2luZGV4L3ZpcC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJkb3duXCI+XHJcbiAgICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGV2ZWxcIj5MVi57eyBtZS5sZXZlbCB9fTwvdmlldz5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJkdXJhdGlvblwiPuWQrOatjHt7IG1lLmR1cmF0aW9uIH195YiG6ZKfPC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJtZXNzZWdlXCIgc3JjPVwiL3N0YXRpYy9waWMvaW5kZXgvZW1haWwucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm15LW11c2ljXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJteS1tdXNpYy1pdGVtXCIgdi1mb3I9XCJpdGVtLGluZGV4IGluIG15TXVzaWNcIiA6a2V5PVwiaW5kZXhcIiAgQGNsaWNrPVwiZ290b1BsYXlsaXN0KGluZGV4KVwiIHYtb25jZT5cclxuICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImljb25cIiA6c3JjPVwiaXRlbS5pY29uVXJsXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwiYWx0XCI+e3sgaXRlbS50aXRsZSB9fTwvdGV4dD5cclxuICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibnVtXCI+e3sgaXRlbS5udW0gfX08L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiYWxsLW11c2ljXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJhbGwtbXVzaWMtaXRlbVwiIHYtZm9yPVwiaXRlbSxpbmRleCBpbiBhbGxNdXNpY1wiIDprZXk9XCJpbmRleFwiIHYtb25jZT5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiaWNvbi1iZ1wiIDpzdHlsZT1cIidiYWNrZ3JvdW5kLWNvbG9yOicraXRlbS5iZ2NcIj5cclxuICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIDpzcmM9XCJpdGVtLmljb25VcmxcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHRleHQgY2xhc3M9XCJhbHRcIj57eyBpdGVtLnRpdGxlIH19PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImFkdml0aXNlbWVudFwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwibGVmdFwiPlxyXG4gICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvcGljL2luZGV4L3ZvaWNlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dCBjbGFzcz1cImFsdFwiPuaOqOW5vzwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHRleHQgY2xhc3M9XCJyZXBvcnRcIj7oo4Xkuobov5nkuKphcHDkuI3nlKjlho3ljrtrdHY8L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJ0YWJiYXJcIj5cclxuICAgICAgICA8dmlldyBjbGFzcz1cImxlZnRcIj5cclxuICAgICAgICAgIDx2aWV3IEBjbGljaz1cImdvdG9QbGF5XCI+ICAgXHJcbiAgICAgICAgICAgIDxpbWFnZSBjbGFzcz1cImNvdmVyIGFucGxheVwiIDpjbGFzcz1cInthbnBhdXNlOiBpc3BhdXNlfVwiIDpzcmM9XCJsaXN0W25vd011c2ljXS5jdXJsXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJyaWdodFwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJ1cFwiPlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cImxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cInBhc3NcIiA6c3R5bGU9XCJ7d2lkdGg6IGxvYWRpbmcrJyUnfVwiPjwvdmlldz5cclxuICAgICAgICAgICAgICA8dmlldyBjbGFzcz1cImluXCI+PC92aWV3PlxyXG4gICAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImRvd25cIj5cclxuICAgICAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx0ZXh0IGNsYXNzPVwibS1uYW1lXCI+e3sgbGlzdFtub3dNdXNpY10udGl0bGUgfX08L3RleHQ+XHJcbiAgICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJtLXNpbmdlclwiPnt7IGxpc3Rbbm93TXVzaWNdLnNpbmdlciB9fTwvdGV4dD5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgICA8dmlldyBjbGFzcz1cIm9wZXJhdGlvblwiPlxyXG4gICAgICAgICAgICAgIDx2aWV3IEBjbGljaz1cInBvcFwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIHYtc2hvdz1cImlzcGF1c2VcIiBjbGFzcz1cImljb25cIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9wbGF5LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2Ugdi1zaG93PVwiIWlzcGF1c2VcIiBjbGFzcz1cImljb25cIiBzcmM9XCIvc3RhdGljL3BpYy9pbmRleC9wYXVzZS5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICA8dmlldyBAY2xpY2s9XCJuZXh0XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1hZ2UgY2xhc3M9XCJpY29uXCIgc3JjPVwiL3N0YXRpYy9waWMvaW5kZXgvbmV4dC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgICA8dmlldyBAY2xpY2s9XCJnb3RvUGxheVwiPlxyXG4gICAgICAgICAgICAgICAgPGltYWdlIGNsYXNzPVwiaWNvblwiIHNyYz1cIi9zdGF0aWMvcGljL2luZGV4L2RldGFpbC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtZToge1xyXG4gICAgICAgICAgdWlkOiAnJyxcclxuICAgICAgICAgIGF2YXRhclVybDogJy9zdGF0aWMvcGljL2luZGV4L2F2YXRhci5wbmcnLFxyXG4gICAgICAgICAgbmlja25hbWU6ICfog6HokJ3ljJcnLFxyXG4gICAgICAgICAgbGV2ZWw6IDUsXHJcbiAgICAgICAgICBkdXJhdGlvbjogMTUzMDJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3Q6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICBzaW5nZXI6ICcnLFxyXG4gICAgICAgICAgICBjdXJsOiAnJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaXNwYXVzZTogdHJ1ZSxcclxuICAgICAgICBpc2F1dG9wbGF5OiBmYWxzZSxcclxuICAgICAgICBsb2FkaW5nOiAwLFxyXG4gICAgICAgIG5vd011c2ljOiAwLFxyXG4gICAgICAgIG15TXVzaWM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy9zdGF0aWMvcGljL2luZGV4L3BjLnBuZycsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn5pys5Zyw6Z+z5LmQJyxcclxuICAgICAgICAgICAgbnVtOiAxNDhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9oZWFydC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+WWnOasosK35q2M5Y2VJyxcclxuICAgICAgICAgICAgbnVtOiAzXHJcbiAgICAgICAgICB9LCAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9kb3dubG9hZC5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+S4i+i9vScsXHJcbiAgICAgICAgICAgIG51bTogMlxyXG4gICAgICAgICAgfSwgICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvdGltZS5wbmcnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+acgOi/kScsXHJcbiAgICAgICAgICAgIG51bTogMTAwXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhbGxNdXNpYzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvbm90ZS5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjMDZiMDYyJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfkuZDlupMnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvd29yay5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjMDY3YWIwJyxcclxuICAgICAgICAgICAgdGl0bGU6ICfmrYzljZUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvY2hhcnQucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2U2MjEzNCcsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn55S15Y+wwrfphbfnvqQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uVXJsOiAnL3N0YXRpYy9waWMvaW5kZXgvcmFkaW8ucG5nJyxcclxuICAgICAgICAgICAgYmdjOiAnI2MyNWJkMScsXHJcbiAgICAgICAgICAgIHRpdGxlOiAn54yc5L2g5Zac5qyiJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvblVybDogJy9zdGF0aWMvcGljL2luZGV4L2NoYXJ0LnBuZycsXHJcbiAgICAgICAgICAgIGJnYzogJyNlZGIyMzEnLFxyXG4gICAgICAgICAgICB0aXRsZTogJ+avj+aXpeaOqOiNkCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb25Vcmw6ICcvc3RhdGljL3BpYy9pbmRleC9taWNyby5wbmcnLFxyXG4gICAgICAgICAgICBiZ2M6ICcjNGJlMjJkJyxcclxuICAgICAgICAgICAgdGl0bGU6ICflkKzmrYzor4bmm7InXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBnb3RvUGxheWxpc3QoaWQpe1xyXG4gICAgICAgIGlmKGlkID09IDMpXHJcbiAgICAgICAgICB1bmkubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJ3BsYXlsaXN0J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdvdG9QbGF5KCl7XHJcbiAgICAgICAgdW5pLm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAncGxheSdcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICAgIGluaXRNZSgpIHtcclxuICAgICAgICB0aGlzLm1lLm5pY2tuYW1lID0gZ2V0QXBwKCkuZ2xvYmFsRGF0YS51bmFtZTtcclxuICAgICAgICB0aGlzLm1lLnVpZCA9IGdldEFwcCgpLmdsb2JhbERhdGEudWlkO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDliJ3lp4vljJbmkq3mlL7lmajkv6Hmga9cclxuICAgICAgaW5pdE11c2ljTGlzdCgpe1xyXG4gICAgICAgIHRoaXMuJGRhdGFiYXNlLmdldChcclxuICAgICAgICAgICdsaXN0ZW4sIG11c2ljTGlzdCcsXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHVpZDogZ2V0QXBwKCkuZ2xvYmFsRGF0YS51aWRcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICAnbWlkJyxcclxuICAgICAgICAgIChkYXRhKT0+e1xyXG4gICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAvLyDop6PljIVcclxuICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIGRhdGEpe1xyXG4gICAgICAgICAgICAgIGxpc3QucHVzaChpdGVtLm1pZFswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy4kYXVkaW8uaW5pdExpc3QobGlzdCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGF1ZGlvLmluaXRNdXNpYygpO1xyXG4gICAgICAgICAgICB0aGlzLiRhdWRpby5pbml0UGxheWluZygoKT0+e1xyXG4gICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMuJGF1ZGlvLmdldExvYWRpbmcoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMucHVsbFBsYXllcigpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyDlkIzmraXmkq3mlL7lmajkv6Hmga9cclxuICAgICAgcHVsbFBsYXllcigpe1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMuJGF1ZGlvLm11c2ljbGlzdDtcclxuICAgICAgICB0aGlzLmlzcGF1c2UgPSB0aGlzLiRhdWRpby5nZXRQYXVzZWQoKTtcclxuICAgICAgICB0aGlzLm5vd011c2ljID0gdGhpcy4kYXVkaW8uaW5kZXg7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy4kYXVkaW8uZ2V0TG9hZGluZygpO1xyXG4gICAgICB9LFxyXG4gICAgICAvLyBwbGF5IG9yIHBhdXNlXHJcbiAgICAgIHBvcCgpe1xyXG4gICAgICAgIGlmKHRoaXMuaXNwYXVzZSl7ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMuJGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgIHRoaXMuaXNwYXVzZSA9IHRoaXMuJGF1ZGlvLmdldFBhdXNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNle1xyXG4gICAgICAgICAgdGhpcy4kYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICAgIHRoaXMuaXNwYXVzZSA9IHRoaXMuJGF1ZGlvLmdldFBhdXNlZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgLy8g5LiL5LiA5puyXHJcbiAgICAgIG5leHQoKXtcclxuICAgICAgICB0aGlzLiRhdWRpby50b05leHRNdXNpYygpO1xyXG4gICAgICAgIHRoaXMucHVsbFBsYXllcigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHsgICAgIFxyXG4gICAgICB0aGlzLmluaXRNZSgpO1xyXG4gICAgICB0aGlzLmluaXRNdXNpY0xpc3QoKTtcclxuICAgIH0sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMucHVsbFBsYXllcigpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnfkAvdG9vbC5zY3NzJztcclxuICAkYmdpOiAnL3N0YXRpYy9waWMvaW5kZXgvYmdpLmpwZyc7XHJcbiAgLmJnIHtcclxuICAgIEBpbmNsdWRlIGktYmFja2dyb3VuZC1hcHAoJGJnaSk7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAn5Y2O5paH5qW35L2TJztcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0ZWJhciB7XHJcbiAgICBoZWlnaHQ6IDUxcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMThweDtcclxuICAgIGZvbnQtZmFtaWx5OiAn5bm85ZyGJztcclxuICAgIGNvbG9yOiAjMDc2Y2NlO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyLCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuO1xyXG4gIFxyXG4gICAgLm1lbnUge1xyXG4gICAgICB3aWR0aDogMThweDsgIGhlaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIC5zZWFyY2gge1xyXG4gICAgICB3aWR0aDogMThweDsgIGhlaWdodDogMThweDtcclxuICAgIH1cclxuICAgIC5ncmkge1xyXG4gICAgICAvKiDmloflrZfmuJDlj5jvvIzlj6rmlK/mjIF3ZWJraXTmtY/op4jlmaggKi9cclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwjNDNkNWViLCNmZmYpO1xyXG4gICAgICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAgICAgY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgfVxyXG4gIH1cclxuICAucGVyc29uYWwge1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgcGFkZGluZzogMHB4IDE4cHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIC5hdmF0YXIge1xyXG4gICAgICB3aWR0aDogNDNweDsgIGhlaWdodDogNDNweDtcclxuICAgIH1cclxuICAgIC5pbmZvcntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDE0LjY2cHg7XHJcbiAgICAgIC51cCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLm5pY2tuYW1lIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA2cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52aXAge1xyXG4gICAgICAgICAgd2lkdGg6IDhweDsgIGhlaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZG93biB7XHJcbiAgICAgICAgQGV4dGVuZCAuaS1yb3c7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAubGV2ZWwge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjM0cmVtO1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICfljY7mlofkuK3lrosnO1xyXG4gICAgICAgICAgY29sb3I6ICNmOWE4MGI7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjlhODBiIDtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZHVyYXRpb24ge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAwLjM2cmVtO1xyXG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgIGNvbG9yOiAjYjViNGIxO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLm1lc3NlZ2Uge1xyXG4gICAgICB3aWR0aDogMTRweDsgaGVpZ2h0OiAxMXB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTY5cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5teS1tdXNpYyB7XHJcbiAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICBtYXJnaW46IDBweCAxNS42NnB4IDtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYmV0d2VlbjtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgXHJcbiAgICAubXktbXVzaWMtaXRlbSB7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLmljb24ge1xyXG4gICAgICAgIHdpZHRoOiAyNnB4OyAgaGVpZ2h0OiAyNnB4OyAgICBcclxuICAgICAgfSAgICAgIFxyXG4gICAgICAuYWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuNzJyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgfSAgICAgXHJcbiAgICAgIC5udW0ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC42cmVtO1xyXG4gICAgICAgIGNvbG9yOiAjYjViNGIxO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuYWxsLW11c2ljIHtcclxuICAgIGhlaWdodDogMjA2cHg7ICB3aWR0aDogMTAwJTtcclxuICAgIEBleHRlbmQgLmktcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG5cclxuICAgIC5hbGwtbXVzaWMtaXRlbSB7XHJcbiAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBtYXJnaW46IDBweCAzMnB4O1xyXG4gICAgICBcclxuICAgICAgLmljb24tYmcge1xyXG4gICAgICAgIHdpZHRoOiA1NXB4OyAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI3LjVweDtcclxuICAgICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXIsIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgICAgfSAgICAgIFxyXG4gICAgICAuaWNvbiB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7ICBoZWlnaHQ6IDIxcHg7ICAgXHJcbiAgICAgIH0gICAgIFxyXG4gICAgICAuYWx0IHtcclxuICAgICAgICBmb250LXNpemU6IDAuNnJlbTtcclxuICAgICAgICBjb2xvcjogIzg3Y2JjYztcclxuICAgICAgICBtYXJnaW46IDExcHggMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hZHZpdGlzZW1lbnQge1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgbWFyZ2luOiAwcHggMjBweDtcclxuICAgIGJvcmRlci10b3A6MXB4IHNvbGlkICMwYThlYzU7XHJcbiAgICBib3JkZXItYm90dG9tOjFweCBzb2xpZCAjMGE4ZWM1O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyLCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuO1xyXG4gICAgXHJcbiAgICAubGVmdCB7XHJcbiAgICAgIEBleHRlbmQgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIH0gICBcclxuICAgIC5pY29uIHtcclxuICAgICAgd2lkdGg6IDE5cHg7ICBoZWlnaHQ6IDE5cHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgIH0gIFxyXG4gICAgLmFsdCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC43MnJlbTtcclxuICAgICAgY29sb3I6ICM4N2NiY2M7XHJcbiAgICB9ICAgXHJcbiAgICAucmVwb3J0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgIGNvbG9yOiAjODdjYmNjO1xyXG4gICAgfVxyXG4gIH1cclxuICAudGFiYmFyIHtcclxuICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDY2cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE1MWYyODtcclxuICAgIEBleHRlbmQgLmktcm93O1xyXG4gICAgXHJcbiAgICAuY292ZXJ7XHJcbiAgICAgIHdpZHRoOiA1OXB4OyBoZWlnaHQ6IDU5cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbiAgICAgIGJvcmRlcjogc29saWQgIzA4MGMxMCAzcHg7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcbiAgICAucmlnaHR7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIFxyXG4gICAgICAudXB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTAlO1xyXG4gICAgICAgIEBleHRlbmQgLmktcm93LXZlcnRpY2FsLWNlbnRlciwgLmktcm93LWhvcml6b250YWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgICAubG9hZGluZ3tcclxuICAgICAgICAgIHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDFweDtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTE4MmQ7XHJcbiAgICAgICAgICBAZXh0ZW5kIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC5wYXNze1xyXG4gICAgICAgICAgICB3aWR0aDogMCU7IGhlaWdodDogMXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5MGYzO1xyXG4gICAgICAgICAgfSAgICAgXHJcbiAgICAgICAgICAuaW57XHJcbiAgICAgICAgICAgIHdpZHRoOiA2cHg7IGhlaWdodDogNnB4O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTkwZjM7XHJcbiAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmRvd257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNTAlO1xyXG4gICAgICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYmV0d2VlbjtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmluZm9ybWF0aW9ue1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIEBleHRlbmQgLmktY29sO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAubS1uYW1le1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47ICAgXHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7ICAgICBcclxuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7IFxyXG4gICAgICAgICAgfSAgICAgICAgIFxyXG4gICAgICAgICAgLm0tc2luZ2Vye1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjQ4cmVtO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAub3BlcmF0aW9ue1xyXG4gICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kO1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgICAuaWNvbntcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7IGhlaWdodDogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?mpType=page ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page */ 18);\n/* harmony import */ var _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./play.vue?vue&type=script&lang=js&mpType=page */ 30);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"4947c54c\",\n  null,\n  false,\n  _play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/play.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBd0k7QUFDeEk7QUFDbUU7QUFDTDs7O0FBRzlEO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHFGQUFNO0FBQ1IsRUFBRSxzR0FBTTtBQUNSLEVBQUUsK0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5NDdjNTRjJnNjb3BlZD10cnVlJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5leHBvcnQgKiBmcm9tIFwiLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjQ5NDdjNTRjXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3BsYXkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!****************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=template&id=4947c54c&scoped=true&mpType=page */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_template_id_4947c54c_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
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
try {
  components = {
    pageMeta: __webpack_require__(/*! @dcloudio/uni-cli-shared/components/page-meta.vue */ 20)
      .default
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "main"), attrs: { _i: 1 } },
      [
        _c("page-meta", { attrs: { _i: 2 } }),
        _c("image", {
          staticClass: _vm._$s(3, "sc", "bg1"),
          attrs: {
            src: _vm._$s(3, "a-src", _vm.list[_vm.nowMusic].curl),
            _i: 3
          }
        }),
        _c("view", { staticClass: _vm._$s(4, "sc", "bg2"), attrs: { _i: 4 } }),
        _c("view", {
          staticClass: _vm._$s(5, "sc", "status_bar"),
          attrs: { _i: 5 }
        }),
        _c(
          "view",
          { staticClass: _vm._$s(6, "sc", "content"), attrs: { _i: 6 } },
          [
            _c(
              "view",
              {
                staticClass: _vm._$s(7, "sc", "navigatebar"),
                attrs: { _i: 7 }
              },
              [
                _c("image", {
                  staticClass: _vm._$s(8, "sc", "back"),
                  attrs: { _i: 8 },
                  on: { click: _vm.toBack }
                }),
                _c(
                  "text",
                  { staticClass: _vm._$s(9, "sc", "m-name"), attrs: { _i: 9 } },
                  [
                    _vm._v(
                      _vm._$s(9, "t0-0", _vm._s(_vm.list[_vm.nowMusic].title))
                    )
                  ]
                )
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(10, "sc", "m-singer"), attrs: { _i: 10 } },
              [
                _c("text", [
                  _vm._v(
                    _vm._$s(11, "t0-0", _vm._s(_vm.list[_vm.nowMusic].singer))
                  )
                ])
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(12, "sc", "m-effect"), attrs: { _i: 12 } },
              [
                _c("view", [_c("text"), _c("image", { attrs: { _i: 15 } })]),
                _c("view", [_c("text")]),
                _c("view", [_c("text"), _c("image", { attrs: { _i: 20 } })])
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(21, "sc", "m-cover"), attrs: { _i: 21 } },
              [
                _c("image", {
                  staticClass: _vm._$s(22, "sc", "anplay"),
                  class: _vm._$s(22, "c", { anpause: _vm.ispause }),
                  attrs: {
                    src: _vm._$s(22, "a-src", _vm.list[_vm.nowMusic].curl),
                    _i: 22
                  }
                })
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(23, "sc", "m-lyric"), attrs: { _i: 23 } },
              [
                _c("view", [
                  _c("image"),
                  _c("text", [_vm._v(_vm._$s(26, "t0-0", _vm._s(_vm.first)))]),
                  _c("image", { attrs: { _i: 27 } })
                ]),
                _c("view", [
                  _c("image"),
                  _c("text", [_vm._v(_vm._$s(30, "t0-0", _vm._s(_vm.second)))]),
                  _c("image", { attrs: { _i: 31 } })
                ])
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(32, "sc", "is-sing"), attrs: { _i: 32 } },
              [
                _c("view", {
                  staticClass: _vm._$s(33, "sc", "sing"),
                  style: _vm._$s(
                    33,
                    "s",
                    "background-color:" + _vm.otherSelect[_vm.other]
                  ),
                  attrs: { _i: 33 }
                }),
                _c("view", {
                  staticClass: _vm._$s(34, "sc", "other"),
                  style: _vm._$s(
                    34,
                    "s",
                    "background-color:" + _vm.otherSelect[1 - _vm.other]
                  ),
                  attrs: { _i: 34 }
                })
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(35, "sc", "interactive"),
                attrs: { _i: 35 }
              },
              [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      36,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/play/like.png */ 25)
                    ),
                    _i: 36
                  }
                }),
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      37,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/play/download.png */ 26)
                    ),
                    _i: 37
                  }
                }),
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      38,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/play/comments.png */ 27)
                    ),
                    _i: 38
                  }
                }),
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      39,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/play/share.png */ 28)
                    ),
                    _i: 39
                  }
                }),
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      40,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/play/more.png */ 29)
                    ),
                    _i: 40
                  }
                })
              ]
            ),
            _c(
              "view",
              { staticClass: _vm._$s(41, "sc", "loading"), attrs: { _i: 41 } },
              [
                _c(
                  "text",
                  { staticClass: _vm._$s(42, "sc", "now"), attrs: { _i: 42 } },
                  [_vm._v(_vm._$s(42, "t0-0", _vm._s(_vm.curL)))]
                ),
                _c(
                  "view",
                  {
                    staticClass: _vm._$s(43, "sc", "loading-bar"),
                    attrs: { _i: 43 }
                  },
                  [
                    _c("view", {
                      staticClass: _vm._$s(44, "sc", "pass"),
                      style: _vm._$s(44, "s", { width: _vm.loading + "%" }),
                      attrs: { _i: 44 }
                    }),
                    _c("view", {
                      staticClass: _vm._$s(45, "sc", "in"),
                      attrs: { _i: 45 }
                    })
                  ]
                ),
                _c(
                  "text",
                  { staticClass: _vm._$s(46, "sc", "all"), attrs: { _i: 46 } },
                  [_vm._v(_vm._$s(46, "t0-0", _vm._s(_vm.durL)))]
                )
              ]
            ),
            _c(
              "view",
              {
                staticClass: _vm._$s(47, "sc", "operation"),
                attrs: { _i: 47 }
              },
              [
                _c("image", {
                  staticClass: _vm._$s(48, "sc", "a"),
                  attrs: { _i: 48 }
                }),
                _c("view", [
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(50, "sc", "b"),
                      attrs: { _i: 50 },
                      on: { click: _vm.lastMusic }
                    },
                    [_c("image", { attrs: { _i: 51 } })]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(52, "sc", "c"),
                      attrs: { _i: 52 },
                      on: { click: _vm.pop }
                    },
                    [
                      _c("image", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm._$s(53, "v-show", _vm.ispause),
                            expression: "_$s(53,'v-show',ispause)"
                          }
                        ],
                        attrs: { _i: 53 }
                      }),
                      _c("image", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm._$s(54, "v-show", !_vm.ispause),
                            expression: "_$s(54,'v-show',!ispause)"
                          }
                        ],
                        attrs: { _i: 54 }
                      })
                    ]
                  ),
                  _c(
                    "view",
                    {
                      staticClass: _vm._$s(55, "sc", "b"),
                      attrs: { _i: 55 },
                      on: { click: _vm.nextMusic }
                    },
                    [_c("image", { attrs: { _i: 56 } })]
                  )
                ]),
                _c("image", {
                  staticClass: _vm._$s(57, "sc", "a"),
                  attrs: { _i: 57 }
                })
              ]
            )
          ]
        )
      ],
      1
    )
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-meta.vue?vue&type=template&id=73509b4c& */ 21);
/* harmony import */ var _page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-meta.vue?vue&type=script&lang=js& */ 23);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);

var renderjs




/* normalize component */

var component = Object(_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 21 */
/*!*******************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue?vue&type=template&id=73509b4c& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./page-meta.vue?vue&type=template&id=73509b4c& */ 22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_template_id_73509b4c___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 22 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue?vue&type=template&id=73509b4c& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("view", [_vm._t("default", null, { _i: 1 })], 2)
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 23 */
/*!*************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../babel-loader/lib!../../vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./page-meta.vue?vue&type=script&lang=js& */ 24);
/* harmony import */ var _babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_babel_loader_lib_index_js_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_page_meta_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 24 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/uni-cli-shared/components/page-meta.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0; //
//
//
//
//

var scrolldoneEvent = {
  type: 'scrolldone',
  target: {
    id: '',
    offsetLeft: 0,
    offsetTop: 0,
    dataset: {} },

  currentTarget: {
    id: '',
    offsetLeft: 0,
    offsetTop: 0,
    dataset: {} },

  detail: {} };var _default =


{
  props: {
    backgroundTextStyle: {
      type: String,
      default: 'dark',
      validator: function validator(value) {
        return ['dark', 'light'].indexOf(value) !== -1;
      } },

    backgroundColor: {
      type: String,
      default: '#ffffff' },

    backgroundColorTop: {
      type: String,
      default: '#ffffff' },

    backgroundColorBottom: {
      type: String,
      default: '#ffffff' },

    scrollTop: {
      type: String,
      default: '' },

    scrollDuration: {
      type: Number,
      default: 300 },

    pageStyle: {
      type: String,
      default: '' },

    enablePullDownRefresh: {
      type: [Boolean, String],
      default: false },

    rootFontSize: {
      type: String,
      default: '' } },


  created: function created() {var _this = this;
    var page = getCurrentPages()[0];
    this.$pageVm = page.$vm || page;
    // event
    // h5 暂不支持生命周期 onResize,补充后，可以移除该条件编译






    this.$pageVm.$on('hook:onResize', function (evt) {
      _this.$emit('resize', evt);
    });

    // 父节点一定是 page
    this.$pageVm.$on('hook:onPageScroll', function (evt) {
      _this.$emit('scroll', evt);
    });


    this._currentWebview = page.$getAppWebview();
    if (this.enablePullDownRefresh) {
      this.setPullDownRefresh(this._currentWebview, true);
    }
    this.$watch('enablePullDownRefresh', function (val) {
      _this.setPullDownRefresh(_this._currentWebview, val);
    });


    // props

    this.$watch('backgroundTextStyle', function () {
      _this.setBackgroundTextStyle();
    });
    this.$watch(function () {return [
      _this.rootFontSize,
      _this.pageStyle];},
    function () {
      _this.setPageMeta();
    });
    this.$watch(function () {return [
      _this.backgroundColor,
      _this.backgroundColorTop,
      _this.backgroundColorBottom];},
    function () {
      _this.setBackgroundColor();
    });
    this.$watch(function () {return [
      _this.scrollTop,
      _this.scrollDuration];},
    function () {
      _this.pageScrollTo();
    });
  },
  beforeMount: function beforeMount() {
    this.setBackgroundColor();
    if (this.rootFontSize || this.pageStyle) {
      this.setPageMeta();
    }
    this.backgroundTextStyle && this.setBackgroundTextStyle();
    this.scrollTop && this.pageScrollTo();
  },
  methods: {
    setPullDownRefresh: function setPullDownRefresh(webview, enabled) {
      webview.setStyle({
        pullToRefresh: {
          support: enabled,
          style: plus.os.name === 'Android' ? 'circle' : 'default' } });


    },
    setPageMeta: function setPageMeta() {
      // h5 和 app-plus 设置 rootFontSize

      uni.setPageMeta({
        pageStyle: this.pageStyle,
        rootFontSize: this.rootFontSize });


    },
    setBackgroundTextStyle: function setBackgroundTextStyle() {
      // TODO h5 app-plus 暂不支持





    },
    setBackgroundColor: function setBackgroundColor() {
      // TODO h5 app-plus 暂不支持







    },
    pageScrollTo: function pageScrollTo() {var _this2 = this;
      var scrollTop = String(this.scrollTop);
      if (scrollTop.indexOf('rpx') !== -1) {
        scrollTop = uni.upx2px(scrollTop.replace('rpx', ''));
      }
      scrollTop = parseFloat(scrollTop);
      if (isNaN(scrollTop)) {
        return;
      }
      var pageScrollDone = function pageScrollDone(evt) {
        if (evt.scrollTop === scrollTop) {
          _this2.$pageVm.$off('hook:onPageScroll', pageScrollDone);
          _this2.$emit('scrolldone', scrolldoneEvent);
        }
      };
      uni.pageScrollTo({
        scrollTop: scrollTop,
        duration: this.scrollDuration,
        success: function success() {
          _this2.$pageVm.$on('hook:onPageScroll', pageScrollDone);
        } });

    } } };exports.default = _default;

/***/ }),
/* 25 */
/*!**************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/like.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/like.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvbGlrZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///25\n");

/***/ }),
/* 26 */
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/download.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/download.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvZG93bmxvYWQucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/comments.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/comments.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvY29tbWVudHMucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/share.png ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/share.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvc2hhcmUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!**************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/play/more.png ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/play/more.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXkvbW9yZS5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///29\n");

/***/ }),
/* 30 */
/*!**********************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./play.vue?vue&type=script&lang=js&mpType=page */ 31);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_play_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXV0QixDQUFnQix5dEJBQUcsRUFBQyIsImZpbGUiOiIzMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcGxheS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///30\n");

/***/ }),
/* 31 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/play.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      list: [\n      {\n        mid: [\n        {\n          title: '',\n          singer: '',\n          curl: '' }] }],\n\n\n\n\n      lysic: [\n      {\n        time: 0,\n        text: '' },\n\n      {\n        time: 0,\n        text: '' }],\n\n\n      nowMusic: 0,\n      ispause: true,\n      loading: 0,\n      curL: '00:00',\n      durL: '04:00',\n      other: 0,\n      otherSelect: ['#ffffff', '#abb5bb'],\n      first: '',\n      second: '',\n      nowLine: 1 };\n\n  },\n  methods: {\n    toBack: function toBack() {\n      uni.navigateBack();\n    },\n    initLocalPlayer: function initLocalPlayer() {var _this = this;\n      this.pullPlayer();\n      this.$audio.initPlaying(function () {\n        _this.loading = _this.$audio.getLoading();\n        _this.curL = _this.$audio.getCurrentTime();\n        if (parseFloat(_this.lysic[_this.nowLine].time) <= _this.$audio.Audio.currentTime) {\n          _this.nowLine += 1;\n          _this.first = _this.second;\n          _this.second = _this.lysic[_this.nowLine].text;\n          // console.log(this.lysic[this.nowLine].text);\n        }\n      });\n\n      this.initLysic();\n    },\n    initLysic: function initLysic() {var _this2 = this;\n      this.nowLine = 1;\n      this.first = '';\n      this.second = '';\n      this.lysic = [];\n      uni.request({\n        url: this.list[this.nowMusic].lurl,\n        success: function success(res) {\n          if (res.statusCode == 200) {\n            var rm = res.data; // 获取的是字符串类型的歌词\n            var temp = rm.replace(/(\\n\\[|\\r\\n\\[|\\]|\\[)/g, '$-$').split('$-$');\n            var flag = true;\n            for (var i = 0; i < temp.length; i++) {\n              if (flag) {\n                if (temp[i] == 'offset:0') {\n                  flag = false;\n                  i += 1;\n                }\n              } else\n              {\n                var tt = temp[i].split(':');\n                var ttt = parseInt(tt[0] * 60) + parseFloat(tt[1]);\n                _this2.lysic.push({\n                  time: ttt,\n                  text: temp[i + 1] });\n\n                i += 1;\n              }\n            }\n            _this2.first = _this2.lysic[0].text;\n            _this2.second = _this2.lysic[1].text;\n            __f__(\"log\", _this2.lysic, \" at pages/index/play.vue:169\");\n            return;\n          }\n          __f__(\"log\", 'err', res, \" at pages/index/play.vue:172\");\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at pages/index/play.vue:175\");\n        } });\n\n    },\n    // 同步播放器信息\n    pullPlayer: function pullPlayer() {\n      this.list = this.$audio.musiclist;\n      this.ispause = this.$audio.getPaused();\n      this.nowMusic = this.$audio.index;\n      this.loading = this.$audio.getLoading();\n      this.curL = this.$audio.getCurrentTime();\n\n    },\n    playMusic: function playMusic() {\n      this.$audio.play();\n      this.ispause = this.$audio.getPaused();\n    },\n    pauseMusic: function pauseMusic() {\n      this.$audio.pause();\n      this.ispause = this.$audio.getPaused();\n    },\n    pop: function pop() {\n      if (this.ispause) {\n        this.playMusic();\n      } else\n      {\n        this.pauseMusic();\n      }\n    },\n    nextMusic: function nextMusic() {\n      this.$audio.toNextMusic();\n      __f__(\"log\", 'tghisasfs', this.nowMusic, \" at pages/index/play.vue:206\");\n      this.pullPlayer();\n      __f__(\"log\", 'tghisasfs', this.nowMusic, \" at pages/index/play.vue:208\");\n      this.initLysic();\n    },\n    lastMusic: function lastMusic() {\n      this.$audio.toLastMusic();\n      this.pullPlayer();\n      this.initLysic();\n    } },\n\n  mounted: function mounted() {var _this3 = this;\n    this.initLocalPlayer();\n    this.$audio.initCanPlaying(function () {\n      _this3.durL = _this3.$audio.getDuration();\n    });\n  },\n  onShow: function onShow() {\n    this.pullPlayer();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcGxheS52dWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtGQTtBQUNBLE1BREEsa0JBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQTtBQUdBLGtCQUhBLEVBREEsQ0FEQSxFQURBLENBREE7Ozs7O0FBWUE7QUFDQTtBQUNBLGVBREE7QUFFQSxnQkFGQSxFQURBOztBQUtBO0FBQ0EsZUFEQTtBQUVBLGdCQUZBLEVBTEEsQ0FaQTs7O0FBc0JBLGlCQXRCQTtBQXVCQSxtQkF2QkE7QUF3QkEsZ0JBeEJBO0FBeUJBLG1CQXpCQTtBQTBCQSxtQkExQkE7QUEyQkEsY0EzQkE7QUE0QkEseUNBNUJBO0FBNkJBLGVBN0JBO0FBOEJBLGdCQTlCQTtBQStCQSxnQkEvQkE7O0FBaUNBLEdBbkNBO0FBb0NBO0FBQ0EsVUFEQSxvQkFDQTtBQUNBO0FBQ0EsS0FIQTtBQUlBLG1CQUpBLDZCQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVRBOztBQVdBO0FBQ0EsS0FsQkE7QUFtQkEsYUFuQkEsdUJBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQURBO0FBRUE7QUFDQTtBQUNBLDhCQURBLENBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFMQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBREE7QUFFQSxtQ0FGQTs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQTlCQTtBQStCQSxZQS9CQSxnQkErQkEsR0EvQkEsRUErQkE7QUFDQTtBQUNBLFNBakNBOztBQW1DQSxLQTNEQTtBQTREQTtBQUNBLGNBN0RBLHdCQTZEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsS0FwRUE7QUFxRUEsYUFyRUEsdUJBcUVBO0FBQ0E7QUFDQTtBQUNBLEtBeEVBO0FBeUVBLGNBekVBLHdCQXlFQTtBQUNBO0FBQ0E7QUFDQSxLQTVFQTtBQTZFQSxPQTdFQSxpQkE2RUE7QUFDQTtBQUNBO0FBQ0EsT0FGQTtBQUdBO0FBQ0E7QUFDQTtBQUNBLEtBcEZBO0FBcUZBLGFBckZBLHVCQXFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTNGQTtBQTRGQSxhQTVGQSx1QkE0RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQWhHQSxFQXBDQTs7QUFzSUEsU0F0SUEscUJBc0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FGQTtBQUdBLEdBM0lBO0FBNElBLFFBNUlBLG9CQTRJQTtBQUNBO0FBQ0EsR0E5SUEsRSIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDxwYWdlLW1ldGE+PC9wYWdlLW1ldGE+XHJcbiAgICA8aW1hZ2UgY2xhc3M9XCJiZzFcIiA6c3JjPVwibGlzdFtub3dNdXNpY10uY3VybFwiPjwvaW1hZ2U+XHJcbiAgICA8dmlldyBjbGFzcz1cImJnMlwiPjwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwic3RhdHVzX2JhclwiPlxyXG4gICAgICA8IS0tIOi/memHjOaYr+eKtuaAgeagjyAtLT5cclxuICAgIDwvdmlldz5cclxuICAgIDx2aWV3IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm5hdmlnYXRlYmFyXCI+XHJcbiAgICAgICAgPGltYWdlIGNsYXNzPVwiYmFja1wiIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvYmFjay5wbmdcIiBAY2xpY2s9XCJ0b0JhY2tcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0IGNsYXNzPVwibS1uYW1lXCI+e3sgbGlzdFtub3dNdXNpY10udGl0bGUgfX08L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJtLXNpbmdlclwiPjx0ZXh0Pnt7IGxpc3Rbbm93TXVzaWNdLnNpbmdlciB9fTwvdGV4dD48L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibS1lZmZlY3RcIj5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDx0ZXh0Puagh+WHhjwvdGV4dD5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL3BpYy9wbGF5L2Rvd24ucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8dGV4dD7pn7PmlYg8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPHRleHQ+5bCB6Z2iPC90ZXh0PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvZG93bi5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cIm0tY292ZXJcIj5cclxuICAgICAgICA8aW1hZ2UgY2xhc3M9XCJhbnBsYXlcIiA6c3JjPVwibGlzdFtub3dNdXNpY10uY3VybFwiIDpjbGFzcz1cInthbnBhdXNlOiBpc3BhdXNlfVwiPjwvaW1hZ2U+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJtLWx5cmljXCI+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2U+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pnt7IGZpcnN0IH19PC90ZXh0PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvbWljcm8ucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2U+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pnt7IHNlY29uZCB9fTwvdGV4dD5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIvc3RhdGljL3BpYy9wbGF5L25vdGUucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJpcy1zaW5nXCI+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJzaW5nXCIgOnN0eWxlPVwiJ2JhY2tncm91bmQtY29sb3I6JytvdGhlclNlbGVjdFtvdGhlcl1cIj48L3ZpZXc+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJvdGhlclwiICA6c3R5bGU9XCInYmFja2dyb3VuZC1jb2xvcjonK290aGVyU2VsZWN0WzEtb3RoZXJdXCI+PC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwiaW50ZXJhY3RpdmVcIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5L2xpa2UucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5L2Rvd25sb2FkLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheS9jb21tZW50cy5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXkvc2hhcmUucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5L21vcmUucG5nXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cImxvYWRpbmdcIj5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cIm5vd1wiPnt7IGN1ckwgfX08L3RleHQ+XHJcbiAgICAgICAgPHZpZXcgY2xhc3M9XCJsb2FkaW5nLWJhclwiPlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJwYXNzXCIgOnN0eWxlPVwie3dpZHRoOiBsb2FkaW5nKyclJ31cIj48L3ZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImluXCI+PC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dGV4dCBjbGFzcz1cImFsbFwiPnt7IGR1ckwgfX08L3RleHQ+XHJcbiAgICAgIDwvdmlldz5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJvcGVyYXRpb25cIj5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9wbGF5d2F5LnBuZ1wiIGNsYXNzPVwiYVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImJcIiBAY2xpY2s9XCJsYXN0TXVzaWNcIj5cclxuICAgICAgICAgICAgPGltYWdlIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvbGFzdC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJjXCIgQGNsaWNrPVwicG9wXCI+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LXNob3c9XCJpc3BhdXNlXCIgc3JjPVwiL3N0YXRpYy9waWMvcGxheS9wbGF5LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LXNob3c9XCIhaXNwYXVzZVwiIHNyYz1cIi9zdGF0aWMvcGljL3BsYXkvcGF1c2UucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwiYlwiIEBjbGljaz1cIm5leHRNdXNpY1wiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9uZXh0LnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8L3ZpZXc+ICAgICAgICAgIFxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiL3N0YXRpYy9waWMvcGxheS9kZXRhaWwucG5nXCIgY2xhc3M9XCJhXCI+PC9pbWFnZT5cclxuICAgICAgPC92aWV3PlxyXG4gICAgPC92aWV3PlxyXG4gIDwvdmlldz5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0OltcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbWlkOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2luZ2VyOiAnJyxcclxuICAgICAgICAgICAgICAgIGN1cmw6ICcnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBseXNpYzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0aW1lOiAwLFxyXG4gICAgICAgICAgICB0ZXh0OiAnJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdGltZTogMCxcclxuICAgICAgICAgICAgdGV4dDogJydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBub3dNdXNpYzogMCxcclxuICAgICAgICBpc3BhdXNlOiB0cnVlLFxyXG4gICAgICAgIGxvYWRpbmc6IDAsXHJcbiAgICAgICAgY3VyTDogJzAwOjAwJyxcclxuICAgICAgICBkdXJMOiAnMDQ6MDAnLFxyXG4gICAgICAgIG90aGVyOiAwLFxyXG4gICAgICAgIG90aGVyU2VsZWN0OiBbJyNmZmZmZmYnLCcjYWJiNWJiJ10sXHJcbiAgICAgICAgZmlyc3Q6ICcnLFxyXG4gICAgICAgIHNlY29uZDogJycsXHJcbiAgICAgICAgbm93TGluZTogMSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICB0b0JhY2soKSB7XHJcbiAgICAgICAgdW5pLm5hdmlnYXRlQmFjaygpO1xyXG4gICAgICB9LFxyXG4gICAgICBpbml0TG9jYWxQbGF5ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5wdWxsUGxheWVyKCk7XHJcbiAgICAgICAgdGhpcy4kYXVkaW8uaW5pdFBsYXlpbmcoKCk9PntcclxuICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRoaXMuJGF1ZGlvLmdldExvYWRpbmcoKTtcclxuICAgICAgICAgIHRoaXMuY3VyTCA9IHRoaXMuJGF1ZGlvLmdldEN1cnJlbnRUaW1lKCk7XHJcbiAgICAgICAgICBpZihwYXJzZUZsb2F0KHRoaXMubHlzaWNbdGhpcy5ub3dMaW5lXS50aW1lKSA8PSB0aGlzLiRhdWRpby5BdWRpby5jdXJyZW50VGltZSl7XHJcbiAgICAgICAgICAgIHRoaXMubm93TGluZSs9MTtcclxuICAgICAgICAgICAgdGhpcy5maXJzdCA9IHRoaXMuc2Vjb25kO1xyXG4gICAgICAgICAgICB0aGlzLnNlY29uZCA9IHRoaXMubHlzaWNbdGhpcy5ub3dMaW5lXS50ZXh0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmx5c2ljW3RoaXMubm93TGluZV0udGV4dCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pbml0THlzaWMoKTtcclxuICAgICAgfSxcclxuICAgICAgaW5pdEx5c2ljKCl7XHJcbiAgICAgICAgdGhpcy5ub3dMaW5lID0gMTtcclxuICAgICAgICB0aGlzLmZpcnN0PScnO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kPScnO1xyXG4gICAgICAgIHRoaXMubHlzaWM9W107XHJcbiAgICAgICAgdW5pLnJlcXVlc3Qoe1xyXG4gICAgICAgICAgdXJsOiB0aGlzLmxpc3RbdGhpcy5ub3dNdXNpY10ubHVybCxcclxuICAgICAgICAgIHN1Y2Nlc3M6KHJlcyk9PntcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1c0NvZGUgPT0gMjAwKXtcclxuICAgICAgICAgICAgICBjb25zdCBybSA9IHJlcy5kYXRhOy8vIOiOt+WPlueahOaYr+Wtl+espuS4suexu+Wei+eahOatjOivjVxyXG4gICAgICAgICAgICAgIGNvbnN0IHRlbXAgPSBybS5yZXBsYWNlKC8oXFxuXFxbfFxcclxcblxcW3xcXF18XFxbKS9nLCckLSQnKS5zcGxpdCgnJC0kJyk7XHJcbiAgICAgICAgICAgICAgbGV0IGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGVtcC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICAgIGlmKGZsYWcpe1xyXG4gICAgICAgICAgICAgICAgICBpZih0ZW1wW2ldID09ICdvZmZzZXQ6MCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWc9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgaSs9MTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgICAgY29uc3QgdHQgPSB0ZW1wW2ldLnNwbGl0KCc6Jyk7XHJcbiAgICAgICAgICAgICAgICAgIGxldCB0dHQgPSBwYXJzZUludCh0dFswXSo2MCkgKyBwYXJzZUZsb2F0KHR0WzFdKTsgXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubHlzaWMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogdHR0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRlbXBbaSsxXVxyXG4gICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgaSs9MTtcclxuICAgICAgICAgICAgICAgIH0gICAgXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIHRoaXMuZmlyc3QgPSB0aGlzLmx5c2ljWzBdLnRleHQ7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSB0aGlzLmx5c2ljWzFdLnRleHQ7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5seXNpYyk7XHJcbiAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnInLHJlcyk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZmFpbChlcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvLyDlkIzmraXmkq3mlL7lmajkv6Hmga9cclxuICAgICAgcHVsbFBsYXllcigpe1xyXG4gICAgICAgIHRoaXMubGlzdCA9IHRoaXMuJGF1ZGlvLm11c2ljbGlzdDtcclxuICAgICAgICB0aGlzLmlzcGF1c2UgPSB0aGlzLiRhdWRpby5nZXRQYXVzZWQoKTtcclxuICAgICAgICB0aGlzLm5vd011c2ljID0gdGhpcy4kYXVkaW8uaW5kZXg7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gdGhpcy4kYXVkaW8uZ2V0TG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMuY3VyTCA9IHRoaXMuJGF1ZGlvLmdldEN1cnJlbnRUaW1lKCk7IFxyXG4gICAgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBwbGF5TXVzaWMoKXsgICAgICAgIFxyXG4gICAgICAgIHRoaXMuJGF1ZGlvLnBsYXkoKTtcclxuICAgICAgICB0aGlzLmlzcGF1c2UgPSB0aGlzLiRhdWRpby5nZXRQYXVzZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgcGF1c2VNdXNpYygpeyAgXHJcbiAgICAgICAgdGhpcy4kYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmlzcGF1c2UgPSB0aGlzLiRhdWRpby5nZXRQYXVzZWQoKTtcclxuICAgICAgfSxcclxuICAgICAgcG9wKCl7XHJcbiAgICAgICAgaWYodGhpcy5pc3BhdXNlKXsgICAgICAgICBcclxuICAgICAgICAgIHRoaXMucGxheU11c2ljKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2V7XHJcbiAgICAgICAgICB0aGlzLnBhdXNlTXVzaWMoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG5leHRNdXNpYygpe1xyXG4gICAgICAgIHRoaXMuJGF1ZGlvLnRvTmV4dE11c2ljKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RnaGlzYXNmcycsdGhpcy5ub3dNdXNpYyk7XHJcbiAgICAgICAgdGhpcy5wdWxsUGxheWVyKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3RnaGlzYXNmcycsdGhpcy5ub3dNdXNpYyk7XHJcbiAgICAgICAgdGhpcy5pbml0THlzaWMoKTsgICAgIFxyXG4gICAgICB9LFxyXG4gICAgICBsYXN0TXVzaWMoKXtcclxuICAgICAgICB0aGlzLiRhdWRpby50b0xhc3RNdXNpYygpO1xyXG4gICAgICAgIHRoaXMucHVsbFBsYXllcigpO1xyXG4gICAgICAgIHRoaXMuaW5pdEx5c2ljKCk7ICBcclxuICAgICAgfSAgICAgXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHsgXHJcbiAgICAgIHRoaXMuaW5pdExvY2FsUGxheWVyKCk7XHJcbiAgICAgIHRoaXMuJGF1ZGlvLmluaXRDYW5QbGF5aW5nKCgpPT57XHJcbiAgICAgICAgdGhpcy5kdXJMID0gdGhpcy4kYXVkaW8uZ2V0RHVyYXRpb24oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICB0aGlzLnB1bGxQbGF5ZXIoKTtcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIEBpbXBvcnQgJ35AL3Rvb2wuc2Nzcyc7XHJcbiAgLmJnMSB7XHJcbiAgICAvLyDnrKzkuIDlsYLog4zmma/vvIzlsIHpnaLmqKHns4pcclxuICAgIEBleHRlbmQgLmktZmlsbC1jb250YWluZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogLTI7XHJcbiAgICBmaWx0ZXI6IGJsdXIoOHB4KTtcclxuICB9XHJcbiAgLmJnMiB7XHJcbiAgICAvLyDnrKzkuozlsYLog4zmma/vvIzkuK3pl7TlkJHkuIrkuIvmuJDlj5hcclxuICAgIEBleHRlbmQgLmktZmlsbC1jb250YWluZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IGF1dG87XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgei1pbmRleDogLTE7ICAgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2JhKDQxLDY2LDEwMiwxKSAwJSwgcmdiYSg0Miw1OCw1OCwwLjMzKSA1MCUsIHJnYmEoNDcsNjMsNjMsMSkgMTAwJSk7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIGZvbnQtZmFtaWx5OiAn5Y2O5paH5qW35L2TJztcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gIH1cclxuICAubmF2aWdhdGViYXIge1xyXG4gICAgaGVpZ2h0OiA1My4zM3B4O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgXHJcbiAgICAuYmFjayB7XHJcbiAgICAgIHdpZHRoOiAxMC4zM3B4OyBoZWlnaHQ6IDE5LjY2cHg7XHJcbiAgICAgIG1hcmdpbjogMHB4IDEyLjMzcHg7XHJcbiAgICB9XHJcbiAgICAubS1uYW1lIHtcclxuICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICAgIEBleHRlbmQgLmktdGV4dC1vbWl0LWxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLXNpbmdlciB7XHJcbiAgICBoZWlnaHQ6IDIwLjMzcHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMC45NnJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDExLjMzcHg7XHJcblxyXG4gICAgJjo6YWZ0ZXIsICY6OmJlZm9yZXtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZDogI2IzYjViNDtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIHdpZHRoOiA1JTtcclxuICAgIH1cclxuICB9XHJcbiAgLm0tZWZmZWN0IHtcclxuICAgIHdpZHRoOiA0MCU7IGhlaWdodDogMjlweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1iZXR3ZWVuLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgXHJcbiAgICB2aWV3IHtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgI0ZGRkZGRjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgfVxyXG4gICAgdGV4dCB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMC45NnJlbTtcclxuICAgIH1cclxuICAgIGltYWdlIHtcclxuICAgICAgd2lkdGg6IDZweDsgaGVpZ2h0OiA2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLWNvdmVyIHtcclxuICAgIGhlaWdodDogMjgyLjY2cHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWNlbnRlciwgLmktcm93LXZlcnRpY2FsLWNlbnRlcjtcclxuICAgIFxyXG4gICAgaW1hZ2Uge1xyXG4gICAgICB3aWR0aDogMjYycHg7IGhlaWdodDogMjYycHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgLyog6L+Z6YeM6ZyA6KaB5qC55o2u6IOM5pmv5Y+Y5YyWICovXHJcbiAgICAgIGJvcmRlcjogNHB4IHNvbGlkICM0ODQ4Mzc7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tLWx5cmljIHtcclxuICAgIGhlaWdodDogNjguNjZweDtcclxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgQGV4dGVuZCAuaS1jb2wtaG9yaXpvbnRhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIHZpZXcge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQ7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7IGhlaWdodDogMThweDtcclxuICAgICAgfSAgICAgXHJcbiAgICAgIHRleHQge1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLmlzLXNpbmcge1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgIHZpZXcge1xyXG4gICAgICB3aWR0aDogNnB4OyBoZWlnaHQ6NnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIG1hcmdpbjogMHB4IDJweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmludGVyYWN0aXZlIHtcclxuICAgIGhlaWdodDogMzEuMzNweDtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kO1xyXG4gICAgXHJcbiAgICBpbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxOC42NnB4OyBoZWlnaHQ6IDE4LjY2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sb2FkaW5nIHtcclxuICAgIGhlaWdodDogMjlweDtcclxuICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgXHJcbiAgICB0ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAwLjZyZW07XHJcbiAgICB9XHJcbiAgICAubG9hZGluZy1iYXIge1xyXG4gICAgICB3aWR0aDogNjAlOyBoZWlnaHQ6IDFweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2I2YjJjYjtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgLnBhc3N7XHJcbiAgICAgICAgd2lkdGg6IDUwJTsgaGVpZ2h0OiAxcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTBmMztcclxuICAgICAgfSAgICAgXHJcbiAgICAgIC5pbntcclxuICAgICAgICB3aWR0aDogNnB4OyBoZWlnaHQ6IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAgICAgfSAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG4gIC5vcGVyYXRpb24ge1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBcclxuICAgID4gdmlldyB7XHJcbiAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgfVxyXG4gICAgLmEge1xyXG4gICAgICB3aWR0aDogMjBweDsgaGVpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLmIge1xyXG4gICAgICB3aWR0aDogNDhweDsgaGVpZ2h0OiA0OHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3QUZGO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIEBleHRlbmQgLmktcm93LWhvcml6b250YWwtYXJvdW5kLCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgICBcclxuICAgICAgaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxNnB4OyBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICB9XHJcbiAgICAuYyB7XHJcbiAgICAgIHdpZHRoOiA3MnB4OyBoZWlnaHQ6IDcycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdBRkY7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!**************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?mpType=page ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page */ 33);\n/* harmony import */ var _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playlist.vue?vue&type=script&lang=js&mpType=page */ 42);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  \"7e786e10\",\n  null,\n  false,\n  _playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/playlist.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNEk7QUFDNUk7QUFDdUU7QUFDTDs7O0FBR2xFO0FBQzhNO0FBQzlNLGdCQUFnQixrTkFBVTtBQUMxQixFQUFFLHlGQUFNO0FBQ1IsRUFBRSwwR0FBTTtBQUNSLEVBQUUsbUhBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsOEdBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ZTc4NmUxMCZzY29wZWQ9dHJ1ZSZtcFR5cGU9cGFnZVwiXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcGxheWxpc3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdlNzg2ZTEwXCIsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInBhZ2VzL2luZGV4L3BsYXlsaXN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!********************************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist.vue?vue&type=template&id=7e786e10&scoped=true&mpType=page */ 34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_template_id_7e786e10_scoped_true_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 34 */
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
                    __webpack_require__(/*! ../../static/pic/playlist/search.png */ 35)
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
                    __webpack_require__(/*! ../../static/pic/playlist/selector.png */ 36)
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
            _vm._l(_vm._$s(15, "f", { forItems: _vm.list }), function(
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
                      _c("image", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm._$s(
                              "17-" + $30,
                              "v-show",
                              _vm.nowMusic == index ? !_vm.ispause : false
                            ),
                            expression:
                              "_$s((\"17-\"+$30),'v-show',nowMusic==index?!ispause:false)"
                          }
                        ],
                        attrs: { _i: "17-" + $30 },
                        on: {
                          click: function($event) {
                            return _vm.pauset(index)
                          }
                        }
                      }),
                      _c("image", {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm._$s(
                              "18-" + $30,
                              "v-show",
                              _vm.nowMusic == index ? _vm.ispause : true
                            ),
                            expression:
                              "_$s((\"18-\"+$30),'v-show',nowMusic==index?ispause:true)"
                          }
                        ],
                        attrs: { _i: "18-" + $30 },
                        on: {
                          click: function($event) {
                            return _vm.playt(index)
                          }
                        }
                      })
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
              _c("view", { attrs: { _i: 26 }, on: { click: _vm.toBack } }, [
                _c("image", {
                  attrs: {
                    src: _vm._$s(
                      27,
                      "a-src",
                      __webpack_require__(/*! ../../static/pic/playlist/music.png */ 37)
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
                      __webpack_require__(/*! ../../static/pic/playlist/listen.png */ 38)
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
                      __webpack_require__(/*! ../../static/pic/playlist/more.png */ 39)
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
                      __webpack_require__(/*! ../../static/pic/playlist/mv.png */ 40)
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
                      __webpack_require__(/*! ../../static/pic/playlist/personal.png */ 41)
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
/* 35 */
/*!********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/search.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/search.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM1LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L3NlYXJjaC5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/selector.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/selector.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM2LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L3NlbGVjdG9yLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ }),
/* 37 */
/*!*******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/music.png ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/music.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM3LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L211c2ljLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///37\n");

/***/ }),
/* 38 */
/*!********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/listen.png ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/listen.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM4LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L2xpc3Rlbi5wbmdcIjsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///38\n");

/***/ }),
/* 39 */
/*!******************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/more.png ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/more.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjM5LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L21vcmUucG5nXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///39\n");

/***/ }),
/* 40 */
/*!****************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/mv.png ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/mv.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L212LnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///40\n");

/***/ }),
/* 41 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/static/pic/playlist/personal.png ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"/static/pic/playlist/personal.png\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6IjQxLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSBcIi9zdGF0aWMvcGljL3BsYXlsaXN0L3BlcnNvbmFsLnBuZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///41\n");

/***/ }),
/* 42 */
/*!**************************************************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=script&lang=js&mpType=page ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./playlist.vue?vue&type=script&lang=js&mpType=page */ 43);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_playlist_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJ0QixDQUFnQiw2dEJBQUcsRUFBQyIsImZpbGUiOiI0Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wbGF5bGlzdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BsYXlsaXN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZtcFR5cGU9cGFnZVwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///42\n");

/***/ }),
/* 43 */
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages/index/playlist.vue?vue&type=script&lang=js&mpType=page ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default =\n{\n  data: function data() {\n    return {\n      list: [],\n      ispause: this.$audio.Audio.paused,\n      nowMusic: this.$audio.index };\n\n  },\n  methods: {\n    toBack: function toBack() {\n      uni.navigateBack();\n    },\n    // 同步播放器信息\n    pullPlayer: function pullPlayer() {\n      this.list = this.$audio.musiclist;\n      this.ispause = this.$audio.getPaused();\n      this.nowMusic = this.$audio.index;\n    },\n    playt: function playt(id) {\n      __f__(\"log\", id, \" at pages/index/playlist.vue:84\");\n      this.$audio.initMusic(id);\n      this.$audio.play();\n      this.ispause = this.$audio.getPaused();\n      this.nowMusic = this.$audio.index;\n    },\n    pauset: function pauset(id) {\n      __f__(\"log\", id, \" at pages/index/playlist.vue:91\");\n      this.$audio.pause();\n      this.ispause = this.$audio.getPaused();\n      this.nowMusic = this.$audio.index;\n    } },\n\n  mounted: function mounted() {},\n  onShow: function onShow() {\n    this.pullPlayer();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvcGxheWxpc3QudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFDQSxNQURBLGtCQUNBO0FBQ0E7QUFDQSxjQURBO0FBRUEsdUNBRkE7QUFHQSxpQ0FIQTs7QUFLQSxHQVBBO0FBUUE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQSxLQUhBO0FBSUE7QUFDQSxjQUxBLHdCQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FUQTtBQVVBLFNBVkEsaUJBVUEsRUFWQSxFQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBaEJBO0FBaUJBLFVBakJBLGtCQWlCQSxFQWpCQSxFQWlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0F0QkEsRUFSQTs7QUFnQ0EsU0FoQ0EscUJBZ0NBLEVBaENBO0FBaUNBLFFBakNBLG9CQWlDQTtBQUNBO0FBQ0EsR0FuQ0EsRSIsImZpbGUiOiI0My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8dmlldyBjbGFzcz1cIm1haW5cIj5cclxuICAgIDx2aWV3IGNsYXNzPVwiYmdcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/og4zmma/lm74gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cInN0YXR1c19iYXJcIj5cclxuICAgICAgPCEtLSDov5nph4zmmK/nirbmgIHmoI8gLS0+XHJcbiAgICA8L3ZpZXc+XHJcbiAgICA8dmlldyBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgPHZpZXcgY2xhc3M9XCJuYXZpZ2F0ZWJhclwiPlxyXG4gICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXlsaXN0L3NlYXJjaC5wbmdcIj48L2ltYWdlPlxyXG4gICAgICAgIDx0ZXh0PuacgOi/kTwvdGV4dD5cclxuICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9zZWxlY3Rvci5wbmdcIj48L2ltYWdlPlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwicmFuay13YXlcIj5cclxuICAgICAgICA8dGV4dD7ljZXmm7I8L3RleHQ+XHJcbiAgICAgICAgPHRleHQ+5LiT6L6RPC90ZXh0PlxyXG4gICAgICAgIDx0ZXh0PuivpuaDhTwvdGV4dD5cclxuICAgICAgICA8dGV4dD7mrYzor408L3RleHQ+XHJcbiAgICAgICAgPHRleHQ+5q2M6K+N5pysPC90ZXh0PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICAgIDx2aWV3IGNsYXNzPVwibXVzaWMtbGlzdFwiPlxyXG4gICAgICAgIDx2aWV3IGNsYXNzPVwibXVzaWMtaXRlbVwiIHYtZm9yPVwiaXRlbSxpbmRleCBpbiBsaXN0XCI+XHJcbiAgICAgICAgICA8dmlldyBjbGFzcz1cImlzcGxheVwiPlxyXG4gICAgICAgICAgICA8aW1hZ2Ugdi1zaG93PVwibm93TXVzaWM9PWluZGV4PyFpc3BhdXNlOmZhbHNlXCIgc3JjPVwiL3N0YXRpYy9waWMvcGxheWxpc3QvcGF1c2UucG5nXCIgQGNsaWNrPVwicGF1c2V0KGluZGV4KVwiPjwvaW1hZ2U+XHJcbiAgICAgICAgICAgIDxpbWFnZSB2LXNob3c9XCJub3dNdXNpYz09aW5kZXg/aXNwYXVzZTp0cnVlXCIgc3JjPVwiL3N0YXRpYy9waWMvcGxheWxpc3QvcGxheS5wbmdcIiBAY2xpY2s9XCJwbGF5dChpbmRleClcIj48L2ltYWdlPlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgICAgPHZpZXcgY2xhc3M9XCJpbmZvclwiPlxyXG4gICAgICAgICAgICA8dGV4dCBjbGFzcz1cInRpdGxlXCI+e3sgaXRlbS50aXRsZSB9fTwvdGV4dD5cclxuICAgICAgICAgICAgPHRleHQgY2xhc3M9XCJzaW5nZXJcIj57eyBpdGVtLnNpbmdlciB9fTwvdGV4dD5cclxuICAgICAgICAgIDwvdmlldz5cclxuICAgICAgICAgIDx2aWV3IGNsYXNzPVwibGVuZ3RoXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0Pnt7IGl0ZW0ubGVuZ3RoIH19PC90ZXh0PlxyXG4gICAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgPC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInRhYmJhci1zZWF0XCI+PC92aWV3PlxyXG4gICAgICA8dmlldyBjbGFzcz1cInRhYmJhclwiPlxyXG4gICAgICAgIDx2aWV3IEBjbGljaz1cInRvQmFja1wiPlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheWxpc3QvbXVzaWMucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pumfs+S5kDwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9saXN0ZW4ucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0Pumfs+S5kOmmhjwvdGV4dD5cclxuICAgICAgICA8L3ZpZXc+XHJcbiAgICAgICAgPHZpZXc+XHJcbiAgICAgICAgICA8aW1hZ2Ugc3JjPVwiLi4vLi4vc3RhdGljL3BpYy9wbGF5bGlzdC9tb3JlLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7pn7PkuZDliIbnsbs8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICAgIDx2aWV3PlxyXG4gICAgICAgICAgPGltYWdlIHNyYz1cIi4uLy4uL3N0YXRpYy9waWMvcGxheWxpc3QvbXYucG5nXCI+PC9pbWFnZT5cclxuICAgICAgICAgIDx0ZXh0PuaIkeeahG12PC90ZXh0PlxyXG4gICAgICAgIDwvdmlldz5cclxuICAgICAgICA8dmlldz5cclxuICAgICAgICAgIDxpbWFnZSBzcmM9XCIuLi8uLi9zdGF0aWMvcGljL3BsYXlsaXN0L3BlcnNvbmFsLnBuZ1wiPjwvaW1hZ2U+XHJcbiAgICAgICAgICA8dGV4dD7kuKrkurrkuK3lv4M8L3RleHQ+XHJcbiAgICAgICAgPC92aWV3PlxyXG4gICAgICA8L3ZpZXc+XHJcbiAgICA8L3ZpZXc+XHJcbiAgPC92aWV3PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGlzcGF1c2U6IHRoaXMuJGF1ZGlvLkF1ZGlvLnBhdXNlZCxcclxuICAgICAgICBub3dNdXNpYzogdGhpcy4kYXVkaW8uaW5kZXgsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOntcclxuICAgICAgdG9CYWNrKCkge1xyXG4gICAgICAgIHVuaS5uYXZpZ2F0ZUJhY2soKTtcclxuICAgICAgfSxcclxuICAgICAgLy8g5ZCM5q2l5pKt5pS+5Zmo5L+h5oGvXHJcbiAgICAgIHB1bGxQbGF5ZXIoKXtcclxuICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLiRhdWRpby5tdXNpY2xpc3Q7XHJcbiAgICAgICAgdGhpcy5pc3BhdXNlID0gdGhpcy4kYXVkaW8uZ2V0UGF1c2VkKCk7XHJcbiAgICAgICAgdGhpcy5ub3dNdXNpYyA9IHRoaXMuJGF1ZGlvLmluZGV4O1xyXG4gICAgICB9LFxyXG4gICAgICBwbGF5dChpZCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgICAgIHRoaXMuJGF1ZGlvLmluaXRNdXNpYyhpZCk7XHJcbiAgICAgICAgdGhpcy4kYXVkaW8ucGxheSgpO1xyXG4gICAgICAgIHRoaXMuaXNwYXVzZSA9IHRoaXMuJGF1ZGlvLmdldFBhdXNlZCgpO1xyXG4gICAgICAgIHRoaXMubm93TXVzaWMgPSB0aGlzLiRhdWRpby5pbmRleDtcclxuICAgICAgfSxcclxuICAgICAgcGF1c2V0KGlkKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhpZCk7XHJcbiAgICAgICAgdGhpcy4kYXVkaW8ucGF1c2UoKTtcclxuICAgICAgICB0aGlzLmlzcGF1c2UgPSB0aGlzLiRhdWRpby5nZXRQYXVzZWQoKTtcclxuICAgICAgICB0aGlzLm5vd011c2ljID0gdGhpcy4kYXVkaW8uaW5kZXg7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge30sXHJcbiAgICBvblNob3coKSB7XHJcbiAgICAgIHRoaXMucHVsbFBsYXllcigpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCAnfkAvdG9vbC5zY3NzJztcclxuICAkYmdpOiAnL3N0YXRpYy9waWMvcGxheWxpc3QvYmdpLmpwZyc7XHJcbiAgLmJnIHtcclxuICAgIEBpbmNsdWRlIGktYmFja2dyb3VuZC1hcHAoJGJnaSk7XHJcbiAgfVxyXG4gIC5jb250ZW50IHtcclxuICAgIC8qIOWtmOaUvuaVtOS9k+mhtemdouS/oeaBryAqL1xyXG4gICAgZm9udC1mYW1pbHk6ICfljY7mlofmpbfkvZMnO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgfVxyXG4gIC5uYXZpZ2F0ZWJhciB7XHJcbiAgICBoZWlnaHQ6IDkxcHg7XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWJldHdlZW4sIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICBtYXJnaW46IDBweCAxOXB4IDE2cHg7XHJcbiAgICBcclxuICAgIGltYWdlIHtcclxuICAgICAgd2lkdGg6IDE1cHg7IGhlaWdodDogMTVweDtcclxuICAgIH1cclxuICAgIHRleHQge1xyXG4gICAgICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yYW5rLXdheSB7XHJcbiAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICBmb250LXNpemU6IDAuODRyZW07XHJcbiAgICBAZXh0ZW5kIC5pLXJvdy1ob3Jpem9udGFsLWFyb3VuZDtcclxuICB9XHJcbiAgLm11c2ljLWl0ZW0ge1xyXG4gICAgaGVpZ2h0OiA5MHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjNzI3YTkwO1xyXG4gICAgQGV4dGVuZCAuaS1yb3c7XHJcbiAgICBcclxuICAgIC5pc3BsYXkge1xyXG4gICAgICB3aWR0aDogOTFweDtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1jZW50ZXIsIC5pLXJvdy12ZXJ0aWNhbC1jZW50ZXI7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDQwcHg7IGhlaWdodDogNDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmluZm9yIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIEBleHRlbmQgLmktY29sLXZlcnRpY2FsLWNlbnRlcjtcclxuICAgICAgXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjg0cmVtO1xyXG4gICAgICB9XHJcbiAgICAgIC5zaW5nZXIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC41NHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxlbmd0aCB7XHJcbiAgICAgIHdpZHRoOiA5MnB4O1xyXG4gICAgICBmb250LXNpemU6IDAuNXJlbTtcclxuICAgICAgQGV4dGVuZCAuaS1yb3ctdmVydGljYWwtY2VudGVyO1xyXG4gICAgfVxyXG4gIH1cclxuICAudGFiYmFyLXNlYXQge1xyXG4gICAgd2lkdGg6IDEwMCU7IGhlaWdodDogNThweDtcclxuICB9XHJcbiAgLnRhYmJhciB7XHJcbiAgICB3aWR0aDogMTAwJTsgaGVpZ2h0OiA1OHB4O1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNTFmMjg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgQGV4dGVuZCAuaS1yb3ctaG9yaXpvbnRhbC1hcm91bmQ7XHJcbiAgICBcclxuICAgIHZpZXcge1xyXG4gICAgICBAZXh0ZW5kIC5pLWNvbC1ob3Jpem9udGFsLWNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgIFxyXG4gICAgICBpbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDI0cHg7IGhlaWdodDogMjRweDtcclxuICAgICAgfVxyXG4gICAgICB0ZXh0IHtcclxuICAgICAgICBjb2xvcjogIzhhOGY5NDtcclxuICAgICAgICBmb250LXNpemU6IDAuNHJlbTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcbjwvc3R5bGU+XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///43\n");

/***/ }),
/* 44 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 45 */
/*!*********************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 46);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 11);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDd007QUFDeE0sZ0JBQWdCLGtOQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjQ1LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiQXBwLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///45\n");

/***/ }),
/* 46 */
/*!**********************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBX/HBuilderX/update/backup/root/hbuilder.root/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 47);\n/* harmony import */ var _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBX_HBuilderX_update_backup_root_hbuilder_root_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1yQixDQUFnQiw2c0JBQUcsRUFBQyIsImZpbGUiOiI0Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vSEJYL0hCdWlsZGVyWC91cGRhdGUvYmFja3VwL3Jvb3QvaGJ1aWxkZXIucm9vdC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCWC9IQnVpbGRlclgvdXBkYXRlL2JhY2t1cC9yb290L2hidWlsZGVyLnJvb3QvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi9IQlgvSEJ1aWxkZXJYL3VwZGF0ZS9iYWNrdXAvcm9vdC9oYnVpbGRlci5yb290L3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///46\n");

/***/ }),
/* 47 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  },\n  globalData: {\n    \"uid\": \"\",\n    \"uname\": \"\" } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSIsImdsb2JhbERhdGEiXSwibWFwcGluZ3MiOiI7QUFDZ0I7QUFDZEEsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLGlCQUFZLFlBQVo7QUFDQSxHQUhhO0FBSWRDLFFBQU0sRUFBRSxrQkFBVztBQUNsQixpQkFBWSxVQUFaO0FBQ0EsR0FOYTtBQU9kQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBVGE7QUFVWkMsWUFBVSxFQUFFO0FBQ1YsV0FBTyxFQURHO0FBRVYsYUFBUyxFQUZDLEVBVkEsRSIsImZpbGUiOiI0Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBMYXVuY2gnKVxuXHRcdH0sXG5cdFx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbnNvbGUubG9nKCdBcHAgU2hvdycpXG5cdFx0fSxcblx0XHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29uc29sZS5sb2coJ0FwcCBIaWRlJylcblx0XHR9LFxuICAgIGdsb2JhbERhdGE6IHtcbiAgICAgIFwidWlkXCI6IFwiXCIsXG4gICAgICBcInVuYW1lXCI6IFwiXCJcbiAgICB9XG5cdH1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///47\n");

/***/ }),
/* 48 */
/*!***************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/api/mytool.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uniCloud, __f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.Player = exports.toDatabase = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError(\"Cannot call a class as a function\");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if (\"value\" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var toDatabase = {\n  get: function get(tablename, jql, control) {var success = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : function () {;};var fail = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : function () {;};\n    var db = uniCloud.database();\n    db.collection(tablename).\n    where(jql).\n    field(control).\n    get().\n    then(function (res) {\n      var rm = res.result;\n      __f__(\"log\", rm, \" at api/mytool.js:10\");\n      if (rm.code == 0) {\n        success(rm.data);\n      } else\n      {\n        uni.showToast({\n          duration: 2000,\n          icon: 'error',\n          title: '访问失败,状态码错误' });\n\n      }\n    }).catch(function (err) {\n      __f__(\"log\", err.code, err.message, \" at api/mytool.js:22\");\n      uni.showToast({\n        duration: 2000,\n        icon: 'error',\n        title: '访问失败，接口错误' });\n\n      fail(err);\n    });\n  } };exports.toDatabase = toDatabase;var\n\n\nPlayer = /*#__PURE__*/function () {\n  // 禁用autoplay，自己调用play()方法\n  function Player() {_classCallCheck(this, Player);\n    this.musiclist = [];\n    this.index = 0;\n    this.ispause = true;\n    this.Audio = uni.createInnerAudioContext();\n  }_createClass(Player, [{ key: \"initList\", value: function initList(\n\n    list) {\n      this.index = 0;\n      this.ispause = true;\n      this.musiclist = list;\n      this.Audio.src = this.musiclist[this.index].surl;\n    }\n\n\n    // 设置播放时触发的事件\n  }, { key: \"initPlaying\", value: function initPlaying(event) {\n      this.Audio.onTimeUpdate(event);\n    }\n\n    // 设置可以播放时触发的事件\n  }, { key: \"initCanPlaying\", value: function initCanPlaying(event) {\n      this.Audio.onCanplay(event);\n    } }, { key: \"play\", value: function play()\n\n    {\n      this.ispause = false;\n      this.Audio.play();\n      __f__(\"log\", 'play', \" at api/mytool.js:63\");\n    } }, { key: \"pause\", value: function pause()\n\n    {\n      this.ispause = true;\n      this.Audio.pause();\n      __f__(\"log\", 'pause', \" at api/mytool.js:69\");\n    }\n\n    // 播放第{{index}}首歌\n    // index: 播放歌曲的索引, isAutoPlay: 切歌是否自动播放\n  }, { key: \"initMusic\", value: function initMusic() {var index = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;var isAutoPlay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n      if (0 <= index < this.musiclist.length) {\n        this.pause();\n        this.index = index;\n        this.Audio.src = this.musiclist[index].surl;\n        if (isAutoPlay) {\n          this.play();\n        }\n      } else\n      {\n        __f__(\"log\", '索引错误', \" at api/mytool.js:84\");\n      }\n    }\n\n    // isAutoPlay: 切歌是否自动播放\n  }, { key: \"toNextMusic\", value: function toNextMusic() {var isAutoPlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var l = this.musiclist.length;\n      this.initMusic((this.index + 1) % l);\n    } }, { key: \"toLastMusic\", value: function toLastMusic()\n\n    {var isAutoPlay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n      var l = this.musiclist.length;\n      this.initMusic((this.index + l - 1) % l);\n    } }, { key: \"getList\", value: function getList()\n\n    {\n      return this.musiclist;\n    } }, { key: \"getPaused\", value: function getPaused()\n\n    {\n      return this.ispause;\n    } }, { key: \"getLoading\", value: function getLoading()\n\n    {\n      return this.Audio.currentTime / this.Audio.duration * 100;\n    } }, { key: \"getCurrentTime\", value: function getCurrentTime()\n\n    {\n      return this.getTime(this.Audio.currentTime);\n    }\n\n    //需要在onCanplay保护下执行\n  }, { key: \"getDuration\", value: function getDuration() {\n      var durL = this.Audio.duration;\n      __f__(\"log\", durL, \" at api/mytool.js:118\");\n      return this.getTime(durL);\n    }\n\n    // 内置工具函数\n  }, { key: \"getTime\", value: function getTime(t) {\n      var nt = t;\n      var sec = parseInt(nt % 60) + '';\n      var min = parseInt(nt / 60) + '';\n      return Array(3 - min.length).join('0') + min + ':' + Array(3 - sec.length).join('0') + sec;\n    } }]);return Player;}();exports.Player = Player;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js */ 49)[\"default\"], __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vYXBpL215dG9vbC5qcyJdLCJuYW1lcyI6WyJ0b0RhdGFiYXNlIiwiZ2V0IiwidGFibGVuYW1lIiwianFsIiwiY29udHJvbCIsInN1Y2Nlc3MiLCJmYWlsIiwiZGIiLCJ1bmlDbG91ZCIsImRhdGFiYXNlIiwiY29sbGVjdGlvbiIsIndoZXJlIiwiZmllbGQiLCJ0aGVuIiwicmVzIiwicm0iLCJyZXN1bHQiLCJjb2RlIiwiZGF0YSIsInVuaSIsInNob3dUb2FzdCIsImR1cmF0aW9uIiwiaWNvbiIsInRpdGxlIiwiY2F0Y2giLCJlcnIiLCJtZXNzYWdlIiwiUGxheWVyIiwibXVzaWNsaXN0IiwiaW5kZXgiLCJpc3BhdXNlIiwiQXVkaW8iLCJjcmVhdGVJbm5lckF1ZGlvQ29udGV4dCIsImxpc3QiLCJzcmMiLCJzdXJsIiwiZXZlbnQiLCJvblRpbWVVcGRhdGUiLCJvbkNhbnBsYXkiLCJwbGF5IiwicGF1c2UiLCJpc0F1dG9QbGF5IiwibGVuZ3RoIiwibCIsImluaXRNdXNpYyIsImN1cnJlbnRUaW1lIiwiZ2V0VGltZSIsImR1ckwiLCJ0IiwibnQiLCJzZWMiLCJwYXJzZUludCIsIm1pbiIsIkFycmF5Iiwiam9pbiJdLCJtYXBwaW5ncyI6Iit6QkFBTyxJQUFNQSxVQUFVLEdBQUc7QUFDeEJDLEtBRHdCLGVBQ3BCQyxTQURvQixFQUNUQyxHQURTLEVBQ0pDLE9BREksRUFDbUMsS0FBOUJDLE9BQThCLHVFQUF0QixZQUFJLENBQUMsQ0FBRSxDQUFlLEtBQWJDLElBQWEsdUVBQVIsWUFBSSxDQUFDLENBQUUsQ0FBQztBQUN6RCxRQUFNQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsUUFBVCxFQUFYO0FBQ0FGLE1BQUUsQ0FBQ0csVUFBSCxDQUFjUixTQUFkO0FBQ0dTLFNBREgsQ0FDU1IsR0FEVDtBQUVHUyxTQUZILENBRVNSLE9BRlQ7QUFHR0gsT0FISDtBQUlHWSxRQUpILENBSVEsVUFBQ0MsR0FBRCxFQUFPO0FBQ1gsVUFBTUMsRUFBRSxHQUFHRCxHQUFHLENBQUNFLE1BQWY7QUFDQSxtQkFBWUQsRUFBWjtBQUNBLFVBQUdBLEVBQUUsQ0FBQ0UsSUFBSCxJQUFXLENBQWQsRUFBZ0I7QUFDZFosZUFBTyxDQUFDVSxFQUFFLENBQUNHLElBQUosQ0FBUDtBQUNELE9BRkQ7QUFHSTtBQUNGQyxXQUFHLENBQUNDLFNBQUosQ0FBYztBQUNaQyxrQkFBUSxFQUFFLElBREU7QUFFWkMsY0FBSSxFQUFFLE9BRk07QUFHWkMsZUFBSyxFQUFFLFlBSEssRUFBZDs7QUFLRDtBQUNGLEtBakJILEVBaUJLQyxLQWpCTCxDQWlCVyxVQUFDQyxHQUFELEVBQU87QUFDZCxtQkFBWUEsR0FBRyxDQUFDUixJQUFoQixFQUFzQlEsR0FBRyxDQUFDQyxPQUExQjtBQUNBUCxTQUFHLENBQUNDLFNBQUosQ0FBYztBQUNaQyxnQkFBUSxFQUFFLElBREU7QUFFWkMsWUFBSSxFQUFFLE9BRk07QUFHWkMsYUFBSyxFQUFFLFdBSEssRUFBZDs7QUFLQWpCLFVBQUksQ0FBQ21CLEdBQUQsQ0FBSjtBQUNELEtBekJIO0FBMEJELEdBN0J1QixFQUFuQixDOzs7QUFnQ01FLE07QUFDWDtBQUNBLG9CQUFjO0FBQ1osU0FBS0MsU0FBTCxHQUFpQixFQUFqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxDQUFiO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxTQUFLQyxLQUFMLEdBQWFaLEdBQUcsQ0FBQ2EsdUJBQUosRUFBYjtBQUNELEc7O0FBRVFDLFEsRUFBTTtBQUNiLFdBQUtKLEtBQUwsR0FBYSxDQUFiO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLRixTQUFMLEdBQWlCSyxJQUFqQjtBQUNBLFdBQUtGLEtBQUwsQ0FBV0csR0FBWCxHQUFpQixLQUFLTixTQUFMLENBQWUsS0FBS0MsS0FBcEIsRUFBMkJNLElBQTVDO0FBQ0Q7OztBQUdEO3VEQUNZQyxLLEVBQU07QUFDaEIsV0FBS0wsS0FBTCxDQUFXTSxZQUFYLENBQXdCRCxLQUF4QjtBQUNEOztBQUVEOzZEQUNlQSxLLEVBQU07QUFDbkIsV0FBS0wsS0FBTCxDQUFXTyxTQUFYLENBQXFCRixLQUFyQjtBQUNELEs7O0FBRUs7QUFDSixXQUFLTixPQUFMLEdBQWUsS0FBZjtBQUNBLFdBQUtDLEtBQUwsQ0FBV1EsSUFBWDtBQUNBLG1CQUFZLE1BQVo7QUFDRCxLOztBQUVNO0FBQ0wsV0FBS1QsT0FBTCxHQUFlLElBQWY7QUFDQSxXQUFLQyxLQUFMLENBQVdTLEtBQVg7QUFDQSxtQkFBWSxPQUFaO0FBQ0Q7O0FBRUQ7QUFDQTtxREFDb0MsS0FBMUJYLEtBQTBCLHVFQUFwQixDQUFvQixLQUFqQlksVUFBaUIsdUVBQU4sS0FBTTtBQUNsQyxVQUFHLEtBQUtaLEtBQUwsR0FBYSxLQUFLRCxTQUFMLENBQWVjLE1BQS9CLEVBQXNDO0FBQ3BDLGFBQUtGLEtBQUw7QUFDQSxhQUFLWCxLQUFMLEdBQWFBLEtBQWI7QUFDQSxhQUFLRSxLQUFMLENBQVdHLEdBQVgsR0FBaUIsS0FBS04sU0FBTCxDQUFlQyxLQUFmLEVBQXNCTSxJQUF2QztBQUNBLFlBQUdNLFVBQUgsRUFBYztBQUNaLGVBQUtGLElBQUw7QUFDRDtBQUNGLE9BUEQ7QUFRSTtBQUNGLHFCQUFZLE1BQVo7QUFDRDtBQUNGOztBQUVEO3lEQUM2QixLQUFqQkUsVUFBaUIsdUVBQU4sS0FBTTtBQUMzQixVQUFNRSxDQUFDLEdBQUcsS0FBS2YsU0FBTCxDQUFlYyxNQUF6QjtBQUNBLFdBQUtFLFNBQUwsQ0FBZSxDQUFDLEtBQUtmLEtBQUwsR0FBVyxDQUFaLElBQWlCYyxDQUFoQztBQUNELEs7O0FBRTRCLFNBQWpCRixVQUFpQix1RUFBTixLQUFNO0FBQzNCLFVBQU1FLENBQUMsR0FBRyxLQUFLZixTQUFMLENBQWVjLE1BQXpCO0FBQ0EsV0FBS0UsU0FBTCxDQUFlLENBQUMsS0FBS2YsS0FBTCxHQUFXYyxDQUFYLEdBQWEsQ0FBZCxJQUFtQkEsQ0FBbEM7QUFDRCxLOztBQUVRO0FBQ1AsYUFBTyxLQUFLZixTQUFaO0FBQ0QsSzs7QUFFVTtBQUNULGFBQU8sS0FBS0UsT0FBWjtBQUNELEs7O0FBRVc7QUFDVixhQUFRLEtBQUtDLEtBQUwsQ0FBV2MsV0FBWCxHQUF1QixLQUFLZCxLQUFMLENBQVdWLFFBQW5DLEdBQTZDLEdBQXBEO0FBQ0QsSzs7QUFFZTtBQUNkLGFBQU8sS0FBS3lCLE9BQUwsQ0FBYSxLQUFLZixLQUFMLENBQVdjLFdBQXhCLENBQVA7QUFDRDs7QUFFRDt5REFDYTtBQUNYLFVBQUlFLElBQUksR0FBRyxLQUFLaEIsS0FBTCxDQUFXVixRQUF0QjtBQUNBLG1CQUFZMEIsSUFBWjtBQUNBLGFBQU8sS0FBS0QsT0FBTCxDQUFhQyxJQUFiLENBQVA7QUFDRDs7QUFFRDsrQ0FDUUMsQyxFQUFFO0FBQ1IsVUFBTUMsRUFBRSxHQUFHRCxDQUFYO0FBQ0EsVUFBTUUsR0FBRyxHQUFHQyxRQUFRLENBQUNGLEVBQUUsR0FBQyxFQUFKLENBQVIsR0FBZ0IsRUFBNUI7QUFDQSxVQUFNRyxHQUFHLEdBQUdELFFBQVEsQ0FBQ0YsRUFBRSxHQUFDLEVBQUosQ0FBUixHQUFnQixFQUE1QjtBQUNBLGFBQU9JLEtBQUssQ0FBQyxJQUFFRCxHQUFHLENBQUNWLE1BQVAsQ0FBTCxDQUFvQlksSUFBcEIsQ0FBeUIsR0FBekIsSUFBOEJGLEdBQTlCLEdBQWtDLEdBQWxDLEdBQXNDQyxLQUFLLENBQUMsSUFBRUgsR0FBRyxDQUFDUixNQUFQLENBQUwsQ0FBb0JZLElBQXBCLENBQXlCLEdBQXpCLENBQXRDLEdBQW9FSixHQUEzRTtBQUNELEsiLCJmaWxlIjoiNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdG9EYXRhYmFzZSA9IHtcclxuICBnZXQodGFibGVuYW1lLCBqcWwsIGNvbnRyb2wsIHN1Y2Nlc3M9KCk9Pns7fSwgZmFpbD0oKT0+ezt9KXtcclxuICAgIGNvbnN0IGRiID0gdW5pQ2xvdWQuZGF0YWJhc2UoKTtcclxuICAgIGRiLmNvbGxlY3Rpb24odGFibGVuYW1lKVxyXG4gICAgICAud2hlcmUoanFsKVxyXG4gICAgICAuZmllbGQoY29udHJvbClcclxuICAgICAgLmdldCgpXHJcbiAgICAgIC50aGVuKChyZXMpPT57XHJcbiAgICAgICAgY29uc3Qgcm0gPSByZXMucmVzdWx0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHJtKTtcclxuICAgICAgICBpZihybS5jb2RlID09IDApe1xyXG4gICAgICAgICAgc3VjY2VzcyhybS5kYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZXtcclxuICAgICAgICAgIHVuaS5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcclxuICAgICAgICAgICAgdGl0bGU6ICforr/pl67lpLHotKUs54q25oCB56CB6ZSZ6K+vJ1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KS5jYXRjaCgoZXJyKT0+e1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVyci5jb2RlLCBlcnIubWVzc2FnZSk7XHJcbiAgICAgICAgdW5pLnNob3dUb2FzdCh7XHJcbiAgICAgICAgICBkdXJhdGlvbjogMjAwMCxcclxuICAgICAgICAgIGljb246ICdlcnJvcicsXHJcbiAgICAgICAgICB0aXRsZTogJ+iuv+mXruWksei0pe+8jOaOpeWPo+mUmeivrydcclxuICAgICAgICB9KTtcclxuICAgICAgICBmYWlsKGVycik7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllciB7XHJcbiAgLy8g56aB55SoYXV0b3BsYXnvvIzoh6rlt7HosIPnlKhwbGF5KCnmlrnms5VcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMubXVzaWNsaXN0ID0gW107XHJcbiAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgIHRoaXMuaXNwYXVzZSA9IHRydWU7XHJcbiAgICB0aGlzLkF1ZGlvID0gdW5pLmNyZWF0ZUlubmVyQXVkaW9Db250ZXh0KCk7XHJcbiAgfVxyXG4gIFxyXG4gIGluaXRMaXN0KGxpc3QpIHtcclxuICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICAgdGhpcy5pc3BhdXNlID0gdHJ1ZTtcclxuICAgIHRoaXMubXVzaWNsaXN0ID0gbGlzdDtcclxuICAgIHRoaXMuQXVkaW8uc3JjID0gdGhpcy5tdXNpY2xpc3RbdGhpcy5pbmRleF0uc3VybDtcclxuICB9XHJcbiAgXHJcbiAgXHJcbiAgLy8g6K6+572u5pKt5pS+5pe26Kem5Y+R55qE5LqL5Lu2XHJcbiAgaW5pdFBsYXlpbmcoZXZlbnQpe1xyXG4gICAgdGhpcy5BdWRpby5vblRpbWVVcGRhdGUoZXZlbnQpO1xyXG4gIH1cclxuICBcclxuICAvLyDorr7nva7lj6/ku6Xmkq3mlL7ml7bop6blj5HnmoTkuovku7ZcclxuICBpbml0Q2FuUGxheWluZyhldmVudCl7XHJcbiAgICB0aGlzLkF1ZGlvLm9uQ2FucGxheShldmVudCk7XHJcbiAgfVxyXG4gIFxyXG4gIHBsYXkoKXtcclxuICAgIHRoaXMuaXNwYXVzZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5BdWRpby5wbGF5KCk7XHJcbiAgICBjb25zb2xlLmxvZygncGxheScpO1xyXG4gIH1cclxuICBcclxuICBwYXVzZSgpe1xyXG4gICAgdGhpcy5pc3BhdXNlID0gdHJ1ZTtcclxuICAgIHRoaXMuQXVkaW8ucGF1c2UoKTtcclxuICAgIGNvbnNvbGUubG9nKCdwYXVzZScpO1xyXG4gIH1cclxuICBcclxuICAvLyDmkq3mlL7nrKx7e2luZGV4fX3pppbmrYxcclxuICAvLyBpbmRleDog5pKt5pS+5q2M5puy55qE57Si5byVLCBpc0F1dG9QbGF5OiDliIfmrYzmmK/lkKboh6rliqjmkq3mlL5cclxuICBpbml0TXVzaWMoaW5kZXg9MCwgaXNBdXRvUGxheT1mYWxzZSl7XHJcbiAgICBpZigwIDw9IGluZGV4IDwgdGhpcy5tdXNpY2xpc3QubGVuZ3RoKXtcclxuICAgICAgdGhpcy5wYXVzZSgpO1xyXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuQXVkaW8uc3JjID0gdGhpcy5tdXNpY2xpc3RbaW5kZXhdLnN1cmw7XHJcbiAgICAgIGlmKGlzQXV0b1BsYXkpe1xyXG4gICAgICAgIHRoaXMucGxheSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICBjb25zb2xlLmxvZygn57Si5byV6ZSZ6K+vJyk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIGlzQXV0b1BsYXk6IOWIh+atjOaYr+WQpuiHquWKqOaSreaUvlxyXG4gIHRvTmV4dE11c2ljKGlzQXV0b1BsYXk9ZmFsc2Upe1xyXG4gICAgY29uc3QgbCA9IHRoaXMubXVzaWNsaXN0Lmxlbmd0aDtcclxuICAgIHRoaXMuaW5pdE11c2ljKCh0aGlzLmluZGV4KzEpICUgbCk7XHJcbiAgfVxyXG4gIFxyXG4gIHRvTGFzdE11c2ljKGlzQXV0b1BsYXk9ZmFsc2Upe1xyXG4gICAgY29uc3QgbCA9IHRoaXMubXVzaWNsaXN0Lmxlbmd0aDtcclxuICAgIHRoaXMuaW5pdE11c2ljKCh0aGlzLmluZGV4K2wtMSkgJSBsKTtcclxuICB9XHJcbiAgXHJcbiAgZ2V0TGlzdCgpe1xyXG4gICAgcmV0dXJuIHRoaXMubXVzaWNsaXN0O1xyXG4gIH1cclxuICBcclxuICBnZXRQYXVzZWQoKXtcclxuICAgIHJldHVybiB0aGlzLmlzcGF1c2U7XHJcbiAgfVxyXG4gIFxyXG4gIGdldExvYWRpbmcoKXtcclxuICAgIHJldHVybiAodGhpcy5BdWRpby5jdXJyZW50VGltZS90aGlzLkF1ZGlvLmR1cmF0aW9uKSoxMDA7XHJcbiAgfVxyXG4gIFxyXG4gIGdldEN1cnJlbnRUaW1lKCl7XHJcbiAgICByZXR1cm4gdGhpcy5nZXRUaW1lKHRoaXMuQXVkaW8uY3VycmVudFRpbWUpO1xyXG4gIH1cclxuICBcclxuICAvL+mcgOimgeWcqG9uQ2FucGxheeS/neaKpOS4i+aJp+ihjFxyXG4gIGdldER1cmF0aW9uKCl7XHJcbiAgICBsZXQgZHVyTCA9IHRoaXMuQXVkaW8uZHVyYXRpb247XHJcbiAgICBjb25zb2xlLmxvZyhkdXJMKTtcclxuICAgIHJldHVybiB0aGlzLmdldFRpbWUoZHVyTCk7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIOWGhee9ruW3peWFt+WHveaVsFxyXG4gIGdldFRpbWUodCl7XHJcbiAgICBjb25zdCBudCA9IHQ7XHJcbiAgICBjb25zdCBzZWMgPSBwYXJzZUludChudCU2MCkrJyc7XHJcbiAgICBjb25zdCBtaW4gPSBwYXJzZUludChudC82MCkrJyc7XHJcbiAgICByZXR1cm4gQXJyYXkoMy1taW4ubGVuZ3RoKS5qb2luKCcwJykrbWluKyc6JytBcnJheSgzLXNlYy5sZW5ndGgpLmpvaW4oJzAnKStzZWM7XHJcbiAgfVxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///48\n");

/***/ }),
/* 49 */
/*!************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/uni-cloud/dist/index.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, process, wx) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 8));var _uniI18n = __webpack_require__(/*! @dcloudio/uni-i18n */ 54);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);}_next(undefined);});};}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _toConsumableArray(arr) {return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();}function _nonIterableSpread() {throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _iterableToArray(iter) {if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);}function _arrayWithoutHoles(arr) {if (Array.isArray(arr)) return _arrayLikeToArray(arr);}function _createForOfIteratorHelper(o, allowArrayLike) {var it;if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {if (it) o = it;var i = 0;var F = function F() {};return { s: F, n: function n() {if (i >= o.length) return { done: true };return { done: false, value: o[i++] };}, e: function e(_e25) {throw _e25;}, f: F };}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}var normalCompletion = true,didErr = false,err;return { s: function s() {it = o[Symbol.iterator]();}, n: function n() {var step = it.next();normalCompletion = step.done;return step;}, e: function e(_e26) {didErr = true;err = _e26;}, f: function f() {try {if (!normalCompletion && it.return != null) it.return();} finally {if (didErr) throw err;}} };}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function");}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } });if (superClass) _setPrototypeOf(subClass, superClass);}function _createSuper(Derived) {var hasNativeReflectConstruct = _isNativeReflectConstruct();return function _createSuperInternal() {var Super = _getPrototypeOf(Derived),result;if (hasNativeReflectConstruct) {var NewTarget = _getPrototypeOf(this).constructor;result = Reflect.construct(Super, arguments, NewTarget);} else {result = Super.apply(this, arguments);}return _possibleConstructorReturn(this, result);};}function _possibleConstructorReturn(self, call) {if (call && (typeof call === "object" || typeof call === "function")) {return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self) {if (self === void 0) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _wrapNativeSuper(Class) {var _cache = typeof Map === "function" ? new Map() : undefined;_wrapNativeSuper = function _wrapNativeSuper(Class) {if (Class === null || !_isNativeFunction(Class)) return Class;if (typeof Class !== "function") {throw new TypeError("Super expression must either be null or a function");}if (typeof _cache !== "undefined") {if (_cache.has(Class)) return _cache.get(Class);_cache.set(Class, Wrapper);}function Wrapper() {return _construct(Class, arguments, _getPrototypeOf(this).constructor);}Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } });return _setPrototypeOf(Wrapper, Class);};return _wrapNativeSuper(Class);}function _construct(Parent, args, Class) {if (_isNativeReflectConstruct()) {_construct = Reflect.construct;} else {_construct = function _construct(Parent, args, Class) {var a = [null];a.push.apply(a, args);var Constructor = Function.bind.apply(Parent, a);var instance = new Constructor();if (Class) _setPrototypeOf(instance, Class.prototype);return instance;};}return _construct.apply(null, arguments);}function _isNativeReflectConstruct() {if (typeof Reflect === "undefined" || !Reflect.construct) return false;if (Reflect.construct.sham) return false;if (typeof Proxy === "function") return true;try {Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));return true;} catch (e) {return false;}}function _isNativeFunction(fn) {return Function.toString.call(fn).indexOf("[native code]") !== -1;}function _setPrototypeOf(o, p) {_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {o.__proto__ = p;return o;};return _setPrototypeOf(o, p);}function _getPrototypeOf(o) {_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {return o.__proto__ || Object.getPrototypeOf(o);};return _getPrototypeOf(o);}"undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;function t(e) {return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;}function n(e, t, n) {return e(n = { path: t, exports: {}, require: function require(e, t) {return function () {throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs");}(null == t && n.path);} }, n.exports), n.exports;}var s = n(function (e, t) {var n;e.exports = (n = n || function (e, t) {var n = Object.create || function () {function e() {}return function (t) {var n;return e.prototype = t, n = new e(), e.prototype = null, n;};}(),s = {},r = s.lib = {},o = r.Base = { extend: function extend(e) {var t = n(this);return e && t.mixIn(e), t.hasOwnProperty("init") && this.init !== t.init || (t.init = function () {t.$super.init.apply(this, arguments);}), t.init.prototype = t, t.$super = this, t;}, create: function create() {var e = this.extend();return e.init.apply(e, arguments), e;}, init: function init() {}, mixIn: function mixIn(e) {for (var t in e) {e.hasOwnProperty(t) && (this[t] = e[t]);}e.hasOwnProperty("toString") && (this.toString = e.toString);}, clone: function clone() {return this.init.prototype.extend(this);} },i = r.WordArray = o.extend({ init: function init(e, t) {e = this.words = e || [], this.sigBytes = null != t ? t : 4 * e.length;}, toString: function toString(e) {return (e || c).stringify(this);}, concat: function concat(e) {var t = this.words,n = e.words,s = this.sigBytes,r = e.sigBytes;if (this.clamp(), s % 4) for (var o = 0; o < r; o++) {var i = n[o >>> 2] >>> 24 - o % 4 * 8 & 255;t[s + o >>> 2] |= i << 24 - (s + o) % 4 * 8;} else for (o = 0; o < r; o += 4) {t[s + o >>> 2] = n[o >>> 2];}return this.sigBytes += r, this;}, clamp: function clamp() {var t = this.words,n = this.sigBytes;t[n >>> 2] &= 4294967295 << 32 - n % 4 * 8, t.length = e.ceil(n / 4);}, clone: function clone() {var e = o.clone.call(this);return e.words = this.words.slice(0), e;}, random: function random(t) {for (var n, s = [], r = function r(t) {t = t;var n = 987654321,s = 4294967295;return function () {var r = ((n = 36969 * (65535 & n) + (n >> 16) & s) << 16) + (t = 18e3 * (65535 & t) + (t >> 16) & s) & s;return r /= 4294967296, (r += .5) * (e.random() > .5 ? 1 : -1);};}, o = 0; o < t; o += 4) {var a = r(4294967296 * (n || e.random()));n = 987654071 * a(), s.push(4294967296 * a() | 0);}return new i.init(s, t);} }),a = s.enc = {},c = a.Hex = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push((o >>> 4).toString(16)), s.push((15 & o).toString(16));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s += 2) {n[s >>> 3] |= parseInt(e.substr(s, 2), 16) << 24 - s % 8 * 4;}return new i.init(n, t / 2);} },u = a.Latin1 = { stringify: function stringify(e) {for (var t = e.words, n = e.sigBytes, s = [], r = 0; r < n; r++) {var o = t[r >>> 2] >>> 24 - r % 4 * 8 & 255;s.push(String.fromCharCode(o));}return s.join("");}, parse: function parse(e) {for (var t = e.length, n = [], s = 0; s < t; s++) {n[s >>> 2] |= (255 & e.charCodeAt(s)) << 24 - s % 4 * 8;}return new i.init(n, t);} },h = a.Utf8 = { stringify: function stringify(e) {try {return decodeURIComponent(escape(u.stringify(e)));} catch (e) {throw new Error("Malformed UTF-8 data");}}, parse: function parse(e) {return u.parse(unescape(encodeURIComponent(e)));} },l = r.BufferedBlockAlgorithm = o.extend({ reset: function reset() {this._data = new i.init(), this._nDataBytes = 0;}, _append: function _append(e) {"string" == typeof e && (e = h.parse(e)), this._data.concat(e), this._nDataBytes += e.sigBytes;}, _process: function _process(t) {var n = this._data,s = n.words,r = n.sigBytes,o = this.blockSize,a = r / (4 * o),c = (a = t ? e.ceil(a) : e.max((0 | a) - this._minBufferSize, 0)) * o,u = e.min(4 * c, r);if (c) {for (var h = 0; h < c; h += o) {this._doProcessBlock(s, h);}var l = s.splice(0, c);n.sigBytes -= u;}return new i.init(l, u);}, clone: function clone() {var e = o.clone.call(this);return e._data = this._data.clone(), e;}, _minBufferSize: 0 }),d = (r.Hasher = l.extend({ cfg: o.extend(), init: function init(e) {this.cfg = this.cfg.extend(e), this.reset();}, reset: function reset() {l.reset.call(this), this._doReset();}, update: function update(e) {return this._append(e), this._process(), this;}, finalize: function finalize(e) {return e && this._append(e), this._doFinalize();}, blockSize: 16, _createHelper: function _createHelper(e) {return function (t, n) {return new e.init(n).finalize(t);};}, _createHmacHelper: function _createHmacHelper(e) {return function (t, n) {return new d.HMAC.init(e, n).finalize(t);};} }), s.algo = {});return s;}(Math), n);}),r = (n(function (e, t) {var n;e.exports = (n = s, function (e) {var t = n,s = t.lib,r = s.WordArray,o = s.Hasher,i = t.algo,a = [];!function () {for (var t = 0; t < 64; t++) {a[t] = 4294967296 * e.abs(e.sin(t + 1)) | 0;}}();var c = i.MD5 = o.extend({ _doReset: function _doReset() {this._hash = new r.init([1732584193, 4023233417, 2562383102, 271733878]);}, _doProcessBlock: function _doProcessBlock(e, t) {for (var n = 0; n < 16; n++) {var s = t + n,r = e[s];e[s] = 16711935 & (r << 8 | r >>> 24) | 4278255360 & (r << 24 | r >>> 8);}var o = this._hash.words,i = e[t + 0],c = e[t + 1],f = e[t + 2],p = e[t + 3],g = e[t + 4],m = e[t + 5],y = e[t + 6],_ = e[t + 7],w = e[t + 8],v = e[t + 9],S = e[t + 10],k = e[t + 11],T = e[t + 12],P = e[t + 13],I = e[t + 14],A = e[t + 15],E = o[0],b = o[1],O = o[2],U = o[3];E = u(E, b, O, U, i, 7, a[0]), U = u(U, E, b, O, c, 12, a[1]), O = u(O, U, E, b, f, 17, a[2]), b = u(b, O, U, E, p, 22, a[3]), E = u(E, b, O, U, g, 7, a[4]), U = u(U, E, b, O, m, 12, a[5]), O = u(O, U, E, b, y, 17, a[6]), b = u(b, O, U, E, _, 22, a[7]), E = u(E, b, O, U, w, 7, a[8]), U = u(U, E, b, O, v, 12, a[9]), O = u(O, U, E, b, S, 17, a[10]), b = u(b, O, U, E, k, 22, a[11]), E = u(E, b, O, U, T, 7, a[12]), U = u(U, E, b, O, P, 12, a[13]), O = u(O, U, E, b, I, 17, a[14]), E = h(E, b = u(b, O, U, E, A, 22, a[15]), O, U, c, 5, a[16]), U = h(U, E, b, O, y, 9, a[17]), O = h(O, U, E, b, k, 14, a[18]), b = h(b, O, U, E, i, 20, a[19]), E = h(E, b, O, U, m, 5, a[20]), U = h(U, E, b, O, S, 9, a[21]), O = h(O, U, E, b, A, 14, a[22]), b = h(b, O, U, E, g, 20, a[23]), E = h(E, b, O, U, v, 5, a[24]), U = h(U, E, b, O, I, 9, a[25]), O = h(O, U, E, b, p, 14, a[26]), b = h(b, O, U, E, w, 20, a[27]), E = h(E, b, O, U, P, 5, a[28]), U = h(U, E, b, O, f, 9, a[29]), O = h(O, U, E, b, _, 14, a[30]), E = l(E, b = h(b, O, U, E, T, 20, a[31]), O, U, m, 4, a[32]), U = l(U, E, b, O, w, 11, a[33]), O = l(O, U, E, b, k, 16, a[34]), b = l(b, O, U, E, I, 23, a[35]), E = l(E, b, O, U, c, 4, a[36]), U = l(U, E, b, O, g, 11, a[37]), O = l(O, U, E, b, _, 16, a[38]), b = l(b, O, U, E, S, 23, a[39]), E = l(E, b, O, U, P, 4, a[40]), U = l(U, E, b, O, i, 11, a[41]), O = l(O, U, E, b, p, 16, a[42]), b = l(b, O, U, E, y, 23, a[43]), E = l(E, b, O, U, v, 4, a[44]), U = l(U, E, b, O, T, 11, a[45]), O = l(O, U, E, b, A, 16, a[46]), E = d(E, b = l(b, O, U, E, f, 23, a[47]), O, U, i, 6, a[48]), U = d(U, E, b, O, _, 10, a[49]), O = d(O, U, E, b, I, 15, a[50]), b = d(b, O, U, E, m, 21, a[51]), E = d(E, b, O, U, T, 6, a[52]), U = d(U, E, b, O, p, 10, a[53]), O = d(O, U, E, b, S, 15, a[54]), b = d(b, O, U, E, c, 21, a[55]), E = d(E, b, O, U, w, 6, a[56]), U = d(U, E, b, O, A, 10, a[57]), O = d(O, U, E, b, y, 15, a[58]), b = d(b, O, U, E, P, 21, a[59]), E = d(E, b, O, U, g, 6, a[60]), U = d(U, E, b, O, k, 10, a[61]), O = d(O, U, E, b, f, 15, a[62]), b = d(b, O, U, E, v, 21, a[63]), o[0] = o[0] + E | 0, o[1] = o[1] + b | 0, o[2] = o[2] + O | 0, o[3] = o[3] + U | 0;}, _doFinalize: function _doFinalize() {var t = this._data,n = t.words,s = 8 * this._nDataBytes,r = 8 * t.sigBytes;n[r >>> 5] |= 128 << 24 - r % 32;var o = e.floor(s / 4294967296),i = s;n[15 + (r + 64 >>> 9 << 4)] = 16711935 & (o << 8 | o >>> 24) | 4278255360 & (o << 24 | o >>> 8), n[14 + (r + 64 >>> 9 << 4)] = 16711935 & (i << 8 | i >>> 24) | 4278255360 & (i << 24 | i >>> 8), t.sigBytes = 4 * (n.length + 1), this._process();for (var a = this._hash, c = a.words, u = 0; u < 4; u++) {var h = c[u];c[u] = 16711935 & (h << 8 | h >>> 24) | 4278255360 & (h << 24 | h >>> 8);}return a;}, clone: function clone() {var e = o.clone.call(this);return e._hash = this._hash.clone(), e;} });function u(e, t, n, s, r, o, i) {var a = e + (t & n | ~t & s) + r + i;return (a << o | a >>> 32 - o) + t;}function h(e, t, n, s, r, o, i) {var a = e + (t & s | n & ~s) + r + i;return (a << o | a >>> 32 - o) + t;}function l(e, t, n, s, r, o, i) {var a = e + (t ^ n ^ s) + r + i;return (a << o | a >>> 32 - o) + t;}function d(e, t, n, s, r, o, i) {var a = e + (n ^ (t | ~s)) + r + i;return (a << o | a >>> 32 - o) + t;}t.MD5 = o._createHelper(c), t.HmacMD5 = o._createHmacHelper(c);}(Math), n.MD5);}), n(function (e, t) {var n, r, o;e.exports = (r = (n = s).lib.Base, o = n.enc.Utf8, void (n.algo.HMAC = r.extend({ init: function init(e, t) {e = this._hasher = new e.init(), "string" == typeof t && (t = o.parse(t));var n = e.blockSize,s = 4 * n;t.sigBytes > s && (t = e.finalize(t)), t.clamp();for (var r = this._oKey = t.clone(), i = this._iKey = t.clone(), a = r.words, c = i.words, u = 0; u < n; u++) {a[u] ^= 1549556828, c[u] ^= 909522486;}r.sigBytes = i.sigBytes = s, this.reset();}, reset: function reset() {var e = this._hasher;e.reset(), e.update(this._iKey);}, update: function update(e) {return this._hasher.update(e), this;}, finalize: function finalize(e) {var t = this._hasher,n = t.finalize(e);return t.reset(), t.finalize(this._oKey.clone().concat(n));} })));}), n(function (e, t) {e.exports = s.HmacMD5;}));function o(e) {return Object.prototype.toString.call(e).slice(8, -1).toLowerCase();}function i(e) {return "object" === o(e);}var a = /*#__PURE__*/function (_Error) {_inherits(a, _Error);var _super = _createSuper(a);function a(e, t) {var _this;_classCallCheck(this, a);_this = _super.call(this, e), _this.code = t;return _this;}return a;}( /*#__PURE__*/_wrapNativeSuper(Error));function c(e) {return e && "string" == typeof e ? JSON.parse(e) : e;}var u = "development" === "development",h = "app-plus" || false,l = c({
    "address": [
        "127.0.0.1",
        "172.17.105.243"
    ],
    "debugPort": 54361,
    "initialLaunchType": "local",
    "servePort": 54362
}
),d = c([{"provider":"aliyun","spaceName":"yihuidong-like","spaceId":"ac0ab413-d6ce-4706-a0d7-812977463aaf","clientSecret":"hPniPf/KJDmzx8tePvbEgA==","endpoint":"https://api.bspapp.com"}]),f = true;var p = {};function g(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};var n, s;return n = p, s = e, Object.prototype.hasOwnProperty.call(n, s) || (p[e] = t), p[e];}"app-plus" === h && (p = uni._globalUniCloudObj ? uni._globalUniCloudObj : uni._globalUniCloudObj = {});var m = ["invoke", "success", "fail", "complete"],y = g("_globalUniCloudInterceptor");function _(e, t) {y[e] || (y[e] = {}), i(t) && Object.keys(t).forEach(function (n) {m.indexOf(n) > -1 && function (e, t, n) {var s = y[e][t];s || (s = y[e][t] = []), -1 === s.indexOf(n) && "function" == typeof n && s.push(n);}(e, n, t[n]);});}function w(e, t) {y[e] || (y[e] = {}), i(t) ? Object.keys(t).forEach(function (n) {m.indexOf(n) > -1 && function (e, t, n) {var s = y[e][t];if (!s) return;var r = s.indexOf(n);r > -1 && s.splice(r, 1);}(e, n, t[n]);}) : delete y[e];}function v(e, t) {return e && 0 !== e.length ? e.reduce(function (e, n) {return e.then(function () {return n(t);});}, Promise.resolve()) : Promise.resolve();}function S(e, t) {return y[e] && y[e][t] || [];}function k(e, t) {return t ? function (n) {var _this2 = this;var s = "callFunction" === t && "DCloud-clientDB" === (n && n.name);var r;r = this.isReady ? Promise.resolve() : this.initUniCloud, n = n || {};var o = r.then(function () {return s ? Promise.resolve() : v(S(t, "invoke"), n);}).then(function () {return e.call(_this2, n);}).then(function (e) {return s ? Promise.resolve(e) : v(S(t, "success"), e).then(function () {return v(S(t, "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {return s ? Promise.reject(e) : v(S(t, "fail"), e).then(function () {return v(S(t, "complete"), e);}).then(function () {return Promise.reject(e);});});if (!(n.success || n.fail || n.complete)) return o;o.then(function (e) {n.success && n.success(e), n.complete && n.complete(e);}).catch(function (e) {n.fail && n.fail(e), n.complete && n.complete(e);});} : function (t) {if (!((t = t || {}).success || t.fail || t.complete)) return e.call(this, t);e.call(this, t).then(function (e) {t.success && t.success(e), t.complete && t.complete(e);}, function (e) {t.fail && t.fail(e), t.complete && t.complete(e);});};}var T = /*#__PURE__*/function (_Error2) {_inherits(T, _Error2);var _super2 = _createSuper(T);function T(e) {var _this3;_classCallCheck(this, T);_this3 = _super2.call(this, e.message), _this3.errMsg = e.message || "", Object.defineProperties(_assertThisInitialized(_this3), { code: { get: function get() {return e.code;} }, requestId: { get: function get() {return e.requestId;} }, message: { get: function get() {return this.errMsg;}, set: function set(e) {this.errMsg = e;} } });return _this3;}return T;}( /*#__PURE__*/_wrapNativeSuper(Error));var _e2 = (0, _uniI18n.initVueI18n)({ "zh-Hans": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, "zh-Hant": { "uniCloud.init.paramRequired": "缺少参数：{param}", "uniCloud.uploadFile.fileError": "filePath应为File对象" }, en: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, fr: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" }, es: { "uniCloud.init.paramRequired": "{param} required", "uniCloud.uploadFile.fileError": "filePath should be instance of File" } }, "zh-Hans"),P = _e2.t,I = _e2.setLocale,A = _e2.getLocale;var E, b, O;try {E = __webpack_require__(/*! uni-stat-config */ 55).default || __webpack_require__(/*! uni-stat-config */ 55);} catch (e) {E = { appid: "" };}function U() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 8;var t = "";for (; t.length < e;) {t += Math.random().toString(32).substring(2);}return t.substring(0, e);}function C() {var _uni$getSystemInfoSyn = uni.getSystemInfoSync(),e = _uni$getSystemInfoSyn.deviceId;return { PLATFORM: h, OS: O, APPID: E.appid, LOCALE: A(), DEVICEID: e, CLIENT_SDK_VERSION: "1.0.6" };}function D() {if ("n" === x()) {try {b = plus.runtime.getDCloudId();} catch (e) {b = "";}return b;}return b || (b = U(32), uni.setStorage({ key: "__DC_CLOUD_UUID", data: b })), b;}function x() {var _appPlus$h5$mpWeixi;return (_appPlus$h5$mpWeixi = { "app-plus": "n", h5: "h5", "mp-weixin": "wx" }, _defineProperty(_appPlus$h5$mpWeixi, ["y", "a", "p", "mp-ali"].reverse().join(""), "ali"), _defineProperty(_appPlus$h5$mpWeixi, "mp-baidu", "bd"), _defineProperty(_appPlus$h5$mpWeixi, "mp-toutiao", "tt"), _defineProperty(_appPlus$h5$mpWeixi, "mp-qq", "qq"), _defineProperty(_appPlus$h5$mpWeixi, "quickapp-native", "qn"), _appPlus$h5$mpWeixi)[h];}var R = { sign: function sign(e, t) {var n = "";return Object.keys(e).sort().forEach(function (t) {e[t] && (n = n + "&" + t + "=" + e[t]);}), n = n.slice(1), r(n, t).toString();}, wrappedRequest: function wrappedRequest(e, t) {return new Promise(function (n, s) {t(Object.assign(e, { complete: function complete(e) {e || (e = {}), u && "h5" === h && e.errMsg && 0 === e.errMsg.indexOf("request:fail") && console.warn("发布H5，需要在uniCloud后台操作，绑定安全域名，否则会因为跨域问题而无法访问。教程参考：https://uniapp.dcloud.io/uniCloud/quickstart?id=useinh5");var t = e.data && e.data.header && e.data.header["x-serverless-request-id"] || e.header && e.header["request-id"];if (!e.statusCode || e.statusCode >= 400) return s(new T({ code: "SYS_ERR", message: e.errMsg || "request:fail", requestId: t }));var r = e.data;if (r.error) return s(new T({ code: r.error.code, message: r.error.message, requestId: t }));r.result = r.data, r.requestId = t, delete r.data, n(r);} }));});} };var q = { request: function request(e) {return uni.request(e);}, uploadFile: function uploadFile(e) {return uni.uploadFile(e);}, setStorageSync: function setStorageSync(e, t) {return uni.setStorageSync(e, t);}, getStorageSync: function getStorageSync(e) {return uni.getStorageSync(e);}, removeStorageSync: function removeStorageSync(e) {return uni.removeStorageSync(e);}, clearStorageSync: function clearStorageSync() {return uni.clearStorageSync();} };var F = /*#__PURE__*/function () {function F(e) {_classCallCheck(this, F);["spaceId", "clientSecret"].forEach(function (t) {if (!Object.prototype.hasOwnProperty.call(e, t)) throw new Error(P("uniCloud.init.paramRequired", { param: t }));}), this.config = Object.assign({}, { endpoint: "https://api.bspapp.com" }, e), this.config.provider = "aliyun", this.config.requestUrl = this.config.endpoint + "/client", this.config.envType = this.config.envType || "public", this.config.accessTokenKey = "access_token_" + this.config.spaceId, this.adapter = q, this._getAccessTokenPromise = null, this._getAccessTokenPromiseStatus = null;}_createClass(F, [{ key: "setAccessToken", value: function setAccessToken(e) {this.accessToken = e;} }, { key: "requestWrapped", value: function requestWrapped(e) {return R.wrappedRequest(e, this.adapter.request);} }, { key: "requestAuth", value: function requestAuth(e) {return this.requestWrapped(e);} }, { key: "request", value: function request(e, t) {var _this4 = this;return Promise.resolve().then(function () {return _this4.hasAccessToken ? t ? _this4.requestWrapped(e) : _this4.requestWrapped(e).catch(function (t) {return new Promise(function (e, n) {!t || "GATEWAY_INVALID_TOKEN" !== t.code && "InvalidParameter.InvalidToken" !== t.code ? n(t) : e();}).then(function () {return _this4.getAccessToken();}).then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});}) : _this4.getAccessToken().then(function () {var t = _this4.rebuildRequest(e);return _this4.request(t, !0);});});} }, { key: "rebuildRequest", value: function rebuildRequest(e) {var t = Object.assign({}, e);return t.data.token = this.accessToken, t.header["x-basement-token"] = this.accessToken, t.header["x-serverless-sign"] = R.sign(t.data, this.config.clientSecret), t;} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };return "auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: s };} }, { key: "getAccessToken", value: function getAccessToken() {var _this5 = this;if ("pending" === this._getAccessTokenPromiseStatus) return this._getAccessTokenPromise;this._getAccessTokenPromiseStatus = "pending";return this._getAccessTokenPromise = this.requestAuth(this.setupRequest({ method: "serverless.auth.user.anonymousAuthorize", params: "{}" }, "auth")).then(function (e) {return new Promise(function (t, n) {e.result && e.result.accessToken ? (_this5.setAccessToken(e.result.accessToken), _this5._getAccessTokenPromiseStatus = "fulfilled", t(_this5.accessToken)) : (_this5._getAccessTokenPromiseStatus = "rejected", n(new T({ code: "AUTH_FAILED", message: "获取accessToken失败" })));});}, function (e) {return _this5._getAccessTokenPromiseStatus = "rejected", Promise.reject(e);}), this._getAccessTokenPromise;} }, { key: "authorize", value: function authorize() {this.getAccessToken();} }, { key: "callFunction", value: function callFunction(e) {var t = { method: "serverless.function.runtime.invoke", params: JSON.stringify({ functionTarget: e.name, functionArgs: e.data || {} }) };return this.request(this.setupRequest(t));} }, { key: "getOSSUploadOptionsFromPath", value: function getOSSUploadOptionsFromPath(e) {var t = { method: "serverless.file.resource.generateProximalSign", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref) {var _this6 = this;var e = _ref.url,t = _ref.formData,n = _ref.name,s = _ref.filePath,r = _ref.fileType,o = _ref.onUploadProgress;return new Promise(function (i, a) {var c = _this6.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, header: { "X-OSS-server-side-encrpytion": "AES256" }, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new T({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "reportOSSUpload", value: function reportOSSUpload(e) {var t = { method: "serverless.file.resource.report", params: JSON.stringify(e) };return this.request(this.setupRequest(t));} }, { key: "uploadFile", value: function uploadFile(_ref2) {var _this7 = this;var e = _ref2.filePath,t = _ref2.cloudPath,_ref2$fileType = _ref2.fileType,n = _ref2$fileType === void 0 ? "image" : _ref2$fileType,s = _ref2.onUploadProgress,r = _ref2.config;if (!t) throw new T({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var o = r && r.envType || this.config.envType;var i, a;return this.getOSSUploadOptionsFromPath({ env: o, filename: t }).then(function (t) {var r = t.result;i = r.id, a = "https://" + r.cdnDomain + "/" + r.ossPath;var o = { url: "https://" + r.host, formData: { "Cache-Control": "max-age=2592000", "Content-Disposition": "attachment", OSSAccessKeyId: r.accessKeyId, Signature: r.signature, host: r.host, id: i, key: r.ossPath, policy: r.policy, success_action_status: 200 }, fileName: "file", name: "file", filePath: e, fileType: n };return _this7.uploadFileToOSS(Object.assign({}, o, { onUploadProgress: s }));}).then(function () {return _this7.reportOSSUpload({ id: i });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: a }) : s(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }, { key: "deleteFile", value: function deleteFile(_ref3) {var e = _ref3.fileList;var t = { method: "serverless.file.resource.delete", params: JSON.stringify({ id: e[0] }) };return this.request(this.setupRequest(t));} }, { key: "getTempFileURL", value: function getTempFileURL() {var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref4.fileList;return new Promise(function (t, n) {Array.isArray(e) && 0 !== e.length || n(new T({ code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" })), t({ fileList: e.map(function (e) {return { fileID: e, tempFileURL: e };}) });});} }, { key: "hasAccessToken", get: function get() {return !!this.accessToken;} }]);return F;}();var L = { init: function init(e) {var t = new F(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} },N = "undefined" != typeof location && "http:" === location.protocol ? "http:" : "https:",M = "undefined" != typeof process && "e2e" === "development" && "pre" === Object({"VUE_APP_NAME":"kugou-u","VUE_APP_PLATFORM":"app-plus","NODE_ENV":"development","BASE_URL":"/"}).END_POINT ? "//tcb-pre.tencentcloudapi.com/web" : "//tcb-api.tencentcloudapi.com/web";var j;!function (e) {e.local = "local", e.none = "none", e.session = "session";}(j || (j = {}));var $ = function $() {};var K = function K() {var e;if (!Promise) {e = function e() {}, e.promise = {};var _t = function _t() {throw new Error('Your Node runtime does support ES6 Promises. Set "global.Promise" to your preferred implementation of promises.');};return Object.defineProperty(e.promise, "then", { get: _t }), Object.defineProperty(e.promise, "catch", { get: _t }), e;}var t = new Promise(function (t, n) {e = function e(_e3, s) {return _e3 ? n(_e3) : t(s);};});return e.promise = t, e;};function B(e) {return void 0 === e;}function H(e) {return "[object Null]" === Object.prototype.toString.call(e);}var W;function z(e) {var t = (n = e, "[object Array]" === Object.prototype.toString.call(n) ? e : [e]);var n;var _iterator = _createForOfIteratorHelper(t),_step;try {for (_iterator.s(); !(_step = _iterator.n()).done;) {var _e4 = _step.value;var _t2 = _e4.isMatch,_n = _e4.genAdapter,_s = _e4.runtime;if (_t2()) return { adapter: _n(), runtime: _s };}} catch (err) {_iterator.e(err);} finally {_iterator.f();}}!function (e) {e.WEB = "web", e.WX_MP = "wx_mp";}(W || (W = {}));var V = { adapter: null, runtime: void 0 },J = ["anonymousUuidKey"];var Y = /*#__PURE__*/function (_$) {_inherits(Y, _$);var _super3 = _createSuper(Y);function Y() {var _this8;_classCallCheck(this, Y);_this8 = _super3.call(this), V.adapter.root.tcbObject || (V.adapter.root.tcbObject = {});return _this8;}_createClass(Y, [{ key: "setItem", value: function setItem(e, t) {V.adapter.root.tcbObject[e] = t;} }, { key: "getItem", value: function getItem(e) {return V.adapter.root.tcbObject[e];} }, { key: "removeItem", value: function removeItem(e) {delete V.adapter.root.tcbObject[e];} }, { key: "clear", value: function clear() {delete V.adapter.root.tcbObject;} }]);return Y;}($);function X(e, t) {switch (e) {case "local":return t.localStorage || new Y();case "none":return new Y();default:return t.sessionStorage || new Y();}}var G = /*#__PURE__*/function () {function G(e) {_classCallCheck(this, G);if (!this._storage) {this._persistence = V.adapter.primaryStorage || e.persistence, this._storage = X(this._persistence, V.adapter);var _t3 = "access_token_" + e.env,_n2 = "access_token_expire_" + e.env,_s2 = "refresh_token_" + e.env,_r = "anonymous_uuid_" + e.env,_o = "login_type_" + e.env,_i = "user_info_" + e.env;this.keys = { accessTokenKey: _t3, accessTokenExpireKey: _n2, refreshTokenKey: _s2, anonymousUuidKey: _r, loginTypeKey: _o, userInfoKey: _i };}}_createClass(G, [{ key: "updatePersistence", value: function updatePersistence(e) {if (e === this._persistence) return;var t = "local" === this._persistence;this._persistence = e;var n = X(e, V.adapter);for (var _e5 in this.keys) {var _s3 = this.keys[_e5];if (t && J.includes(_e5)) continue;var _r2 = this._storage.getItem(_s3);B(_r2) || H(_r2) || (n.setItem(_s3, _r2), this._storage.removeItem(_s3));}this._storage = n;} }, { key: "setStore", value: function setStore(e, t, n) {if (!this._storage) return;var s = { version: n || "localCachev1", content: t },r = JSON.stringify(s);try {this._storage.setItem(e, r);} catch (e) {throw e;}} }, { key: "getStore", value: function getStore(e, t) {try {if (!this._storage) return;} catch (e) {return "";}t = t || "localCachev1";var n = this._storage.getItem(e);if (!n) return "";if (n.indexOf(t) >= 0) {return JSON.parse(n).content;}return "";} }, { key: "removeStore", value: function removeStore(e) {this._storage.removeItem(e);} }]);return G;}();var Q = {},Z = {};function ee(e) {return Q[e];}var te = function te(e, t) {_classCallCheck(this, te);this.data = t || null, this.name = e;};var ne = /*#__PURE__*/function (_te) {_inherits(ne, _te);var _super4 = _createSuper(ne);function ne(e, t) {var _this9;_classCallCheck(this, ne);_this9 = _super4.call(this, "error", { error: e, data: t }), _this9.error = e;return _this9;}return ne;}(te);var se = new ( /*#__PURE__*/function () {function _class() {_classCallCheck(this, _class);this._listeners = {};}_createClass(_class, [{ key: "on", value: function on(e, t) {return function (e, t, n) {n[e] = n[e] || [], n[e].push(t);}(e, t, this._listeners), this;} }, { key: "off", value: function off(e, t) {return function (e, t, n) {if (n && n[e]) {var _s4 = n[e].indexOf(t);-1 !== _s4 && n[e].splice(_s4, 1);}}(e, t, this._listeners), this;} }, { key: "fire", value: function fire(e, t) {if (e instanceof ne) return console.error(e.error), this;var n = "string" == typeof e ? new te(e, t || {}) : e;var s = n.name;if (this._listens(s)) {n.target = this;var _e6 = this._listeners[s] ? _toConsumableArray(this._listeners[s]) : [];var _iterator2 = _createForOfIteratorHelper(_e6),_step2;try {for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {var _t4 = _step2.value;_t4.call(this, n);}} catch (err) {_iterator2.e(err);} finally {_iterator2.f();}}return this;} }, { key: "_listens", value: function _listens(e) {return this._listeners[e] && this._listeners[e].length > 0;} }]);return _class;}())();function re(e, t) {se.on(e, t);}function oe(e) {var t = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};se.fire(e, t);}function ie(e, t) {se.off(e, t);}var ae = "loginStateChanged",ce = "loginStateExpire",ue = "loginTypeChanged",he = "anonymousConverted",le = "refreshAccessToken";var de;!function (e) {e.ANONYMOUS = "ANONYMOUS", e.WECHAT = "WECHAT", e.WECHAT_PUBLIC = "WECHAT-PUBLIC", e.WECHAT_OPEN = "WECHAT-OPEN", e.CUSTOM = "CUSTOM", e.EMAIL = "EMAIL", e.USERNAME = "USERNAME", e.NULL = "NULL";}(de || (de = {}));var fe = ["auth.getJwt", "auth.logout", "auth.signInWithTicket", "auth.signInAnonymously", "auth.signIn", "auth.fetchAccessTokenWithRefreshToken", "auth.signUpWithEmailAndPassword", "auth.activateEndUserMail", "auth.sendPasswordResetEmail", "auth.resetPasswordWithToken", "auth.isUsernameRegistered"],pe = { "X-SDK-Version": "1.3.5" };function ge(e, t, n) {var s = e[t];e[t] = function (t) {var r = {},o = {};n.forEach(function (n) {var _n$call = n.call(e, t),s = _n$call.data,i = _n$call.headers;Object.assign(r, s), Object.assign(o, i);});var i = t.data;return i && function () {var e;if (e = i, "[object FormData]" !== Object.prototype.toString.call(e)) t.data = _objectSpread(_objectSpread({}, i), r);else for (var _e7 in r) {i.append(_e7, r[_e7]);}}(), t.headers = _objectSpread(_objectSpread({}, t.headers || {}), o), s.call(e, t);};}function me() {var e = Math.random().toString(16).slice(2);return { data: { seqId: e }, headers: _objectSpread(_objectSpread({}, pe), {}, { "x-seqid": e }) };}var ye = /*#__PURE__*/function () {function ye() {var e = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};_classCallCheck(this, ye);var t;this.config = e, this._reqClass = new V.adapter.reqClass({ timeout: this.config.timeout, timeoutMsg: "\u8BF7\u6C42\u5728".concat(this.config.timeout / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD"), restrictedMethods: ["post"] }), this._cache = ee(this.config.env), this._localCache = (t = this.config.env, Z[t]), ge(this._reqClass, "post", [me]), ge(this._reqClass, "upload", [me]), ge(this._reqClass, "download", [me]);}_createClass(ye, [{ key: "post", value: function () {var _post = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee(e) {return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return this._reqClass.post(e);case 2:return _context.abrupt("return", _context.sent);case 3:case "end":return _context.stop();}}}, _callee, this);}));function post(_x) {return _post.apply(this, arguments);}return post;}() }, { key: "upload", value: function () {var _upload = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2(e) {return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:_context2.next = 2;return this._reqClass.upload(e);case 2:return _context2.abrupt("return", _context2.sent);case 3:case "end":return _context2.stop();}}}, _callee2, this);}));function upload(_x2) {return _upload.apply(this, arguments);}return upload;}() }, { key: "download", value: function () {var _download = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee3(e) {return _regenerator.default.wrap(function _callee3$(_context3) {while (1) {switch (_context3.prev = _context3.next) {case 0:_context3.next = 2;return this._reqClass.download(e);case 2:return _context3.abrupt("return", _context3.sent);case 3:case "end":return _context3.stop();}}}, _callee3, this);}));function download(_x3) {return _download.apply(this, arguments);}return download;}() }, { key: "refreshAccessToken", value: function () {var _refreshAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee4() {var e, t;return _regenerator.default.wrap(function _callee4$(_context4) {while (1) {switch (_context4.prev = _context4.next) {case 0:this._refreshAccessTokenPromise || (this._refreshAccessTokenPromise = this._refreshAccessToken());_context4.prev = 1;_context4.next = 4;return this._refreshAccessTokenPromise;case 4:e = _context4.sent;_context4.next = 10;break;case 7:_context4.prev = 7;_context4.t0 = _context4["catch"](1);t = _context4.t0;case 10:if (!(this._refreshAccessTokenPromise = null, this._shouldRefreshAccessTokenHook = null, t)) {_context4.next = 12;break;}throw t;case 12:return _context4.abrupt("return", e);case 13:case "end":return _context4.stop();}}}, _callee4, this, [[1, 7]]);}));function refreshAccessToken() {return _refreshAccessToken2.apply(this, arguments);}return refreshAccessToken;}() }, { key: "_refreshAccessToken", value: function () {var _refreshAccessToken3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee5() {var _this$_cache$keys, e, t, n, s, r, o, i, a, _e8, _e9, _t5, _s5;return _regenerator.default.wrap(function _callee5$(_context5) {while (1) {switch (_context5.prev = _context5.next) {case 0:_this$_cache$keys = this._cache.keys, e = _this$_cache$keys.accessTokenKey, t = _this$_cache$keys.accessTokenExpireKey, n = _this$_cache$keys.refreshTokenKey, s = _this$_cache$keys.loginTypeKey, r = _this$_cache$keys.anonymousUuidKey;this._cache.removeStore(e), this._cache.removeStore(t);o = this._cache.getStore(n);if (o) {_context5.next = 5;break;}throw new Error("未登录CloudBase");case 5:i = { refresh_token: o };_context5.next = 8;return this.request("auth.fetchAccessTokenWithRefreshToken", i);case 8:a = _context5.sent;if (!a.data.code) {_context5.next = 21;break;}_e8 = a.data.code;if (!("SIGN_PARAM_INVALID" === _e8 || "REFRESH_TOKEN_EXPIRED" === _e8 || "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 20;break;}if (!(this._cache.getStore(s) === de.ANONYMOUS && "INVALID_REFRESH_TOKEN" === _e8)) {_context5.next = 19;break;}_e9 = this._cache.getStore(r);_t5 = this._cache.getStore(n);_context5.next = 17;return this.send("auth.signInAnonymously", { anonymous_uuid: _e9, refresh_token: _t5 });case 17:_s5 = _context5.sent;return _context5.abrupt("return", (this.setRefreshToken(_s5.refresh_token), this._refreshAccessToken()));case 19:oe(ce), this._cache.removeStore(n);case 20:throw new Error("刷新access token失败：" + a.data.code);case 21:if (!a.data.access_token) {_context5.next = 23;break;}return _context5.abrupt("return", (oe(le), this._cache.setStore(e, a.data.access_token), this._cache.setStore(t, a.data.access_token_expire + Date.now()), { accessToken: a.data.access_token, accessTokenExpire: a.data.access_token_expire }));case 23:a.data.refresh_token && (this._cache.removeStore(n), this._cache.setStore(n, a.data.refresh_token), this._refreshAccessToken());case 24:case "end":return _context5.stop();}}}, _callee5, this);}));function _refreshAccessToken() {return _refreshAccessToken3.apply(this, arguments);}return _refreshAccessToken;}() }, { key: "getAccessToken", value: function () {var _getAccessToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee6() {var _this$_cache$keys2, e, t, n, s, r, o;return _regenerator.default.wrap(function _callee6$(_context6) {while (1) {switch (_context6.prev = _context6.next) {case 0:_this$_cache$keys2 = this._cache.keys, e = _this$_cache$keys2.accessTokenKey, t = _this$_cache$keys2.accessTokenExpireKey, n = _this$_cache$keys2.refreshTokenKey;if (this._cache.getStore(n)) {_context6.next = 3;break;}throw new Error("refresh token不存在，登录状态异常");case 3:s = this._cache.getStore(e), r = this._cache.getStore(t), o = !0;_context6.t0 = this._shouldRefreshAccessTokenHook;if (!_context6.t0) {_context6.next = 9;break;}_context6.next = 8;return this._shouldRefreshAccessTokenHook(s, r);case 8:_context6.t0 = !_context6.sent;case 9:_context6.t1 = _context6.t0;if (!_context6.t1) {_context6.next = 12;break;}o = !1;case 12:return _context6.abrupt("return", (!s || !r || r < Date.now()) && o ? this.refreshAccessToken() : { accessToken: s, accessTokenExpire: r });case 13:case "end":return _context6.stop();}}}, _callee6, this);}));function getAccessToken() {return _getAccessToken.apply(this, arguments);}return getAccessToken;}() }, { key: "request", value: function () {var _request = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee7(e, t, n) {var s, r, o, _e10, i, _e11, _e12, a, c, u, h, l, d, f, p, g;return _regenerator.default.wrap(function _callee7$(_context7) {while (1) {switch (_context7.prev = _context7.next) {case 0:s = "x-tcb-trace_" + this.config.env;r = "application/x-www-form-urlencoded";o = _objectSpread({ action: e, env: this.config.env, dataVersion: "2019-08-16" }, t);if (!(-1 === fe.indexOf(e))) {_context7.next = 10;break;}_e10 = this._cache.keys.refreshTokenKey;_context7.t0 = this._cache.getStore(_e10);if (!_context7.t0) {_context7.next = 10;break;}_context7.next = 9;return this.getAccessToken();case 9:o.access_token = _context7.sent.accessToken;case 10:if ("storage.uploadFile" === e) {i = new FormData();for (_e11 in i) {i.hasOwnProperty(_e11) && void 0 !== i[_e11] && i.append(_e11, o[_e11]);}r = "multipart/form-data";} else {r = "application/json;charset=UTF-8", i = {};for (_e12 in o) {void 0 !== o[_e12] && (i[_e12] = o[_e12]);}}a = { headers: { "content-type": r } };n && n.onUploadProgress && (a.onUploadProgress = n.onUploadProgress);c = this._localCache.getStore(s);c && (a.headers["X-TCB-Trace"] = c);u = t.parse, h = t.inQuery, l = t.search;d = { env: this.config.env };u && (d.parse = !0), h && (d = _objectSpread(_objectSpread({}, h), d));f = function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};var s = /\?/.test(t);var r = "";for (var _e13 in n) {"" === r ? !s && (t += "?") : r += "&", r += "".concat(_e13, "=").concat(encodeURIComponent(n[_e13]));}return /^http(s)?\:\/\//.test(t += r) ? t : "".concat(e).concat(t);}(N, M, d);l && (f += l);_context7.next = 22;return this.post(_objectSpread({ url: f, data: i }, a));case 22:p = _context7.sent;g = p.header && p.header["x-tcb-trace"];if (!(g && this._localCache.setStore(s, g), 200 !== Number(p.status) && 200 !== Number(p.statusCode) || !p.data)) {_context7.next = 26;break;}throw new Error("network request error");case 26:return _context7.abrupt("return", p);case 27:case "end":return _context7.stop();}}}, _callee7, this);}));function request(_x4, _x5, _x6) {return _request.apply(this, arguments);}return request;}() }, { key: "send", value: function () {var _send = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee8(e) {var t,n,_n3,_args8 = arguments;return _regenerator.default.wrap(function _callee8$(_context8) {while (1) {switch (_context8.prev = _context8.next) {case 0:t = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : {};_context8.next = 3;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 3:n = _context8.sent;if (!("ACCESS_TOKEN_EXPIRED" === n.data.code && -1 === fe.indexOf(e))) {_context8.next = 13;break;}_context8.next = 7;return this.refreshAccessToken();case 7:_context8.next = 9;return this.request(e, t, { onUploadProgress: t.onUploadProgress });case 9:_n3 = _context8.sent;if (!_n3.data.code) {_context8.next = 12;break;}throw new Error("[".concat(_n3.data.code, "] ").concat(_n3.data.message));case 12:return _context8.abrupt("return", _n3.data);case 13:if (!n.data.code) {_context8.next = 15;break;}throw new Error("[".concat(n.data.code, "] ").concat(n.data.message));case 15:return _context8.abrupt("return", n.data);case 16:case "end":return _context8.stop();}}}, _callee8, this);}));function send(_x7) {return _send.apply(this, arguments);}return send;}() }, { key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys3 = this._cache.keys,t = _this$_cache$keys3.accessTokenKey,n = _this$_cache$keys3.accessTokenExpireKey,s = _this$_cache$keys3.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }]);return ye;}();var _e = {};function we(e) {return _e[e];}var ve = /*#__PURE__*/function () {function ve(e) {_classCallCheck(this, ve);this.config = e, this._cache = ee(e.env), this._request = we(e.env);}_createClass(ve, [{ key: "setRefreshToken", value: function setRefreshToken(e) {var _this$_cache$keys4 = this._cache.keys,t = _this$_cache$keys4.accessTokenKey,n = _this$_cache$keys4.accessTokenExpireKey,s = _this$_cache$keys4.refreshTokenKey;this._cache.removeStore(t), this._cache.removeStore(n), this._cache.setStore(s, e);} }, { key: "setAccessToken", value: function setAccessToken(e, t) {var _this$_cache$keys5 = this._cache.keys,n = _this$_cache$keys5.accessTokenKey,s = _this$_cache$keys5.accessTokenExpireKey;this._cache.setStore(n, e), this._cache.setStore(s, t);} }, { key: "refreshUserInfo", value: function () {var _refreshUserInfo = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee9() {var _yield$this$_request$, e;return _regenerator.default.wrap(function _callee9$(_context9) {while (1) {switch (_context9.prev = _context9.next) {case 0:_context9.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$ = _context9.sent;e = _yield$this$_request$.data;return _context9.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context9.stop();}}}, _callee9, this);}));function refreshUserInfo() {return _refreshUserInfo.apply(this, arguments);}return refreshUserInfo;}() }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e);} }]);return ve;}();var Se = /*#__PURE__*/function () {function Se(e) {_classCallCheck(this, Se);if (!e) throw new Error("envId is not defined");this._envId = e, this._cache = ee(this._envId), this._request = we(this._envId), this.setUserInfo();}_createClass(Se, [{ key: "linkWithTicket", value: function linkWithTicket(e) {if ("string" != typeof e) throw new Error("ticket must be string");return this._request.send("auth.linkWithTicket", { ticket: e });} }, { key: "linkWithRedirect", value: function linkWithRedirect(e) {e.signInWithRedirect();} }, { key: "updatePassword", value: function updatePassword(e, t) {return this._request.send("auth.updatePassword", { oldPassword: t, newPassword: e });} }, { key: "updateEmail", value: function updateEmail(e) {return this._request.send("auth.updateEmail", { newEmail: e });} }, { key: "updateUsername", value: function updateUsername(e) {if ("string" != typeof e) throw new Error("username must be a string");return this._request.send("auth.updateUsername", { username: e });} }, { key: "getLinkedUidList", value: function () {var _getLinkedUidList = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee10() {var _yield$this$_request$2, e, t, n;return _regenerator.default.wrap(function _callee10$(_context10) {while (1) {switch (_context10.prev = _context10.next) {case 0:_context10.next = 2;return this._request.send("auth.getLinkedUidList", {});case 2:_yield$this$_request$2 = _context10.sent;e = _yield$this$_request$2.data;t = !1;n = e.users;return _context10.abrupt("return", (n.forEach(function (e) {e.wxOpenId && e.wxPublicId && (t = !0);}), { users: n, hasPrimaryUid: t }));case 7:case "end":return _context10.stop();}}}, _callee10, this);}));function getLinkedUidList() {return _getLinkedUidList.apply(this, arguments);}return getLinkedUidList;}() }, { key: "setPrimaryUid", value: function setPrimaryUid(e) {return this._request.send("auth.setPrimaryUid", { uid: e });} }, { key: "unlink", value: function unlink(e) {return this._request.send("auth.unlink", { platform: e });} }, { key: "update", value: function () {var _update = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee11(e) {var t, n, s, r, o, i, _yield$this$_request$3, a;return _regenerator.default.wrap(function _callee11$(_context11) {while (1) {switch (_context11.prev = _context11.next) {case 0:t = e.nickName;n = e.gender;s = e.avatarUrl;r = e.province;o = e.country;i = e.city;_context11.next = 8;return this._request.send("auth.updateUserInfo", { nickName: t, gender: n, avatarUrl: s, province: r, country: o, city: i });case 8:_yield$this$_request$3 = _context11.sent;a = _yield$this$_request$3.data;this.setLocalUserInfo(a);case 11:case "end":return _context11.stop();}}}, _callee11, this);}));function update(_x8) {return _update.apply(this, arguments);}return update;}() }, { key: "refresh", value: function () {var _refresh = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee12() {var _yield$this$_request$4, e;return _regenerator.default.wrap(function _callee12$(_context12) {while (1) {switch (_context12.prev = _context12.next) {case 0:_context12.next = 2;return this._request.send("auth.getUserInfo", {});case 2:_yield$this$_request$4 = _context12.sent;e = _yield$this$_request$4.data;return _context12.abrupt("return", (this.setLocalUserInfo(e), e));case 5:case "end":return _context12.stop();}}}, _callee12, this);}));function refresh() {return _refresh.apply(this, arguments);}return refresh;}() }, { key: "setUserInfo", value: function setUserInfo() {var _this10 = this;var e = this._cache.keys.userInfoKey,t = this._cache.getStore(e);["uid", "loginType", "openid", "wxOpenId", "wxPublicId", "unionId", "qqMiniOpenId", "email", "hasPassword", "customUserId", "nickName", "gender", "avatarUrl"].forEach(function (e) {_this10[e] = t[e];}), this.location = { country: t.country, province: t.province, city: t.city };} }, { key: "setLocalUserInfo", value: function setLocalUserInfo(e) {var t = this._cache.keys.userInfoKey;this._cache.setStore(t, e), this.setUserInfo();} }]);return Se;}();var ke = /*#__PURE__*/function () {function ke(e) {_classCallCheck(this, ke);if (!e) throw new Error("envId is not defined");this._cache = ee(e);var _this$_cache$keys6 = this._cache.keys,t = _this$_cache$keys6.refreshTokenKey,n = _this$_cache$keys6.accessTokenKey,s = _this$_cache$keys6.accessTokenExpireKey,r = this._cache.getStore(t),o = this._cache.getStore(n),i = this._cache.getStore(s);this.credential = { refreshToken: r, accessToken: o, accessTokenExpire: i }, this.user = new Se(e);}_createClass(ke, [{ key: "isAnonymousAuth", get: function get() {return this.loginType === de.ANONYMOUS;} }, { key: "isCustomAuth", get: function get() {return this.loginType === de.CUSTOM;} }, { key: "isWeixinAuth", get: function get() {return this.loginType === de.WECHAT || this.loginType === de.WECHAT_OPEN || this.loginType === de.WECHAT_PUBLIC;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return ke;}();var Te = /*#__PURE__*/function (_ve) {_inherits(Te, _ve);var _super5 = _createSuper(Te);function Te() {_classCallCheck(this, Te);return _super5.apply(this, arguments);}_createClass(Te, [{ key: "signIn", value: function () {var _signIn = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee13() {var _this$_cache$keys7, e, t, n, s, r, _e14;return _regenerator.default.wrap(function _callee13$(_context13) {while (1) {switch (_context13.prev = _context13.next) {case 0:this._cache.updatePersistence("local");_this$_cache$keys7 = this._cache.keys;e = _this$_cache$keys7.anonymousUuidKey;t = _this$_cache$keys7.refreshTokenKey;n = this._cache.getStore(e) || void 0;s = this._cache.getStore(t) || void 0;_context13.next = 8;return this._request.send("auth.signInAnonymously", { anonymous_uuid: n, refresh_token: s });case 8:r = _context13.sent;if (!(r.uuid && r.refresh_token)) {_context13.next = 20;break;}this._setAnonymousUUID(r.uuid);this.setRefreshToken(r.refresh_token);_context13.next = 14;return this._request.refreshAccessToken();case 14:oe(ae);oe(ue, { env: this.config.env, loginType: de.ANONYMOUS, persistence: "local" });_e14 = new ke(this.config.env);_context13.next = 19;return _e14.user.refresh();case 19:return _context13.abrupt("return", _e14);case 20:throw new Error("匿名登录失败");case 21:case "end":return _context13.stop();}}}, _callee13, this);}));function signIn() {return _signIn.apply(this, arguments);}return signIn;}() }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee14(e) {var _this$_cache$keys8, t, n, s, r, o;return _regenerator.default.wrap(function _callee14$(_context14) {while (1) {switch (_context14.prev = _context14.next) {case 0:_this$_cache$keys8 = this._cache.keys;t = _this$_cache$keys8.anonymousUuidKey;n = _this$_cache$keys8.refreshTokenKey;s = this._cache.getStore(t);r = this._cache.getStore(n);_context14.next = 7;return this._request.send("auth.linkAndRetrieveDataWithTicket", { anonymous_uuid: s, refresh_token: r, ticket: e });case 7:o = _context14.sent;if (!o.refresh_token) {_context14.next = 16;break;}this._clearAnonymousUUID();this.setRefreshToken(o.refresh_token);_context14.next = 13;return this._request.refreshAccessToken();case 13:oe(he, { env: this.config.env });oe(ue, { loginType: de.CUSTOM, persistence: "local" });return _context14.abrupt("return", { credential: { refreshToken: o.refresh_token } });case 16:throw new Error("匿名转化失败");case 17:case "end":return _context14.stop();}}}, _callee14, this);}));function linkAndRetrieveDataWithTicket(_x9) {return _linkAndRetrieveDataWithTicket.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "_setAnonymousUUID", value: function _setAnonymousUUID(e) {var _this$_cache$keys9 = this._cache.keys,t = _this$_cache$keys9.anonymousUuidKey,n = _this$_cache$keys9.loginTypeKey;this._cache.removeStore(t), this._cache.setStore(t, e), this._cache.setStore(n, de.ANONYMOUS);} }, { key: "_clearAnonymousUUID", value: function _clearAnonymousUUID() {this._cache.removeStore(this._cache.keys.anonymousUuidKey);} }]);return Te;}(ve);var Pe = /*#__PURE__*/function (_ve2) {_inherits(Pe, _ve2);var _super6 = _createSuper(Pe);function Pe() {_classCallCheck(this, Pe);return _super6.apply(this, arguments);}_createClass(Pe, [{ key: "signIn", value: function () {var _signIn2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee15(e) {var t, n;return _regenerator.default.wrap(function _callee15$(_context15) {while (1) {switch (_context15.prev = _context15.next) {case 0:if (!("string" != typeof e)) {_context15.next = 2;break;}throw new Error("ticket must be a string");case 2:t = this._cache.keys.refreshTokenKey;_context15.next = 5;return this._request.send("auth.signInWithTicket", { ticket: e, refresh_token: this._cache.getStore(t) || "" });case 5:n = _context15.sent;if (!n.refresh_token) {_context15.next = 15;break;}this.setRefreshToken(n.refresh_token);_context15.next = 10;return this._request.refreshAccessToken();case 10:oe(ae);oe(ue, { env: this.config.env, loginType: de.CUSTOM, persistence: this.config.persistence });_context15.next = 14;return this.refreshUserInfo();case 14:return _context15.abrupt("return", new ke(this.config.env));case 15:throw new Error("自定义登录失败");case 16:case "end":return _context15.stop();}}}, _callee15, this);}));function signIn(_x10) {return _signIn2.apply(this, arguments);}return signIn;}() }]);return Pe;}(ve);var Ie = /*#__PURE__*/function (_ve3) {_inherits(Ie, _ve3);var _super7 = _createSuper(Ie);function Ie() {_classCallCheck(this, Ie);return _super7.apply(this, arguments);}_createClass(Ie, [{ key: "signIn", value: function () {var _signIn3 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee16(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee16$(_context16) {while (1) {switch (_context16.prev = _context16.next) {case 0:if (!("string" != typeof e)) {_context16.next = 2;break;}throw new Error("email must be a string");case 2:n = this._cache.keys.refreshTokenKey;_context16.next = 5;return this._request.send("auth.signIn", { loginType: "EMAIL", email: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 5:s = _context16.sent;r = s.refresh_token;o = s.access_token;i = s.access_token_expire;if (!r) {_context16.next = 22;break;}this.setRefreshToken(r);if (!(o && i)) {_context16.next = 15;break;}this.setAccessToken(o, i);_context16.next = 17;break;case 15:_context16.next = 17;return this._request.refreshAccessToken();case 17:_context16.next = 19;return this.refreshUserInfo();case 19:oe(ae);oe(ue, { env: this.config.env, loginType: de.EMAIL, persistence: this.config.persistence });return _context16.abrupt("return", new ke(this.config.env));case 22:throw s.code ? new Error("\u90AE\u7BB1\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("邮箱登录失败");case 23:case "end":return _context16.stop();}}}, _callee16, this);}));function signIn(_x11, _x12) {return _signIn3.apply(this, arguments);}return signIn;}() }, { key: "activate", value: function () {var _activate = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee17(e) {return _regenerator.default.wrap(function _callee17$(_context17) {while (1) {switch (_context17.prev = _context17.next) {case 0:return _context17.abrupt("return", this._request.send("auth.activateEndUserMail", { token: e }));case 1:case "end":return _context17.stop();}}}, _callee17, this);}));function activate(_x13) {return _activate.apply(this, arguments);}return activate;}() }, { key: "resetPasswordWithToken", value: function () {var _resetPasswordWithToken = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee18(e, t) {return _regenerator.default.wrap(function _callee18$(_context18) {while (1) {switch (_context18.prev = _context18.next) {case 0:return _context18.abrupt("return", this._request.send("auth.resetPasswordWithToken", { token: e, newPassword: t }));case 1:case "end":return _context18.stop();}}}, _callee18, this);}));function resetPasswordWithToken(_x14, _x15) {return _resetPasswordWithToken.apply(this, arguments);}return resetPasswordWithToken;}() }]);return Ie;}(ve);var Ae = /*#__PURE__*/function (_ve4) {_inherits(Ae, _ve4);var _super8 = _createSuper(Ae);function Ae() {_classCallCheck(this, Ae);return _super8.apply(this, arguments);}_createClass(Ae, [{ key: "signIn", value: function () {var _signIn4 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee19(e, t) {var n, s, r, o, i;return _regenerator.default.wrap(function _callee19$(_context19) {while (1) {switch (_context19.prev = _context19.next) {case 0:if (!("string" != typeof e)) {_context19.next = 2;break;}throw new Error("username must be a string");case 2:"string" != typeof t && (t = "", console.warn("password is empty"));n = this._cache.keys.refreshTokenKey;_context19.next = 6;return this._request.send("auth.signIn", { loginType: de.USERNAME, username: e, password: t, refresh_token: this._cache.getStore(n) || "" });case 6:s = _context19.sent;r = s.refresh_token;o = s.access_token_expire;i = s.access_token;if (!r) {_context19.next = 23;break;}this.setRefreshToken(r);if (!(i && o)) {_context19.next = 16;break;}this.setAccessToken(i, o);_context19.next = 18;break;case 16:_context19.next = 18;return this._request.refreshAccessToken();case 18:_context19.next = 20;return this.refreshUserInfo();case 20:oe(ae);oe(ue, { env: this.config.env, loginType: de.USERNAME, persistence: this.config.persistence });return _context19.abrupt("return", new ke(this.config.env));case 23:throw s.code ? new Error("\u7528\u6237\u540D\u5BC6\u7801\u767B\u5F55\u5931\u8D25: [".concat(s.code, "] ").concat(s.message)) : new Error("用户名密码登录失败");case 24:case "end":return _context19.stop();}}}, _callee19, this);}));function signIn(_x16, _x17) {return _signIn4.apply(this, arguments);}return signIn;}() }]);return Ae;}(ve);var Ee = /*#__PURE__*/function () {function Ee(e) {_classCallCheck(this, Ee);this.config = e, this._cache = ee(e.env), this._request = we(e.env), this._onAnonymousConverted = this._onAnonymousConverted.bind(this), this._onLoginTypeChanged = this._onLoginTypeChanged.bind(this), re(ue, this._onLoginTypeChanged);}_createClass(Ee, [{ key: "anonymousAuthProvider", value: function anonymousAuthProvider() {return new Te(this.config);} }, { key: "customAuthProvider", value: function customAuthProvider() {return new Pe(this.config);} }, { key: "emailAuthProvider", value: function emailAuthProvider() {return new Ie(this.config);} }, { key: "usernameAuthProvider", value: function usernameAuthProvider() {return new Ae(this.config);} }, { key: "signInAnonymously", value: function () {var _signInAnonymously = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee20() {return _regenerator.default.wrap(function _callee20$(_context20) {while (1) {switch (_context20.prev = _context20.next) {case 0:return _context20.abrupt("return", new Te(this.config).signIn());case 1:case "end":return _context20.stop();}}}, _callee20, this);}));function signInAnonymously() {return _signInAnonymously.apply(this, arguments);}return signInAnonymously;}() }, { key: "signInWithEmailAndPassword", value: function () {var _signInWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee21(e, t) {return _regenerator.default.wrap(function _callee21$(_context21) {while (1) {switch (_context21.prev = _context21.next) {case 0:return _context21.abrupt("return", new Ie(this.config).signIn(e, t));case 1:case "end":return _context21.stop();}}}, _callee21, this);}));function signInWithEmailAndPassword(_x18, _x19) {return _signInWithEmailAndPassword.apply(this, arguments);}return signInWithEmailAndPassword;}() }, { key: "signInWithUsernameAndPassword", value: function signInWithUsernameAndPassword(e, t) {return new Ae(this.config).signIn(e, t);} }, { key: "linkAndRetrieveDataWithTicket", value: function () {var _linkAndRetrieveDataWithTicket2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee22(e) {return _regenerator.default.wrap(function _callee22$(_context22) {while (1) {switch (_context22.prev = _context22.next) {case 0:this._anonymousAuthProvider || (this._anonymousAuthProvider = new Te(this.config)), re(he, this._onAnonymousConverted);_context22.next = 3;return this._anonymousAuthProvider.linkAndRetrieveDataWithTicket(e);case 3:return _context22.abrupt("return", _context22.sent);case 4:case "end":return _context22.stop();}}}, _callee22, this);}));function linkAndRetrieveDataWithTicket(_x20) {return _linkAndRetrieveDataWithTicket2.apply(this, arguments);}return linkAndRetrieveDataWithTicket;}() }, { key: "signOut", value: function () {var _signOut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee23() {var _this$_cache$keys10, e, t, n, s, r;return _regenerator.default.wrap(function _callee23$(_context23) {while (1) {switch (_context23.prev = _context23.next) {case 0:if (!(this.loginType === de.ANONYMOUS)) {_context23.next = 2;break;}throw new Error("匿名用户不支持登出操作");case 2:_this$_cache$keys10 = this._cache.keys, e = _this$_cache$keys10.refreshTokenKey, t = _this$_cache$keys10.accessTokenKey, n = _this$_cache$keys10.accessTokenExpireKey, s = this._cache.getStore(e);if (s) {_context23.next = 5;break;}return _context23.abrupt("return");case 5:_context23.next = 7;return this._request.send("auth.logout", { refresh_token: s });case 7:r = _context23.sent;return _context23.abrupt("return", (this._cache.removeStore(e), this._cache.removeStore(t), this._cache.removeStore(n), oe(ae), oe(ue, { env: this.config.env, loginType: de.NULL, persistence: this.config.persistence }), r));case 9:case "end":return _context23.stop();}}}, _callee23, this);}));function signOut() {return _signOut.apply(this, arguments);}return signOut;}() }, { key: "signUpWithEmailAndPassword", value: function () {var _signUpWithEmailAndPassword = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee24(e, t) {return _regenerator.default.wrap(function _callee24$(_context24) {while (1) {switch (_context24.prev = _context24.next) {case 0:return _context24.abrupt("return", this._request.send("auth.signUpWithEmailAndPassword", { email: e, password: t }));case 1:case "end":return _context24.stop();}}}, _callee24, this);}));function signUpWithEmailAndPassword(_x21, _x22) {return _signUpWithEmailAndPassword.apply(this, arguments);}return signUpWithEmailAndPassword;}() }, { key: "sendPasswordResetEmail", value: function () {var _sendPasswordResetEmail = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee25(e) {return _regenerator.default.wrap(function _callee25$(_context25) {while (1) {switch (_context25.prev = _context25.next) {case 0:return _context25.abrupt("return", this._request.send("auth.sendPasswordResetEmail", { email: e }));case 1:case "end":return _context25.stop();}}}, _callee25, this);}));function sendPasswordResetEmail(_x23) {return _sendPasswordResetEmail.apply(this, arguments);}return sendPasswordResetEmail;}() }, { key: "onLoginStateChanged", value: function onLoginStateChanged(e) {var _this11 = this;re(ae, function () {var t = _this11.hasLoginState();e.call(_this11, t);});var t = this.hasLoginState();e.call(this, t);} }, { key: "onLoginStateExpired", value: function onLoginStateExpired(e) {re(ce, e.bind(this));} }, { key: "onAccessTokenRefreshed", value: function onAccessTokenRefreshed(e) {re(le, e.bind(this));} }, { key: "onAnonymousConverted", value: function onAnonymousConverted(e) {re(he, e.bind(this));} }, { key: "onLoginTypeChanged", value: function onLoginTypeChanged(e) {var _this12 = this;re(ue, function () {var t = _this12.hasLoginState();e.call(_this12, t);});} }, { key: "getAccessToken", value: function () {var _getAccessToken2 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee26() {return _regenerator.default.wrap(function _callee26$(_context26) {while (1) {switch (_context26.prev = _context26.next) {case 0:_context26.next = 2;return this._request.getAccessToken();case 2:_context26.t0 = _context26.sent.accessToken;_context26.t1 = this.config.env;return _context26.abrupt("return", { accessToken: _context26.t0, env: _context26.t1 });case 5:case "end":return _context26.stop();}}}, _callee26, this);}));function getAccessToken() {return _getAccessToken2.apply(this, arguments);}return getAccessToken;}() }, { key: "hasLoginState", value: function hasLoginState() {var e = this._cache.keys.refreshTokenKey;return this._cache.getStore(e) ? new ke(this.config.env) : null;} }, { key: "isUsernameRegistered", value: function () {var _isUsernameRegistered = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee27(e) {var _yield$this$_request$5, t;return _regenerator.default.wrap(function _callee27$(_context27) {while (1) {switch (_context27.prev = _context27.next) {case 0:if (!("string" != typeof e)) {_context27.next = 2;break;}throw new Error("username must be a string");case 2:_context27.next = 4;return this._request.send("auth.isUsernameRegistered", { username: e });case 4:_yield$this$_request$5 = _context27.sent;t = _yield$this$_request$5.data;return _context27.abrupt("return", t && t.isRegistered);case 7:case "end":return _context27.stop();}}}, _callee27, this);}));function isUsernameRegistered(_x24) {return _isUsernameRegistered.apply(this, arguments);}return isUsernameRegistered;}() }, { key: "getLoginState", value: function getLoginState() {return Promise.resolve(this.hasLoginState());} }, { key: "signInWithTicket", value: function () {var _signInWithTicket = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee28(e) {return _regenerator.default.wrap(function _callee28$(_context28) {while (1) {switch (_context28.prev = _context28.next) {case 0:return _context28.abrupt("return", new Pe(this.config).signIn(e));case 1:case "end":return _context28.stop();}}}, _callee28, this);}));function signInWithTicket(_x25) {return _signInWithTicket.apply(this, arguments);}return signInWithTicket;}() }, { key: "shouldRefreshAccessToken", value: function shouldRefreshAccessToken(e) {this._request._shouldRefreshAccessTokenHook = e.bind(this);} }, { key: "getUserInfo", value: function getUserInfo() {return this._request.send("auth.getUserInfo", {}).then(function (e) {return e.code ? e : _objectSpread(_objectSpread({}, e.data), {}, { requestId: e.seqId });});} }, { key: "getAuthHeader", value: function getAuthHeader() {var _this$_cache$keys11 = this._cache.keys,e = _this$_cache$keys11.refreshTokenKey,t = _this$_cache$keys11.accessTokenKey,n = this._cache.getStore(e);return { "x-cloudbase-credentials": this._cache.getStore(t) + "/@@/" + n };} }, { key: "_onAnonymousConverted", value: function _onAnonymousConverted(e) {var t = e.data.env;t === this.config.env && this._cache.updatePersistence(this.config.persistence);} }, { key: "_onLoginTypeChanged", value: function _onLoginTypeChanged(e) {var _e$data = e.data,t = _e$data.loginType,n = _e$data.persistence,s = _e$data.env;s === this.config.env && (this._cache.updatePersistence(n), this._cache.setStore(this._cache.keys.loginTypeKey, t));} }, { key: "currentUser", get: function get() {var e = this.hasLoginState();return e && e.user || null;} }, { key: "loginType", get: function get() {return this._cache.getStore(this._cache.keys.loginTypeKey);} }]);return Ee;}();var be = function be(e, t) {t = t || K();var n = we(this.config.env),s = e.cloudPath,r = e.filePath,o = e.onUploadProgress,_e$fileType = e.fileType,i = _e$fileType === void 0 ? "image" : _e$fileType;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {var _e$data2 = e.data,a = _e$data2.url,c = _e$data2.authorization,u = _e$data2.token,h = _e$data2.fileId,l = _e$data2.cosFileId,d = e.requestId,f = { key: s, signature: c, "x-cos-meta-fileid": l, success_action_status: "201", "x-cos-security-token": u };n.upload({ url: a, data: f, file: r, name: s, fileType: i, onUploadProgress: o }).then(function (e) {201 === e.statusCode ? t(null, { fileID: h, requestId: d }) : t(new Error("STORAGE_REQUEST_FAIL: " + e.data));}).catch(function (e) {t(e);});}).catch(function (e) {t(e);}), t.promise;},Oe = function Oe(e, t) {t = t || K();var n = we(this.config.env),s = e.cloudPath;return n.send("storage.getUploadMetadata", { path: s }).then(function (e) {t(null, e);}).catch(function (e) {t(e);}), t.promise;},Ue = function Ue(_ref5, t) {var e = _ref5.fileList;if (t = t || K(), !e || !Array.isArray(e)) return { code: "INVALID_PARAM", message: "fileList必须是非空的数组" };var _iterator3 = _createForOfIteratorHelper(e),_step3;try {for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {var _t6 = _step3.value;if (!_t6 || "string" != typeof _t6) return { code: "INVALID_PARAM", message: "fileList的元素必须是非空的字符串" };}} catch (err) {_iterator3.e(err);} finally {_iterator3.f();}var n = { fileid_list: e };return we(this.config.env).send("storage.batchDeleteFile", n).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.delete_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},Ce = function Ce(_ref6, t) {var e = _ref6.fileList;t = t || K(), e && Array.isArray(e) || t(null, { code: "INVALID_PARAM", message: "fileList必须是非空的数组" });var n = [];var _iterator4 = _createForOfIteratorHelper(e),_step4;try {for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {var _s6 = _step4.value;"object" == typeof _s6 ? (_s6.hasOwnProperty("fileID") && _s6.hasOwnProperty("maxAge") || t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是包含fileID和maxAge的对象" }), n.push({ fileid: _s6.fileID, max_age: _s6.maxAge })) : "string" == typeof _s6 ? n.push({ fileid: _s6 }) : t(null, { code: "INVALID_PARAM", message: "fileList的元素必须是字符串" });}} catch (err) {_iterator4.e(err);} finally {_iterator4.f();}var s = { file_list: n };return we(this.config.env).send("storage.batchGetDownloadUrl", s).then(function (e) {e.code ? t(null, e) : t(null, { fileList: e.data.download_list, requestId: e.requestId });}).catch(function (e) {t(e);}), t.promise;},De = /*#__PURE__*/function () {var _ref8 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee29(_ref7, t) {var e, n, s, r;return _regenerator.default.wrap(function _callee29$(_context29) {while (1) {switch (_context29.prev = _context29.next) {case 0:e = _ref7.fileID;_context29.next = 3;return Ce.call(this, { fileList: [{ fileID: e, maxAge: 600 }] });case 3:n = _context29.sent.fileList[0];if (!("SUCCESS" !== n.code)) {_context29.next = 6;break;}return _context29.abrupt("return", t ? t(n) : new Promise(function (e) {e(n);}));case 6:s = we(this.config.env);r = n.download_url;if (!(r = encodeURI(r), !t)) {_context29.next = 10;break;}return _context29.abrupt("return", s.download({ url: r }));case 10:_context29.t0 = t;_context29.next = 13;return s.download({ url: r });case 13:_context29.t1 = _context29.sent;(0, _context29.t0)(_context29.t1);case 15:case "end":return _context29.stop();}}}, _callee29, this);}));return function De(_x26, _x27) {return _ref8.apply(this, arguments);};}(),xe = function xe(_ref9, o) {var e = _ref9.name,t = _ref9.data,n = _ref9.query,s = _ref9.parse,r = _ref9.search;var i = o || K();var a;try {a = t ? JSON.stringify(t) : "";} catch (e) {return Promise.reject(e);}if (!e) return Promise.reject(new Error("函数名不能为空"));var c = { inQuery: n, parse: s, search: r, function_name: e, request_data: a };return we(this.config.env).send("functions.invokeFunction", c).then(function (e) {if (e.code) i(null, e);else {var _t7 = e.data.response_data;if (s) i(null, { result: _t7, requestId: e.requestId });else try {_t7 = JSON.parse(e.data.response_data), i(null, { result: _t7, requestId: e.requestId });} catch (e) {i(new Error("response data must be json"));}}return i.promise;}).catch(function (e) {i(e);}), i.promise;},Re = { timeout: 15e3, persistence: "session" },qe = {};var Fe = /*#__PURE__*/function () {function Fe(e) {_classCallCheck(this, Fe);this.config = e || this.config, this.authObj = void 0;}_createClass(Fe, [{ key: "init", value: function init(e) {switch (V.adapter || (this.requestClient = new V.adapter.reqClass({ timeout: e.timeout || 5e3, timeoutMsg: "\u8BF7\u6C42\u5728".concat((e.timeout || 5e3) / 1e3, "s\u5185\u672A\u5B8C\u6210\uFF0C\u5DF2\u4E2D\u65AD") })), this.config = _objectSpread(_objectSpread({}, Re), e), !0) {case this.config.timeout > 6e5:console.warn("timeout大于可配置上限[10分钟]，已重置为上限数值"), this.config.timeout = 6e5;break;case this.config.timeout < 100:console.warn("timeout小于可配置下限[100ms]，已重置为下限数值"), this.config.timeout = 100;}return new Fe(this.config);} }, { key: "auth", value: function auth() {var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref10.persistence;if (this.authObj) return this.authObj;var t = e || V.adapter.primaryStorage || Re.persistence;var n;return t !== this.config.persistence && (this.config.persistence = t), function (e) {var t = e.env;Q[t] = new G(e), Z[t] = new G(_objectSpread(_objectSpread({}, e), {}, { persistence: "local" }));}(this.config), n = this.config, _e[n.env] = new ye(n), this.authObj = new Ee(this.config), this.authObj;} }, { key: "on", value: function on(e, t) {return re.apply(this, [e, t]);} }, { key: "off", value: function off(e, t) {return ie.apply(this, [e, t]);} }, { key: "callFunction", value: function callFunction(e, t) {return xe.apply(this, [e, t]);} }, { key: "deleteFile", value: function deleteFile(e, t) {return Ue.apply(this, [e, t]);} }, { key: "getTempFileURL", value: function getTempFileURL(e, t) {return Ce.apply(this, [e, t]);} }, { key: "downloadFile", value: function downloadFile(e, t) {return De.apply(this, [e, t]);} }, { key: "uploadFile", value: function uploadFile(e, t) {return be.apply(this, [e, t]);} }, { key: "getUploadMetadata", value: function getUploadMetadata(e, t) {return Oe.apply(this, [e, t]);} }, { key: "registerExtension", value: function registerExtension(e) {qe[e.name] = e;} }, { key: "invokeExtension", value: function () {var _invokeExtension = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee30(e, t) {var n;return _regenerator.default.wrap(function _callee30$(_context30) {while (1) {switch (_context30.prev = _context30.next) {case 0:n = qe[e];if (n) {_context30.next = 3;break;}throw Error("\u6269\u5C55".concat(e, " \u5FC5\u987B\u5148\u6CE8\u518C"));case 3:_context30.next = 5;return n.invoke(t, this);case 5:return _context30.abrupt("return", _context30.sent);case 6:case "end":return _context30.stop();}}}, _callee30, this);}));function invokeExtension(_x28, _x29) {return _invokeExtension.apply(this, arguments);}return invokeExtension;}() }, { key: "useAdapters", value: function useAdapters(e) {var _ref11 = z(e) || {},t = _ref11.adapter,n = _ref11.runtime;t && (V.adapter = t), n && (V.runtime = n);} }]);return Fe;}();var Le = new Fe();function Ne(e, t, n) {void 0 === n && (n = {});var s = /\?/.test(t),r = "";for (var o in n) {"" === r ? !s && (t += "?") : r += "&", r += o + "=" + encodeURIComponent(n[o]);}return /^http(s)?:\/\//.test(t += r) ? t : "" + e + t;}var Me = /*#__PURE__*/function () {function Me() {_classCallCheck(this, Me);}_createClass(Me, [{ key: "post", value: function post(e) {var t = e.url,n = e.data,s = e.headers;return new Promise(function (e, r) {q.request({ url: Ne("https:", t), data: n, method: "POST", header: s, success: function success(t) {e(t);}, fail: function fail(e) {r(e);} });});} }, { key: "upload", value: function upload(e) {return new Promise(function (t, n) {var s = e.url,r = e.file,o = e.data,i = e.headers,a = e.fileType,c = q.uploadFile({ url: Ne("https:", s), name: "file", formData: Object.assign({}, o), filePath: r, fileType: a, header: i, success: function success(e) {var n = { statusCode: e.statusCode, data: e.data || {} };200 === e.statusCode && o.success_action_status && (n.statusCode = parseInt(o.success_action_status, 10)), t(n);}, fail: function fail(e) {u && "mp-alipay" === h && console.warn("支付宝小程序开发工具上传腾讯云时无法准确判断是否上传成功，请使用真机测试"), n(new Error(e.errMsg || "uploadFile:fail"));} });"function" == typeof e.onUploadProgress && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (t) {e.onUploadProgress({ loaded: t.totalBytesSent, total: t.totalBytesExpectedToSend });});});} }]);return Me;}();var je = { setItem: function setItem(e, t) {q.setStorageSync(e, t);}, getItem: function getItem(e) {return q.getStorageSync(e);}, removeItem: function removeItem(e) {q.removeStorageSync(e);}, clear: function clear() {q.clearStorageSync();} };var $e = { genAdapter: function genAdapter() {return { root: {}, reqClass: Me, localStorage: je, primaryStorage: "local" };}, isMatch: function isMatch() {return !0;}, runtime: "uni_app" };Le.useAdapters($e);var Ke = Le,Be = Ke.init;Ke.init = function (e) {e.env = e.spaceId;var t = Be.call(this, e);t.config.provider = "tencent", t.config.spaceId = e.spaceId;var n = t.auth;return t.auth = function (e) {var t = n.call(this, e);return ["linkAndRetrieveDataWithTicket", "signInAnonymously", "signOut", "getAccessToken", "getLoginState", "signInWithTicket", "getUserInfo"].forEach(function (e) {t[e] = k(t[e]).bind(t);}), t;}, t.customAuth = t.auth, t;};var He = /*#__PURE__*/function (_F) {_inherits(He, _F);var _super9 = _createSuper(He);function He() {_classCallCheck(this, He);return _super9.apply(this, arguments);}_createClass(He, [{ key: "getAccessToken", value: function getAccessToken() {var _this13 = this;return new Promise(function (e, t) {_this13.setAccessToken("Anonymous_Access_token"), e("Anonymous_Access_token");});} }, { key: "setupRequest", value: function setupRequest(e, t) {var n = Object.assign({}, e, { spaceId: this.config.spaceId, timestamp: Date.now() }),s = { "Content-Type": "application/json" };"auth" !== t && (n.token = this.accessToken, s["x-basement-token"] = this.accessToken), s["x-serverless-sign"] = R.sign(n, this.config.clientSecret);var r = C(),o = r.APPID,i = r.PLATFORM,a = r.DEVICEID,c = r.CLIENT_SDK_VERSION;return s["x-client-platform"] = i, s["x-client-appid"] = o, s["x-client-device-id"] = a, s["x-client-version"] = c, s["x-client-token"] = q.getStorageSync("uni_id_token"), { url: this.config.requestUrl, method: "POST", data: n, dataType: "json", header: JSON.parse(JSON.stringify(s)) };} }, { key: "uploadFileToOSS", value: function uploadFileToOSS(_ref12) {var _this14 = this;var e = _ref12.url,t = _ref12.formData,n = _ref12.name,s = _ref12.filePath,r = _ref12.fileType,o = _ref12.onUploadProgress;return new Promise(function (i, a) {var c = _this14.adapter.uploadFile({ url: e, formData: t, name: n, filePath: s, fileType: r, success: function success(e) {e && e.statusCode < 400 ? i(e) : a(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));}, fail: function fail(e) {a(new T({ code: e.code || "UPLOAD_FAILED", message: e.message || e.errMsg || "文件上传失败" }));} });"function" == typeof o && c && "function" == typeof c.onProgressUpdate && c.onProgressUpdate(function (e) {o({ loaded: e.totalBytesSent, total: e.totalBytesExpectedToSend });});});} }, { key: "uploadFile", value: function uploadFile(_ref13) {var _this15 = this;var e = _ref13.filePath,t = _ref13.cloudPath,_ref13$fileType = _ref13.fileType,n = _ref13$fileType === void 0 ? "image" : _ref13$fileType,s = _ref13.onUploadProgress;if (!t) throw new T({ code: "CLOUDPATH_REQUIRED", message: "cloudPath不可为空" });var r;return this.getOSSUploadOptionsFromPath({ cloudPath: t }).then(function (t) {var _t$result = t.result,o = _t$result.url,i = _t$result.formData,a = _t$result.name,c = _t$result.fileUrl;r = c;var u = { url: o, formData: i, name: a, filePath: e, fileType: n };return _this15.uploadFileToOSS(Object.assign({}, u, { onUploadProgress: s }));}).then(function () {return _this15.reportOSSUpload({ cloudPath: t });}).then(function (t) {return new Promise(function (n, s) {t.success ? n({ success: !0, filePath: e, fileID: r }) : s(new T({ code: "UPLOAD_FAILED", message: "文件上传失败" }));});});} }]);return He;}(F);var We = { init: function init(e) {var t = new He(e),n = { signInAnonymously: function signInAnonymously() {return t.authorize();}, getLoginState: function getLoginState() {return Promise.resolve(!1);} };return t.auth = function () {return n;}, t.customAuth = t.auth, t;} };var ze, Ve;function Je(_ref14) {var e = _ref14.name,t = _ref14.data,n = _ref14.spaceId,s = _ref14.provider;ze || (ze = C(), Ve = { ak: E.appid, p: "android" === O ? "a" : "i", ut: x(), uuid: D() });var r = JSON.parse(JSON.stringify(t || {})),o = e,i = n,a = { tencent: "t", aliyun: "a" }[s];{var _e15 = Object.assign({}, Ve, { fn: o, sid: i, pvd: a });Object.assign(r, { clientInfo: ze, uniCloudClientInfo: encodeURIComponent(JSON.stringify(_e15)) });var _uni$getSystemInfoSyn2 = uni.getSystemInfoSync(),_t8 = _uni$getSystemInfoSyn2.deviceId;r.uniCloudDeviceId = _t8;}if (!r.uniIdToken) {var _e16 = q.getStorageSync("uni_id_token") || q.getStorageSync("uniIdToken");_e16 && (r.uniIdToken = _e16);}return r;}function Ye(_ref15) {var _this16 = this;var e = _ref15.name,t = _ref15.data;var n = this.localAddress,s = this.localPort,r = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider],o = this.config.spaceId,i = "http://".concat(n, ":").concat(s, "/system/check-function"),a = "http://".concat(n, ":").concat(s, "/cloudfunctions/").concat(e);return new Promise(function (t, n) {q.request({ method: "POST", url: i, data: { name: e, platform: h, provider: r, spaceId: o }, timeout: 3e3, success: function success(e) {t(e);}, fail: function fail() {t({ data: { code: "NETWORK_ERROR", message: "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下，自动切换为已部署的云函数。" } });} });}).then(function () {var _ref16 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref16.data;var _ref17 = e || {},t = _ref17.code,n = _ref17.message;return { code: 0 === t ? 0 : t || "SYS_ERR", message: n || "SYS_ERR" };}).then(function (_ref18) {var n = _ref18.code,s = _ref18.message;if (0 !== n) {switch (n) {case "MODULE_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u4F9D\u8D56\u52A0\u5BC6\u516C\u5171\u6A21\u5757\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "FUNCTION_ENCRYPTED":console.error("\u6B64\u4E91\u51FD\u6570\uFF08".concat(e, "\uFF09\u5DF2\u52A0\u5BC6\u4E0D\u53EF\u672C\u5730\u8C03\u8BD5\uFF0C\u81EA\u52A8\u5207\u6362\u4E3A\u4E91\u7AEF\u5DF2\u90E8\u7F72\u7684\u4E91\u51FD\u6570"));break;case "ACTION_ENCRYPTED":console.error(s || "需要访问加密的uni-clientDB-action，自动切换为云端环境");break;case "NETWORK_ERROR":{var _e17 = "连接本地调试服务失败，请检查客户端是否和主机在同一局域网下";throw console.error(_e17), new Error(_e17);}case "SWITCH_TO_CLOUD":break;default:{var _e18 = "\u68C0\u6D4B\u672C\u5730\u8C03\u8BD5\u670D\u52A1\u51FA\u73B0\u9519\u8BEF\uFF1A".concat(s, "\uFF0C\u8BF7\u68C0\u67E5\u7F51\u7EDC\u73AF\u5883\u6216\u91CD\u542F\u5BA2\u6237\u7AEF\u518D\u8BD5");throw console.error(_e18), new Error(_e18);}}return _this16._originCallFunction({ name: e, data: t });}return new Promise(function (n, s) {var i = Je({ name: e, data: t, provider: _this16.config.provider, spaceId: o });q.request({ method: "POST", url: a, data: { provider: r, platform: h, param: i }, success: function success() {var _ref19 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref19.statusCode,t = _ref19.data;return !e || e >= 400 ? s(new T({ code: t.code || "SYS_ERR", message: t.message || "request:fail" })) : n({ result: t });}, fail: function fail(e) {s(new T({ code: e.code || e.errCode || "SYS_ERR", message: e.message || e.errMsg || "request:fail" }));} });});});}var Xe = [{ rule: /fc_function_not_found|FUNCTION_NOT_FOUND/, content: "，云函数[{functionName}]在云端不存在，请检查此云函数名称是否正确以及该云函数是否已上传到服务空间", mode: "append" }];var Ge = /[\\^$.*+?()[\]{}|]/g,Qe = RegExp(Ge.source);function Ze(e, t, n) {return e.replace(new RegExp((s = t) && Qe.test(s) ? s.replace(Ge, "\\$&") : s, "g"), n);var s;}function et(_ref20) {var e = _ref20.functionName,t = _ref20.result,n = _ref20.logPvd;if (this.config.useDebugFunction && t && t.requestId) {var _s7 = JSON.stringify({ spaceId: this.config.spaceId, functionName: e, requestId: t.requestId });console.log("[".concat(n, "-request]").concat(_s7, "[/").concat(n, "-request]"));}}function tt(e) {var t = e.callFunction,n = function n(e) {var _this17 = this;var n = e.name;e.data = Je({ name: n, data: e.data, provider: this.config.provider, spaceId: this.config.spaceId });var s = { aliyun: "aliyun", tencent: "tcb" }[this.config.provider];return t.call(this, e).then(function (e) {return et.call(_this17, { functionName: n, result: e, logPvd: s }), Promise.resolve(e);}, function (t) {return et.call(_this17, { functionName: n, result: t, logPvd: s }), t && t.message && (t.message = function () {var _ref21 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref21$message = _ref21.message,e = _ref21$message === void 0 ? "" : _ref21$message,_ref21$extraInfo = _ref21.extraInfo,t = _ref21$extraInfo === void 0 ? {} : _ref21$extraInfo,_ref21$formatter = _ref21.formatter,n = _ref21$formatter === void 0 ? [] : _ref21$formatter;for (var _s8 = 0; _s8 < n.length; _s8++) {var _n$_s = n[_s8],_r3 = _n$_s.rule,_o2 = _n$_s.content,i = _n$_s.mode,_a = e.match(_r3);if (!_a) continue;var _c = _o2;for (var _e19 = 1; _e19 < _a.length; _e19++) {_c = Ze(_c, "{$".concat(_e19, "}"), _a[_e19]);}for (var _e20 in t) {_c = Ze(_c, "{".concat(_e20, "}"), t[_e20]);}switch (i) {case "replace":return _c;case "append":default:return e + _c;}}return e;}({ message: "[".concat(e.name, "]: ").concat(t.message), formatter: Xe, extraInfo: { functionName: n } })), Promise.reject(t);});};e.callFunction = function (t) {var s;return u && e.debugInfo && !e.debugInfo.forceRemote && d ? (e._originCallFunction || (e._originCallFunction = n), s = Ye.call(this, t)) : s = n.call(this, t), Object.defineProperty(s, "result", { get: function get() {return console.warn("当前返回结果为Promise类型，不可直接访问其result属性，详情请参考：https://uniapp.dcloud.net.cn/uniCloud/faq?id=promise"), {};} }), s;};}var nt = Symbol("CLIENT_DB_INTERNAL");function st(e, t) {return e.then = "DoNotReturnProxyWithAFunctionNamedThen", e._internalType = nt, new Proxy(e, { get: function get(e, n, s) {return n in e || "string" != typeof n ? e[n] : t.get(e, n, s);} });}function rt(e) {switch (o(e)) {case "array":return e.map(function (e) {return rt(e);});case "object":return e._internalType === nt || Object.keys(e).forEach(function (t) {e[t] = rt(e[t]);}), e;case "regexp":return { $regexp: { source: e.source, flags: e.flags } };case "date":return { $date: e.toISOString() };default:return e;}}function ot() {var e = q.getStorageSync("uni_id_token") || "",t = e.split(".");if (!e || 3 !== t.length) return { uid: null, role: [], permission: [], tokenExpired: 0 };var n;try {n = JSON.parse((s = t[1], decodeURIComponent(atob(s).split("").map(function (e) {return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2);}).join(""))));} catch (e) {throw new Error("获取当前用户信息出错，详细错误信息为：" + e.message);}var s;return n.tokenExpired = 1e3 * n.exp, delete n.exp, delete n.iat, n;}var it = t(n(function (e, t) {Object.defineProperty(t, "__esModule", { value: !0 });var n = "chooseAndUploadFile:fail";function s(e, t) {return e.tempFiles.forEach(function (e, n) {e.name || (e.name = e.path.substring(e.path.lastIndexOf("/") + 1)), t && (e.fileType = t), e.cloudPath = Date.now() + "_" + n + e.name.substring(e.name.lastIndexOf("."));}), e.tempFilePaths || (e.tempFilePaths = e.tempFiles.map(function (e) {return e.path;})), e;}function r(e, t, _ref22) {var n = _ref22.onChooseFile,s = _ref22.onUploadProgress;return t.then(function (e) {if (n) {var _t9 = n(e);if (void 0 !== _t9) return Promise.resolve(_t9).then(function (t) {return void 0 === t ? e : t;});}return e;}).then(function (t) {return !1 === t ? { errMsg: "chooseAndUploadFile:ok", tempFilePaths: [], tempFiles: [] } : function (e, t) {var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 5;var s = arguments.length > 3 ? arguments[3] : undefined;(t = Object.assign({}, t)).errMsg = "chooseAndUploadFile:ok";var r = t.tempFiles,o = r.length;var i = 0;return new Promise(function (a) {for (; i < n;) {c();}function c() {var n = i++;if (n >= o) return void (!r.find(function (e) {return !e.url && !e.errMsg;}) && a(t));var u = r[n];e.uploadFile({ filePath: u.path, cloudPath: u.cloudPath, fileType: u.fileType, onUploadProgress: function onUploadProgress(e) {e.index = n, e.tempFile = u, e.tempFilePath = u.path, s && s(e);} }).then(function (e) {u.url = e.fileID, n < o && c();}).catch(function (e) {u.errMsg = e.errMsg || e.message, n < o && c();});}});}(e, t, 5, s);});}t.initChooseAndUploadFile = function (e) {return function () {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { type: "all" };return "image" === t.type ? r(e, function (e) {var t = e.count,r = e.sizeType,_e$sourceType = e.sourceType,o = _e$sourceType === void 0 ? ["album", "camera"] : _e$sourceType,i = e.extension;return new Promise(function (e, a) {uni.chooseImage({ count: t, sizeType: r, sourceType: o, extension: i, success: function success(t) {e(s(t, "image"));}, fail: function fail(e) {a({ errMsg: e.errMsg.replace("chooseImage:fail", n) });} });});}(t), t) : "video" === t.type ? r(e, function (e) {var t = e.camera,r = e.compressed,o = e.maxDuration,_e$sourceType2 = e.sourceType,i = _e$sourceType2 === void 0 ? ["album", "camera"] : _e$sourceType2,a = e.extension;return new Promise(function (e, c) {uni.chooseVideo({ camera: t, compressed: r, maxDuration: o, sourceType: i, extension: a, success: function success(t) {var n = t.tempFilePath,r = t.duration,o = t.size,i = t.height,a = t.width;e(s({ errMsg: "chooseVideo:ok", tempFilePaths: [n], tempFiles: [{ name: t.tempFile && t.tempFile.name || "", path: n, size: o, type: t.tempFile && t.tempFile.type || "", width: a, height: i, duration: r, fileType: "video", cloudPath: "" }] }, "video"));}, fail: function fail(e) {c({ errMsg: e.errMsg.replace("chooseVideo:fail", n) });} });});}(t), t) : r(e, function (e) {var t = e.count,r = e.extension;return new Promise(function (e, o) {var i = uni.chooseFile;if ("undefined" != typeof wx && "function" == typeof wx.chooseMessageFile && (i = wx.chooseMessageFile), "function" != typeof i) return o({ errMsg: n + " 请指定 type 类型，该平台仅支持选择 image 或 video。" });i({ type: "all", count: t, extension: r, success: function success(t) {e(s(t));}, fail: function fail(e) {o({ errMsg: e.errMsg.replace("chooseFile:fail", n) });} });});}(t), t);};};}));var at = "manual";function ct(e) {return { props: { localdata: { type: Array, default: function _default() {return [];} }, options: { type: [Object, Array], default: function _default() {return {};} }, collection: { type: String, default: "" }, action: { type: String, default: "" }, field: { type: String, default: "" }, orderby: { type: String, default: "" }, where: { type: [String, Object], default: "" }, pageData: { type: String, default: "add" }, pageCurrent: { type: Number, default: 1 }, pageSize: { type: Number, default: 20 }, getcount: { type: [Boolean, String], default: !1 }, gettree: { type: [Boolean, String], default: !1 }, gettreepath: { type: [Boolean, String], default: !1 }, startwith: { type: String, default: "" }, limitlevel: { type: Number, default: 10 }, groupby: { type: String, default: "" }, groupField: { type: String, default: "" }, distinct: { type: [Boolean, String], default: !1 }, foreignKey: { type: String, default: "" }, loadtime: { type: String, default: "auto" }, manual: { type: Boolean, default: !1 } }, data: function data() {return { mixinDatacomLoading: !1, mixinDatacomHasMore: !1, mixinDatacomResData: [], mixinDatacomErrorMessage: "", mixinDatacomPage: {} };}, created: function created() {var _this18 = this;this.mixinDatacomPage = { current: this.pageCurrent, size: this.pageSize, count: 0 }, this.$watch(function () {var e = [];return ["pageCurrent", "pageSize", "localdata", "collection", "action", "field", "orderby", "where", "getont", "getcount", "gettree", "groupby", "groupField", "distinct"].forEach(function (t) {e.push(_this18[t]);}), e;}, function (e, t) {if (_this18.loadtime === at) return;var n = !1;var s = [];for (var _r4 = 2; _r4 < e.length; _r4++) {e[_r4] !== t[_r4] && (s.push(e[_r4]), n = !0);}e[0] !== t[0] && (_this18.mixinDatacomPage.current = _this18.pageCurrent), _this18.mixinDatacomPage.size = _this18.pageSize, _this18.onMixinDatacomPropsChange(n, s);});}, methods: { onMixinDatacomPropsChange: function onMixinDatacomPropsChange(e, t) {}, mixinDatacomEasyGet: function mixinDatacomEasyGet() {var _this19 = this;var _ref23 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},_ref23$getone = _ref23.getone,e = _ref23$getone === void 0 ? !1 : _ref23$getone,t = _ref23.success,n = _ref23.fail;this.mixinDatacomLoading || (this.mixinDatacomLoading = !0, this.mixinDatacomErrorMessage = "", this.mixinDatacomGet().then(function (n) {_this19.mixinDatacomLoading = !1;var _n$result = n.result,s = _n$result.data,r = _n$result.count;_this19.getcount && (_this19.mixinDatacomPage.count = r), _this19.mixinDatacomHasMore = s.length < _this19.pageSize;var o = e ? s.length ? s[0] : void 0 : s;_this19.mixinDatacomResData = o, t && t(o);}).catch(function (e) {_this19.mixinDatacomLoading = !1, _this19.mixinDatacomErrorMessage = e, n && n(e);}));}, mixinDatacomGet: function mixinDatacomGet() {var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var n = e.database();var s = t.action || this.action;s && (n = n.action(s));var r = t.collection || this.collection;n = n.collection(r);var o = t.where || this.where;o && Object.keys(o).length && (n = n.where(o));var i = t.field || this.field;i && (n = n.field(i));var a = t.foreignKey || this.foreignKey;a && (n = n.foreignKey(a));var c = t.groupby || this.groupby;c && (n = n.groupBy(c));var u = t.groupField || this.groupField;u && (n = n.groupField(u));!0 === (void 0 !== t.distinct ? t.distinct : this.distinct) && (n = n.distinct());var h = t.orderby || this.orderby;h && (n = n.orderBy(h));var l = void 0 !== t.pageCurrent ? t.pageCurrent : this.mixinDatacomPage.current,d = void 0 !== t.pageSize ? t.pageSize : this.mixinDatacomPage.size,f = void 0 !== t.getcount ? t.getcount : this.getcount,p = void 0 !== t.gettree ? t.gettree : this.gettree,g = void 0 !== t.gettreepath ? t.gettreepath : this.gettreepath,m = { getCount: f },y = { limitLevel: void 0 !== t.limitlevel ? t.limitlevel : this.limitlevel, startWith: void 0 !== t.startwith ? t.startwith : this.startwith };return p && (m.getTree = y), g && (m.getTreePath = y), n = n.skip(d * (l - 1)).limit(d).get(m), n;} } };}function ut(_x30, _x31) {return _ut.apply(this, arguments);}function _ut() {_ut = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee32(e, t) {var n, _e27, s;return _regenerator.default.wrap(function _callee32$(_context32) {while (1) {switch (_context32.prev = _context32.next) {case 0:n = "http://".concat(e, ":").concat(t, "/system/ping");_context32.prev = 1;_context32.next = 4;return s = { url: n, timeout: 500 }, new Promise(function (e, t) {q.request(_objectSpread(_objectSpread({}, s), {}, { success: function success(t) {e(t);}, fail: function fail(e) {t(e);} }));});case 4:_e27 = _context32.sent;return _context32.abrupt("return", !(!_e27.data || 0 !== _e27.data.code));case 8:_context32.prev = 8;_context32.t0 = _context32["catch"](1);return _context32.abrupt("return", !1);case 11:case "end":return _context32.stop();}}}, _callee32, null, [[1, 8]]);}));return _ut.apply(this, arguments);}var ht = new ( /*#__PURE__*/function () {function _class2() {_classCallCheck(this, _class2);}_createClass(_class2, [{ key: "init", value: function init(e) {var t = {};var n = !1 !== e.debugFunction && u && ("h5" === h && navigator.userAgent.indexOf("HBuilderX") > 0 || "app-plus" === h);switch (e.provider) {case "tencent":t = Ke.init(Object.assign(e, { useDebugFunction: n }));break;case "aliyun":t = L.init(Object.assign(e, { useDebugFunction: n }));break;case "private":t = We.init(Object.assign(e, { useDebugFunction: n }));break;default:throw new Error("未提供正确的provider参数");}var s = l;u && s && !s.code && (t.debugInfo = s);var r = Promise.resolve();var o;o = 1, r = new Promise(function (e, t) {setTimeout(function () {e();}, o);}), t.isReady = !1, t.isDefault = !1;var i = t.auth();t.initUniCloud = r.then(function () {return i.getLoginState();}).then(function (e) {return e ? Promise.resolve() : i.signInAnonymously();}).then(function () {if (u && t.debugInfo) {var _t$debugInfo = t.debugInfo,_e21 = _t$debugInfo.address,_n4 = _t$debugInfo.servePort;return function () {var _ref24 = _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee31(e, t) {var n, _s9, _r5;return _regenerator.default.wrap(function _callee31$(_context31) {while (1) {switch (_context31.prev = _context31.next) {case 0:_s9 = 0;case 1:if (!(_s9 < e.length)) {_context31.next = 11;break;}_r5 = e[_s9];_context31.next = 5;return ut(_r5, t);case 5:if (!_context31.sent) {_context31.next = 8;break;}n = _r5;return _context31.abrupt("break", 11);case 8:_s9++;_context31.next = 1;break;case 11:return _context31.abrupt("return", { address: n, port: t });case 12:case "end":return _context31.stop();}}}, _callee31);}));return function (_x32, _x33) {return _ref24.apply(this, arguments);};}()(_e21, _n4);}return Promise.resolve();}).then(function () {var _ref25 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},e = _ref25.address,n = _ref25.port;if (!u) return Promise.resolve();if (e) t.localAddress = e, t.localPort = n;else if (t.debugInfo) {var _e22 = console["app-plus" === h ? "error" : "warn"];"remote" === t.debugInfo.initialLaunchType ? (t.debugInfo.forceRemote = !0, _e22("当前客户端和HBuilderX不在同一局域网下（或其他网络原因无法连接HBuilderX），uniCloud本地调试服务不对当前客户端生效。\n- 如果不使用uniCloud本地调试服务，请直接忽略此信息。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs")) : _e22("无法连接uniCloud本地调试服务，请检查当前客户端是否与主机在同一局域网下。\n- 如需使用uniCloud本地调试服务，请将客户端与主机连接到同一局域网下并重新运行到客户端。\n- 如果在HBuilderX开启的状态下切换过网络环境，请重启HBuilderX后再试\n- 检查系统防火墙是否拦截了HBuilderX自带的nodejs");}}).then(function () {return function () {if (!u || "h5" !== h) return;if (uni.getStorageSync("__LAST_DCLOUD_APPID") === E.appid) return;uni.setStorageSync("__LAST_DCLOUD_APPID", E.appid), uni.removeStorageSync("uni_id_token") && (console.warn("检测到当前项目与上次运行到此端口的项目不一致，自动清理uni-id保存的token信息（仅开发调试时生效）"), uni.removeStorageSync("uni_id_token"), uni.removeStorageSync("uni_id_token_expired"));}(), new Promise(function (e) {"quickapp-native" === h ? (O = "android", uni.getStorage({ key: "__DC_CLOUD_UUID", success: function success(t) {b = t.data ? t.data : U(32), e();} })) : setTimeout(function () {O = uni.getSystemInfoSync().platform, b = uni.getStorageSync("__DC_CLOUD_UUID") || U(32), e();}, 0);});}).then(function () {t.isReady = !0;}), tt(t), function (e) {var t = e.uploadFile;e.uploadFile = function (e) {var _this20 = this;var n;return n = this.isReady ? Promise.resolve() : this.initUniCloud, n.then(function () {return t.call(_this20, e);});};}(t), function (e) {e.database = function () {if (this._database) return this._database;var t = {};var n = {};function s(_ref26) {var s = _ref26.action,r = _ref26.command,o = _ref26.multiCommand;return v(S("database", "invoke")).then(function () {return e.callFunction({ name: "DCloud-clientDB", data: { action: s, command: r, multiCommand: o } });}).then(function (e) {var _e$result = e.result,s = _e$result.code,r = _e$result.message,o = _e$result.token,i = _e$result.tokenExpired,_e$result$systemInfo = _e$result.systemInfo,c = _e$result$systemInfo === void 0 ? [] : _e$result$systemInfo;if (c) for (var _e23 = 0; _e23 < c.length; _e23++) {var _c$_e = c[_e23],_t10 = _c$_e.level,_n5 = _c$_e.message,_s10 = _c$_e.detail,_r6 = console["app-plus" === h && "warn" === _t10 ? "error" : _t10] || console.log;var _o3 = "[System Info]" + _n5;_s10 && (_o3 = "".concat(_o3, "\n\u8BE6\u7EC6\u4FE1\u606F\uFF1A").concat(_s10)), _r6(_o3);}if (s) {var _e24 = new a(r, s);return n.error && n.error.forEach(function (t) {t(_e24);}), Promise.reject(_e24);}o && i && (t.refreshToken && t.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}), n.refreshToken && n.refreshToken.forEach(function (e) {e({ token: o, tokenExpired: i });}));var u = e.result.affectedDocs;return "number" == typeof u && Object.defineProperty(e.result, "affectedDocs", { get: function get() {return console.warn("affectedDocs不再推荐使用，请使用inserted/deleted/updated/data.length替代"), u;} }), v(S("database", "success"), e).then(function () {return v(S("database", "complete"), e);}).then(function () {return Promise.resolve(e);});}, function (e) {var t = new a(e.message, e.code || "SYSTEM_ERROR");return n.error && n.error.forEach(function (e) {e(t);}), /fc_function_not_found|FUNCTION_NOT_FOUND/g.test(e.message) && console.warn("clientDB未初始化，请在web控制台保存一次schema以开启clientDB"), v(S("database", "fail"), e).then(function () {return v(S("database", "complete"), e);}).then(function () {return Promise.reject(e);});});}this.isDefault && (n = g("_globalUniCloudDatabaseCallback"));var r = /*#__PURE__*/function () {function r(e, t) {_classCallCheck(this, r);this.content = e, this.prevStage = t, this.udb = null;}_createClass(r, [{ key: "toJSON", value: function toJSON() {var e = this;var t = [e.content];for (; e.prevStage;) {e = e.prevStage, t.push(e.content);}return { $db: t.reverse().map(function (e) {return { $method: e.$method, $param: e.$param };}) };} }, { key: "getAction", value: function getAction() {var e = this.toJSON().$db.find(function (e) {return "action" === e.$method;});return e && e.$param && e.$param[0];} }, { key: "getCommand", value: function getCommand() {return { $db: this.toJSON().$db.filter(function (e) {return "action" !== e.$method;}) };} }, { key: "get", value: function get() {return this._send("get", Array.from(arguments));} }, { key: "add", value: function add() {return this._send("add", Array.from(arguments));} }, { key: "remove", value: function remove() {return this._send("remove", Array.from(arguments));} }, { key: "update", value: function update() {return this._send("update", Array.from(arguments));} }, { key: "end", value: function end() {return this._send("end", Array.from(arguments));} }, { key: "set", value: function set() {throw new Error("clientDB禁止使用set方法");} }, { key: "_send", value: function _send(e, t) {var n = this.getAction(),r = this.getCommand();return r.$db.push({ $method: e, $param: rt(t) }), s({ action: n, command: r });} }, { key: "useAggregate", get: function get() {var e = this,t = !1;for (; e.prevStage;) {e = e.prevStage;var _n6 = e.content.$method;if ("aggregate" === _n6 || "pipeline" === _n6) {t = !0;break;}}return t;} }, { key: "count", get: function get() {if (!this.useAggregate) return function () {return this._send("count", Array.from(arguments));};var e = this;return function () {return c({ $method: "count", $param: rt(Array.from(arguments)) }, e);};} }, { key: "multiSend", get: function get() {} }]);return r;}();var o = ["db.Geo", "db.command", "command.aggregate"];function i(e, t) {return o.indexOf("".concat(e, ".").concat(t)) > -1;}function c(e, t) {return st(new r(e, t), { get: function get(e, t) {var n = "db";return e && e.content && (n = e.content.$method), i(n, t) ? c({ $method: t }, e) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) }, e);};}, set: function set(e, t, n) {e[t] = n;} });}function u(_ref27) {var e = _ref27.path,t = _ref27.method;return /*#__PURE__*/function () {function _class3() {_classCallCheck(this, _class3);this.param = Array.from(arguments);}_createClass(_class3, [{ key: "toJSON", value: function toJSON() {return { $newDb: [].concat(_toConsumableArray(e.map(function (e) {return { $method: e };})), [{ $method: t, $param: this.param }]) };} }]);return _class3;}();}var l = { auth: { on: function on(e, n) {t[e] = t[e] || [], t[e].indexOf(n) > -1 || t[e].push(n);}, off: function off(e, n) {t[e] = t[e] || [];var s = t[e].indexOf(n);-1 !== s && t[e].splice(s, 1);} }, on: function on(e, t) {n[e] = n[e] || [], n[e].indexOf(t) > -1 || n[e].push(t);}, off: function off(e, t) {n[e] = n[e] || [];var s = n[e].indexOf(t);-1 !== s && n[e].splice(s, 1);}, env: st({}, { get: function get(e, t) {return { $env: t };} }), Geo: st({}, { get: function get(e, t) {return u({ path: ["Geo"], method: t });} }), getCloudEnv: function getCloudEnv(e) {if ("string" != typeof e || !e.trim()) throw new Error("getCloudEnv参数错误");return { $env: e.replace("$cloudEnv_", "") };}, multiSend: function multiSend() {var e = Array.from(arguments);return s({ multiCommand: e.map(function (e) {var t = e.getAction(),n = e.getCommand();if ("getTemp" !== n.$db[n.$db.length - 1].$method) throw new Error("multiSend只支持子命令内使用getTemp");return { action: t, command: n };}) }).then(function (t) {for (var _n7 = 0; _n7 < e.length; _n7++) {var _s11 = e[_n7];_s11.udb && "function" == typeof _s11.udb.setResult && _s11.udb.setResult(t.result.dataList[_n7]);}return Promise.resolve(t);}, function (t) {for (var _n8 = 0; _n8 < e.length; _n8++) {var _s12 = e[_n8];_s12.udb && "function" == typeof _s12.udb.setResult && _s12.udb.setResult(t);}return Promise.reject(t);});}, get serverDate() {return u({ path: [], method: "serverDate" });}, get RegExp() {return u({ path: [], method: "RegExp" });} },d = st(l, { get: function get(e, t) {return i("db", t) ? c({ $method: t }) : function () {return c({ $method: t, $param: rt(Array.from(arguments)) });};} });return this._database = d, d;};}(t), function (e) {e.getCurrentUserInfo = ot, e.chooseAndUploadFile = it.initChooseAndUploadFile(e), Object.assign(e, { get mixinDatacom() {return ct(e);} });}(t);return ["callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "chooseAndUploadFile"].forEach(function (e) {t[e] && (t[e] = k(t[e], e));}), t.init = this.init, t;} }]);return _class2;}())();(function () {{var e = d;var t = {};if (1 === e.length) t = e[0], ht = ht.init(t), ht.isDefault = !0;else {var _t11 = ["auth", "callFunction", "uploadFile", "deleteFile", "getTempFileURL", "downloadFile", "database", "getCurrentUSerInfo"];var _n9;_n9 = e && e.length > 0 ? "应用有多个服务空间，请通过uniCloud.init方法指定要使用的服务空间" : f ? "应用未关联服务空间，请在uniCloud目录右键关联服务空间" : "uni-app cli项目内使用uniCloud需要使用HBuilderX的运行菜单运行项目，且需要在uniCloud目录关联服务空间", _t11.forEach(function (e) {ht[e] = function () {return console.error(_n9), Promise.reject(new T({ code: "SYS_ERR", message: _n9 }));};});}Object.assign(ht, { get mixinDatacom() {return ct(ht);} }), ht.addInterceptor = _, ht.removeInterceptor = w, u && "h5" === h && (window.uniCloud = ht);}})();var lt = ht;var _default2 = lt;exports.default = _default2;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../webpack/buildin/global.js */ 50), __webpack_require__(/*! ./../../../../../node-libs-browser/mock/process.js */ 51), __webpack_require__(/*! @dcloudio/uni-mp-weixin/dist/mp.js */ 53)["default"]))

/***/ }),
/* 50 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 51 */
/*!********************************************************!*\
  !*** ./node_modules/node-libs-browser/mock/process.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports.nextTick = function nextTick(fn) {
    var args = Array.prototype.slice.call(arguments);
    args.shift();
    setTimeout(function () {
        fn.apply(null, args);
    }, 0);
};

exports.platform = exports.arch = 
exports.execPath = exports.title = 'browser';
exports.pid = 1;
exports.browser = true;
exports.env = {};
exports.argv = [];

exports.binding = function (name) {
	throw new Error('No such module. (Possibly not yet loaded)')
};

(function () {
    var cwd = '/';
    var path;
    exports.cwd = function () { return cwd };
    exports.chdir = function (dir) {
        if (!path) path = __webpack_require__(/*! path */ 52);
        cwd = path.resolve(dir, cwd);
    };
})();

exports.exit = exports.kill = 
exports.umask = exports.dlopen = 
exports.uptime = exports.memoryUsage = 
exports.uvCounters = function() {};
exports.features = {};


/***/ }),
/* 52 */
/*!***********************************************!*\
  !*** ./node_modules/path-browserify/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// .dirname, .basename, and .extname methods are extracted from Node.js v8.11.1,
// backported and transplited with Babel, with backwards-compat fixes

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  if (typeof path !== 'string') path = path + '';
  if (path.length === 0) return '.';
  var code = path.charCodeAt(0);
  var hasRoot = code === 47 /*/*/;
  var end = -1;
  var matchedSlash = true;
  for (var i = path.length - 1; i >= 1; --i) {
    code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        if (!matchedSlash) {
          end = i;
          break;
        }
      } else {
      // We saw the first non-path separator
      matchedSlash = false;
    }
  }

  if (end === -1) return hasRoot ? '/' : '.';
  if (hasRoot && end === 1) {
    // return '//';
    // Backwards-compat fix:
    return '/';
  }
  return path.slice(0, end);
};

function basename(path) {
  if (typeof path !== 'string') path = path + '';

  var start = 0;
  var end = -1;
  var matchedSlash = true;
  var i;

  for (i = path.length - 1; i >= 0; --i) {
    if (path.charCodeAt(i) === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          start = i + 1;
          break;
        }
      } else if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // path component
      matchedSlash = false;
      end = i + 1;
    }
  }

  if (end === -1) return '';
  return path.slice(start, end);
}

// Uses a mixed approach for backwards-compatibility, as ext behavior changed
// in new Node.js versions, so only basename() above is backported here
exports.basename = function (path, ext) {
  var f = basename(path);
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  if (typeof path !== 'string') path = path + '';
  var startDot = -1;
  var startPart = 0;
  var end = -1;
  var matchedSlash = true;
  // Track the state of characters (if any) we see before our first dot and
  // after any path separator we find
  var preDotState = 0;
  for (var i = path.length - 1; i >= 0; --i) {
    var code = path.charCodeAt(i);
    if (code === 47 /*/*/) {
        // If we reached a path separator that was not part of a set of path
        // separators at the end of the string, stop now
        if (!matchedSlash) {
          startPart = i + 1;
          break;
        }
        continue;
      }
    if (end === -1) {
      // We saw the first non-path separator, mark this as the end of our
      // extension
      matchedSlash = false;
      end = i + 1;
    }
    if (code === 46 /*.*/) {
        // If this is our first dot, mark it as the start of our extension
        if (startDot === -1)
          startDot = i;
        else if (preDotState !== 1)
          preDotState = 1;
    } else if (startDot !== -1) {
      // We saw a non-dot and non-path separator before our dot, so we should
      // have a good chance at having a non-empty extension
      preDotState = -1;
    }
  }

  if (startDot === -1 || end === -1 ||
      // We saw a non-dot character immediately before the dot
      preDotState === 0 ||
      // The (right-most) trimmed path component is exactly '..'
      preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
    return '';
  }
  return path.slice(startDot, end);
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node-libs-browser/mock/process.js */ 51)))

/***/ }),
/* 53 */
/*!*********************************************************!*\
  !*** ./node_modules/@dcloudio/uni-mp-weixin/dist/mp.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {Object.defineProperty(exports, "__esModule", { value: true });exports.Behavior = Behavior;exports.Component = Component;exports.Page = Page;exports.nextTick = exports.default = void 0;var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 44));var _PROP_DEFAULT_VALUES;function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function _slicedToArray(arr, i) {return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();}function _nonIterableRest() {throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");}function _unsupportedIterableToArray(o, minLen) {if (!o) return;if (typeof o === "string") return _arrayLikeToArray(o, minLen);var n = Object.prototype.toString.call(o).slice(8, -1);if (n === "Object" && o.constructor) n = o.constructor.name;if (n === "Map" || n === "Set") return Array.from(o);if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);}function _arrayLikeToArray(arr, len) {if (len == null || len > arr.length) len = arr.length;for (var i = 0, arr2 = new Array(len); i < len; i++) {arr2[i] = arr[i];}return arr2;}function _iterableToArrayLimit(arr, i) {if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;var _arr = [];var _n = true;var _d = false;var _e = undefined;try {for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {_arr.push(_s.value);if (i && _arr.length === i) break;}} catch (err) {_d = true;_e = err;} finally {try {if (!_n && _i["return"] != null) _i["return"]();} finally {if (_d) throw _e;}}return _arr;}function _arrayWithHoles(arr) {if (Array.isArray(arr)) return arr;}

function parseData(data, vueComponentOptions) {
  if (!data) {
    return;
  }
  vueComponentOptions.mpOptions.data = data;
}

function parseComponents(vueComponentOptions) {
  vueComponentOptions.components = global.__wxVueOptions.components;
}

var _toString = Object.prototype.toString;
var hasOwnProperty = Object.prototype.hasOwnProperty;

function isFn(fn) {
  return typeof fn === 'function';
}

function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function hasOwn(obj, key) {
  return hasOwnProperty.call(obj, key);
}

function noop() {}

/**
                    * Create a cached version of a pure function.
                    */
function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}

/**
   * Camelize a hyphen-delimited string.
   */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {return c ? c.toUpperCase() : '';});
});

var SOURCE_KEY = '__data__';

var COMPONENT_LIFECYCLE = {
  created: 'onServiceCreated',
  attached: 'onServiceAttached',
  ready: 'mounted',
  moved: 'moved',
  detached: 'destroyed' };


var COMPONENT_LIFECYCLE_KEYS = Object.keys(COMPONENT_LIFECYCLE);

var PAGE_LIFETIMES = {
  show: 'onPageShow',
  hide: 'onPageHide',
  resize: 'onPageResize' };


var PAGE_LIFETIMES_KEYS = Object.keys(PAGE_LIFETIMES);

var PAGE_LIFECYCLE = [
'onLoad',
'onShow',
'onReady',
'onHide',
'onUnload',
'onPullDownRefresh',
'onReachBottom',
'onShareAppMessage',
'onPageScroll',
'onResize',
'onTabItemTap'];


function parsePageMethods(mpComponentOptions, vueComponentOptions) {
  var methods = Object.create(null);
  Object.keys(mpComponentOptions).forEach(function (key) {
    var value = mpComponentOptions[key];
    if (isFn(value) && PAGE_LIFECYCLE.indexOf(key) === -1) {
      methods[key] = value;
    }
  });
  vueComponentOptions.methods = methods;
}

function parsePageLifecycle(mpComponentOptions, vueComponentOptions) {
  Object.keys(mpComponentOptions).forEach(function (key) {
    if (PAGE_LIFECYCLE.indexOf(key) !== -1) {
      vueComponentOptions[key] = mpComponentOptions[key];
    }
  });
}

function parsePage(mpComponentOptions) {
  var vueComponentOptions = {
    mixins: [],
    mpOptions: {} };


  parseComponents(vueComponentOptions);

  parseData(mpComponentOptions.data, vueComponentOptions);

  parsePageMethods(mpComponentOptions, vueComponentOptions);
  parsePageLifecycle(mpComponentOptions, vueComponentOptions);

  return vueComponentOptions;
}

function parseProperties(properties, vueComponentOptions) {
  if (!properties) {
    return;
  }
  vueComponentOptions.mpOptions.properties = properties;
}

function parseOptions(options, vueComponentOptions) {
  if (!options) {
    return;
  }
  vueComponentOptions.mpOptions.options = options;
}

function parseMethods(methods, vueComponentOptions) {
  if (!methods) {
    return;
  }
  if (methods.$emit) {
    console.warn('Method "$emit" conflicts with an existing Vue instance method');
    delete methods.$emit;
  }
  vueComponentOptions.methods = methods;
}

function parseLifecycle(mpComponentOptions, vueComponentOptions) {
  COMPONENT_LIFECYCLE_KEYS.forEach(function (name) {
    if (hasOwn(mpComponentOptions, name)) {
      (vueComponentOptions[COMPONENT_LIFECYCLE[name]] || (vueComponentOptions[COMPONENT_LIFECYCLE[name]] = [])).
      push(mpComponentOptions[name]);
    }
  });
}

var mpBehaviors = {
  'wx://form-field': {},
  'wx://component-export': {} };


function callDefinitionFilter(mpComponentOptions) {var

  behaviors =

  mpComponentOptions.behaviors,definitionFilter = mpComponentOptions.definitionFilter;

  var behaviorDefinitionFilters = [];

  if (Array.isArray(behaviors)) {
    behaviors.forEach(function (behavior) {
      behavior = typeof behavior === 'string' ? mpBehaviors[behavior] : behavior;
      if (behavior.definitionFilter) {
        behaviorDefinitionFilters.push(behavior.definitionFilter);
        behavior.definitionFilter.call(null, mpComponentOptions, []);
      }
    });
  }

  if (isFn(definitionFilter)) {
    return function (defFields) {
      definitionFilter(defFields, behaviorDefinitionFilters);
    };
  }
}

function parseDefinitionFilter(mpComponentOptions, vueComponentOptions) {
  callDefinitionFilter(mpComponentOptions);
}

function parseBehavior(behavior) {var

  data =



  behavior.data,methods = behavior.methods,behaviors = behavior.behaviors,properties = behavior.properties;

  var vueComponentOptions = {
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseData(data, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);

  parseLifecycle(behavior, vueComponentOptions);
  parseDefinitionFilter(behavior);

  return vueComponentOptions;
}

var BEHAVIORS = {
  'wx://form-field': {
    beforeCreate: function beforeCreate() {
      var mpOptions = this.$options.mpOptions;
      if (!mpOptions.properties) {
        mpOptions.properties = Object.create(null);
      }

      var props = mpOptions.properties;
      // TODO form submit,reset
      if (!hasOwn(props, 'name')) {
        props.name = {
          type: String };

      }
      if (!hasOwn(props, 'value')) {
        props.value = {
          type: String // 默认类型调整为 String,否则默认值为 null,导致一些自定义 input 显示不正确
        };
      }
    } } };



function parseBehaviors(behaviors, vueComponentOptions) {
  if (!behaviors) {
    return;
  }
  behaviors.forEach(function (behavior) {
    if (typeof behavior === 'string') {
      BEHAVIORS[behavior] && vueComponentOptions.mixins.push(BEHAVIORS[behavior]);
    } else {
      vueComponentOptions.mixins.push(parseBehavior(behavior));
    }
  });
}

function parseSinglePath(path) {
  return path.split('.');
}

function parseMultiPaths(paths) {
  return paths.split(',').map(function (path) {return parseSinglePath(path);});
}

function parseObservers(observers, vueComponentOptions) {
  if (!observers) {
    return;
  }var


  mpObservers =
  vueComponentOptions.mpOptions.mpObservers;

  Object.keys(observers).forEach(function (path) {
    mpObservers.push({
      paths: parseMultiPaths(path),
      observer: observers[path] });

  });
}

function relative(from, to) {
  if (to.indexOf('/') === 0) {
    from = '';
  }
  var fromArr = from.split('/');
  var toArr = to.split('/');
  fromArr.pop();
  while (toArr.length) {
    var part = toArr.shift();
    if (part !== '' && part !== '.') {
      if (part !== '..') {
        fromArr.push(part);
      } else {
        fromArr.pop();
      }
    }
  }
  return fromArr.join('/');
}

function parseRelations(relations, vueComponentOptions) {
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    var relation = relations[name];
    relation.name = name;
    relation.target = relation.target ? String(relation.target) : relative(global.__wxRoute, name);
  });
  vueComponentOptions.mpOptions.relations = relations;
}

function parseExternalClasses(externalClasses, vueComponentOptions) {
  if (!externalClasses) {
    return;
  }
  if (!Array.isArray(externalClasses)) {
    externalClasses = [externalClasses];
  }
  vueComponentOptions.mpOptions.externalClasses = externalClasses;
  if (!vueComponentOptions.mpOptions.properties) {
    vueComponentOptions.mpOptions.properties = Object.create(null);
  }
  externalClasses.forEach(function (externalClass) {
    vueComponentOptions.mpOptions.properties[camelize(externalClass)] = {
      type: String,
      value: '' };

  });
}

function parseLifetimes(lifetimes, vueComponentOptions) {
  if (!lifetimes) {
    return;
  }
  parseLifecycle(lifetimes, vueComponentOptions);
}

function parsePageLifetimes(pageLifetimes, vueComponentOptions) {
  if (!pageLifetimes) {
    return;
  }
  PAGE_LIFETIMES_KEYS.forEach(function (key) {
    var lifetimeFn = pageLifetimes[key];
    isFn(lifetimeFn) && (vueComponentOptions[PAGE_LIFETIMES[key]] = lifetimeFn);
  });
}

function parseComponent(mpComponentOptions) {var

  data =









  mpComponentOptions.data,options = mpComponentOptions.options,methods = mpComponentOptions.methods,behaviors = mpComponentOptions.behaviors,lifetimes = mpComponentOptions.lifetimes,observers = mpComponentOptions.observers,relations = mpComponentOptions.relations,properties = mpComponentOptions.properties,pageLifetimes = mpComponentOptions.pageLifetimes,externalClasses = mpComponentOptions.externalClasses;

  var vueComponentOptions = {
    mixins: [],
    props: {},
    watch: {},
    mpOptions: {
      mpObservers: [] } };



  parseComponents(vueComponentOptions);

  parseData(data, vueComponentOptions);
  parseOptions(options, vueComponentOptions);
  parseMethods(methods, vueComponentOptions);
  parseBehaviors(behaviors, vueComponentOptions);
  parseLifetimes(lifetimes, vueComponentOptions);
  parseObservers(observers, vueComponentOptions);
  parseRelations(relations, vueComponentOptions);
  parseProperties(properties, vueComponentOptions);
  parsePageLifetimes(pageLifetimes, vueComponentOptions);
  parseExternalClasses(externalClasses, vueComponentOptions);

  parseLifecycle(mpComponentOptions, vueComponentOptions);
  parseDefinitionFilter(mpComponentOptions);

  return vueComponentOptions;
}

function initRelationHandlers(type, handler, target, ctx) {
  if (!handler) {
    return;
  }
  var name = "_$".concat(type, "Handlers");
  (ctx[name] || (ctx[name] = [])).push(function () {
    handler.call(ctx, target);
  });
}

function initLinkedHandlers(relation, target, ctx) {
  var type = 'linked';
  var name = relation.name;
  var relationNodes = ctx._$relationNodes || (ctx._$relationNodes = Object.create(null));
  (relationNodes[name] || (relationNodes[name] = [])).push(target);
  initRelationHandlers(type, relation[type], target, ctx);
}

function initUnlinkedHandlers(relation, target, ctx) {
  var type = 'unlinked';
  initRelationHandlers(type, relation[type], target, ctx);
}

function findParentRelation(parentVm, target, type) {
  var relations = parentVm &&
  parentVm.$options.mpOptions &&
  parentVm.$options.mpOptions.relations;

  if (!relations) {
    return [];
  }
  var name = Object.keys(relations).find(function (name) {
    var relation = relations[name];
    return relation.target === target && relation.type === type;
  });
  if (!name) {
    return [];
  }
  return [relations[name], parentVm];
}

function initParentRelation(vm, childRelation, match) {var _match =
  match(vm, vm.$options.mpOptions.path),_match2 = _slicedToArray(_match, 2),parentRelation = _match2[0],parentVm = _match2[1];
  if (!parentRelation) {
    return;
  }

  initLinkedHandlers(parentRelation, vm, parentVm);
  initLinkedHandlers(childRelation, parentVm, vm);

  initUnlinkedHandlers(parentRelation, vm, parentVm);
  initUnlinkedHandlers(childRelation, parentVm, vm);
}

function initRelation(relation, vm) {
  var type = relation.type;
  if (type === 'parent') {
    initParentRelation(vm, relation, function matchParent(vm, target) {
      return findParentRelation(vm.$parent, target, 'child');
    });
  } else if (type === 'ancestor') {
    initParentRelation(vm, relation, function matchAncestor(vm, target) {
      var $parent = vm.$parent;
      while ($parent) {
        var ret = findParentRelation($parent, target, 'descendant');
        if (ret.length) {
          return ret;
        }
        $parent = $parent.$parent;
      }
      return [];
    });
  }
}

function initRelations(vm) {var _ref =


  vm.$options.mpOptions || {},relations = _ref.relations;
  if (!relations) {
    return;
  }
  Object.keys(relations).forEach(function (name) {
    initRelation(relations[name], vm);
  });
}

function handleRelations(vm, type) {
  // TODO 需要移除 relationNodes
  var handlers = vm["_$".concat(type, "Handlers")];
  if (!handlers) {
    return;
  }
  handlers.forEach(function (handler) {return handler();});
}

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop };


function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };
  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function setDataByExprPath(exprPath, value, data) {
  var keys = exprPath.replace(/\[(\d+?)\]/g, '.$1').split('.');
  keys.reduce(function (obj, key, idx) {
    if (idx === keys.length - 1) {
      obj[key] = value;
    } else {
      if (typeof obj[key] === 'undefined') {
        obj[key] = {};
      }
      return obj[key];
    }
  }, data);
  return keys.length === 1;
}

function setData(data, callback) {var _this = this;
  if (!isPlainObject(data)) {
    return;
  }
  Object.keys(data).forEach(function (key) {
    if (setDataByExprPath(key, data[key], _this.data)) {
      !hasOwn(_this, key) && proxy(_this, SOURCE_KEY, key);
    }
  });
  this.$forceUpdate();
  isFn(callback) && this.$nextTick(callback);
}

/**
   * https://github.com/swan-team/swan-js/blob/61e2a63f7aa576b5daafbe77fdfa7c65b977060c/src/utils/index.js
   */

var _toString$1 = Object.prototype.toString;
/**
                                              * 深度assign的函数
                                              * @param {Object} targetObject 要被拷贝的目标对象
                                              * @param {Object} originObject 拷贝的源对象
                                              * @return {Object} merge后的对象
                                              */
var deepAssign = function deepAssign() {var targetObject = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};var originObject = arguments.length > 1 ? arguments[1] : undefined;
  var originType = _toString$1.call(originObject);
  if (originType === '[object Array]') {
    targetObject = originObject.slice(0);
    return targetObject;
  } else if (originType === '[object Object]') {
    for (var key in originObject) {
      targetObject[key] = deepAssign(targetObject[key], originObject[key]);
    }
    return targetObject;
  } else if (originType === '[object Date]') {
    return new Date(originObject.getTime());
  } else if (originType === '[object RegExp]') {
    var target = String(originObject);
    var lastIndex = target.lastIndexOf('/');
    return new RegExp(target.slice(1, lastIndex), target.slice(lastIndex + 1));
  }
  return originObject;
};

/**
    * 深度拷贝逻辑，不同于lodash等库，但是与微信一致
    * @param {*} [originObj] 原对象
    * @return {Object|Array} 拷贝结果
    */
var deepClone = function deepClone(originObj) {
  return deepAssign(_toString$1.call(originObj) === '[object Array]' ? [] : {}, originObj);
};

var PROP_DEFAULT_VALUES = (_PROP_DEFAULT_VALUES = {}, _defineProperty(_PROP_DEFAULT_VALUES,
String, ''), _defineProperty(_PROP_DEFAULT_VALUES,
Number, 0), _defineProperty(_PROP_DEFAULT_VALUES,
Boolean, false), _defineProperty(_PROP_DEFAULT_VALUES,
Object, null), _defineProperty(_PROP_DEFAULT_VALUES,
Array, []), _defineProperty(_PROP_DEFAULT_VALUES,
null, null), _PROP_DEFAULT_VALUES);


function getDefaultVal(propType) {
  return PROP_DEFAULT_VALUES[propType];
}

function getPropertyVal(options) {
  if (isPlainObject(options)) {
    if (hasOwn(options, 'value')) {
      return options.value;
    }
    return getDefaultVal(options.type);
  }
  return getDefaultVal(options);
}

function getType(propOptions) {
  return isPlainObject(propOptions) ? propOptions.type : propOptions;
}

function validateProp(key, propsOptions, propsData, vm) {
  var value = propsData[key];
  if (value !== undefined) {
    var propOptions = propsOptions[key];
    var type = getType(propOptions);
    value = formatVal(value, type);
    var observer = propOptions && propOptions.observer;
    if (observer) {
      // 初始化时,异步触发 observer,否则 observer 中无法访问 methods 或其他
      setTimeout(function () {
        observe(observer, vm, value);
      }, 4);
    }
    return value;
  }
  return getPropertyVal(propsOptions[key]);
}

function formatVal(val, type) {
  if (type === Boolean) {
    return !!val;
  } else if (type === String) {
    return String(val);
  }
  return val;
}

function observe(observer, vm, newVal, oldVal) {
  try {
    if (typeof observer === 'function') {
      observer.call(vm, newVal, oldVal);
    } else if (typeof observer === 'string' &&
    typeof vm[observer] === 'function')
    {
      vm[observer](newVal, oldVal);
    }
  } catch (err) {
    console.error("execute observer ".concat(observer, " callback fail! err: ").concat(err));
  }
}

function initProperties(vm, instanceData) {
  var properties = vm.$options.mpOptions.properties;
  if (!properties) {
    return;
  }

  var propsData = deepClone(vm.$options.propsData) || {};var _loop = function _loop(

  key) {
    var observer = isPlainObject(properties[key]) ? properties[key].observer : false;
    var value = validateProp(key, properties, propsData, vm);
    Object.defineProperty(instanceData, key, {
      enumerable: true,
      configurable: true,
      get: function get() {
        return value;
      },
      set: function set(newVal) {
        var oldVal = value;
        /* eslint-disable no-self-compare */
        if (newVal === value || newVal !== newVal && value !== value) {
          return;
        }
        // TODO 临时方案,clone array
        value = Array.isArray(newVal) ? newVal.slice(0) : newVal;
        if (observer) {
          observe(observer, vm, newVal, oldVal);
        }
        // 触发渲染
        vm.$forceUpdate();
      } });};for (var key in properties) {_loop(key);

  }
}

function updateProperties(vm) {
  var properties = vm.$options.mpOptions && vm.$options.mpOptions.properties;
  var propsData = vm.$options.propsData;
  if (propsData && properties) {
    Object.keys(properties).forEach(function (key) {
      if (hasOwn(propsData, key)) {
        vm[key] = formatVal(propsData[key], getType(properties[key]));
      }
    });
  }
}

function initState(vm) {
  var instanceData = JSON.parse(JSON.stringify(vm.$options.mpOptions.data || {}));

  vm[SOURCE_KEY] = instanceData;

  var propertyDefinition = {
    get: function get() {
      return vm[SOURCE_KEY];
    },
    set: function set(value) {
      vm[SOURCE_KEY] = value;
    } };


  Object.defineProperties(vm, {
    data: propertyDefinition,
    properties: propertyDefinition });


  vm.setData = setData;

  initProperties(vm, instanceData);

  Object.keys(instanceData).forEach(function (key) {
    proxy(vm, SOURCE_KEY, key);
  });
}

function initMethods(vm) {
  var oldEmit = vm.$emit;
  vm.triggerEvent = function (eventName, detail, options) {
    var target = {
      dataset: vm.$el.dataset };


    var event = {
      target: target,
      currentTarget: target,
      detail: detail,
      preventDefault: noop,
      stopPropagation: noop };


    oldEmit.call(vm, eventName, event);
  };
  // 主要是Vant 自己封装了 $emit,放到 methods 中会触发 Vue 的警告,索性,框架直接重写该方法
  vm.$emit = function () {
    vm.triggerEvent.apply(vm, arguments);
  };
  vm.getRelationNodes = function (relationKey) {
    // 需要过滤已被销毁的vm
    /* eslint-disable  no-mixed-operators */
    return (vm._$relationNodes && vm._$relationNodes[relationKey] || []).filter(function (vm) {return !vm._isDestroyed;});
  };

  vm._$updateProperties = updateProperties;
}

function handleObservers(vm) {
  var watch = vm.$options.watch;
  if (!watch) {
    return;
  }
  Object.keys(watch).forEach(function (name) {
    var observer = watch[name];
    if (observer.mounted) {
      var val = vm[name];
      var handler = observer.handler;
      if (typeof handler === 'string') {
        handler = vm[handler];
      }
      handler && handler.call(vm, val, val);
    }
  });
}

var polyfill = {
  beforeCreate: function beforeCreate() {
    // 取消 development 时的 Proxy,避免小程序组件模板中使用尚未定义的属性告警
    this._renderProxy = this;

    this._$self = this;
    this._$noop = noop;
  },
  created: function created() {// properties 中可能会访问 methods,故需要在 created 中初始化
    initState(this);
    initMethods(this);
    initRelations(this);
  },
  mounted: function mounted() {
    handleObservers(this);
  },
  destroyed: function destroyed() {
    handleRelations(this, 'unlinked');
  } };


global.__wxRoute = '';
global.__wxComponents = Object.create(null);
global.__wxVueOptions = Object.create(null);

function Page(options) {
  var pageOptions = parsePage(options);
  pageOptions.mixins.unshift(polyfill);
  pageOptions.mpOptions.path = global.__wxRoute;
  global.__wxComponents[global.__wxRoute] = pageOptions;
}

function initRelationsHandler(vueComponentOptions) {
  // linked 需要在当前组件 attached 之后再执行
  if (!vueComponentOptions.onServiceAttached) {
    vueComponentOptions.onServiceAttached = [];
  }
  vueComponentOptions.onServiceAttached.push(function onServiceAttached() {
    handleRelations(this, 'linked');
  });
}

function Component(options) {
  var componentOptions = parseComponent(options);
  componentOptions.mixins.unshift(polyfill);
  componentOptions.mpOptions.path = global.__wxRoute;
  initRelationsHandler(componentOptions);
  global.__wxComponents[global.__wxRoute] = componentOptions;
}

function Behavior(options) {
  return options;
}

var nextTick = _vue.default.nextTick;exports.nextTick = nextTick;

var index = uni.__$wx__;var _default =

index;exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../webpack/buildin/global.js */ 50)))

/***/ }),
/* 54 */
/*!**************************************************************!*\
  !*** ./node_modules/@dcloudio/uni-i18n/dist/uni-i18n.esm.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.initVueI18n = initVueI18n;exports.I18n = void 0;function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}function _createClass(Constructor, protoProps, staticProps) {if (protoProps) _defineProperties(Constructor.prototype, protoProps);if (staticProps) _defineProperties(Constructor, staticProps);return Constructor;}var isObject = function isObject(val) {return val !== null && typeof val === 'object';};var
BaseFormatter = /*#__PURE__*/function () {
  function BaseFormatter() {_classCallCheck(this, BaseFormatter);
    this._caches = Object.create(null);
  }_createClass(BaseFormatter, [{ key: "interpolate", value: function interpolate(
    message, values) {
      if (!values) {
        return [message];
      }
      var tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    } }]);return BaseFormatter;}();

var RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
var RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  var tokens = [];
  var position = 0;
  var text = '';
  while (position < format.length) {
    var _char = format[position++];
    if (_char === '{') {
      if (text) {
        tokens.push({ type: 'text', value: text });
      }
      text = '';
      var sub = '';
      _char = format[position++];
      while (_char !== undefined && _char !== '}') {
        sub += _char;
        _char = format[position++];
      }
      var isClosed = _char === '}';
      var type = RE_TOKEN_LIST_VALUE.test(sub) ?
      'list' :
      isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ?
      'named' :
      'unknown';
      tokens.push({ value: sub, type: type });
    } else
    if (_char === '%') {
      // when found rails i18n syntax, skip text capture
      if (format[position] !== '{') {
        text += _char;
      }
    } else
    {
      text += _char;
    }
  }
  text && tokens.push({ type: 'text', value: text });
  return tokens;
}
function compile(tokens, values) {
  var compiled = [];
  var index = 0;
  var mode = Array.isArray(values) ?
  'list' :
  isObject(values) ?
  'named' :
  'unknown';
  if (mode === 'unknown') {
    return compiled;
  }
  while (index < tokens.length) {
    var token = tokens[index];
    switch (token.type) {
      case 'text':
        compiled.push(token.value);
        break;
      case 'list':
        compiled.push(values[parseInt(token.value, 10)]);
        break;
      case 'named':
        if (mode === 'named') {
          compiled.push(values[token.value]);
        } else
        {
          if (true) {
            console.warn("Type of token '".concat(token.type, "' and format of value '").concat(mode, "' don't match!"));
          }
        }
        break;
      case 'unknown':
        if (true) {
          console.warn("Detect 'unknown' type of token!");
        }
        break;}

    index++;
  }
  return compiled;
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = function hasOwn(val, key) {return hasOwnProperty.call(val, key);};
var defaultFormatter = new BaseFormatter();
function include(str, parts) {
  return !!parts.find(function (part) {return str.indexOf(part) !== -1;});
}
function startsWith(str, parts) {
  return parts.find(function (part) {return str.indexOf(part) === 0;});
}
function normalizeLocale(locale, messages) {
  if (!locale) {
    return;
  }
  locale = locale.trim().replace(/_/g, '-');
  if (messages[locale]) {
    return locale;
  }
  locale = locale.toLowerCase();
  if (locale.indexOf('zh') === 0) {
    if (locale.indexOf('-hans') !== -1) {
      return 'zh-Hans';
    }
    if (locale.indexOf('-hant') !== -1) {
      return 'zh-Hant';
    }
    if (include(locale, ['-tw', '-hk', '-mo', '-cht'])) {
      return 'zh-Hant';
    }
    return 'zh-Hans';
  }
  var lang = startsWith(locale, ['en', 'fr', 'es']);
  if (lang) {
    return lang;
  }
}var
I18n = /*#__PURE__*/function () {
  function I18n(_ref) {var locale = _ref.locale,fallbackLocale = _ref.fallbackLocale,messages = _ref.messages,watcher = _ref.watcher,formater = _ref.formater;_classCallCheck(this, I18n);
    this.locale = 'en';
    this.fallbackLocale = 'en';
    this.message = {};
    this.messages = {};
    this.watchers = [];
    if (fallbackLocale) {
      this.fallbackLocale = fallbackLocale;
    }
    this.formater = formater || defaultFormatter;
    this.messages = messages;
    this.setLocale(locale);
    if (watcher) {
      this.watchLocale(watcher);
    }
  }_createClass(I18n, [{ key: "setLocale", value: function setLocale(
    locale) {var _this = this;
      var oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      this.message = this.messages[this.locale];
      this.watchers.forEach(function (watcher) {
        watcher(_this.locale, oldLocale);
      });
    } }, { key: "getLocale", value: function getLocale()
    {
      return this.locale;
    } }, { key: "watchLocale", value: function watchLocale(
    fn) {var _this2 = this;
      var index = this.watchers.push(fn) - 1;
      return function () {
        _this2.watchers.splice(index, 1);
      };
    } }, { key: "t", value: function t(
    key, locale, values) {
      var message = this.message;
      if (typeof locale === 'string') {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else
      {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn("Cannot translate the value of keypath ".concat(key, ". Use the value of keypath as default."));
        return key;
      }
      return this.formater.interpolate(message[key], values).join('');
    } }]);return I18n;}();exports.I18n = I18n;


function initLocaleWatcher(appVm, i18n) {
  appVm.$i18n &&
  appVm.$i18n.vm.$watch('locale', function (newLocale) {
    i18n.setLocale(newLocale);
  }, {
    immediate: true });

}
function getDefaultLocale() {
  if (typeof navigator !== 'undefined') {
    return navigator.userLanguage || navigator.language;
  }
  if (typeof plus !== 'undefined') {
    // TODO 待调整为最新的获取语言代码
    return plus.os.language;
  }
  return uni.getSystemInfoSync().language;
}
function initVueI18n(messages) {var fallbackLocale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';var locale = arguments.length > 2 ? arguments[2] : undefined;
  var i18n = new I18n({
    locale: locale || fallbackLocale,
    fallbackLocale: fallbackLocale,
    messages: messages });

  var _t = function t(key, values) {
    if (typeof getApp !== 'function') {
      // app-plus view
      /* eslint-disable no-func-assign */
      _t = function t(key, values) {
        return i18n.t(key, values);
      };
    } else
    {
      var appVm = getApp().$vm;
      if (!appVm.$t || !appVm.$i18n) {
        if (!locale) {
          i18n.setLocale(getDefaultLocale());
        }
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          return i18n.t(key, values);
        };
      } else
      {
        initLocaleWatcher(appVm, i18n);
        /* eslint-disable no-func-assign */
        _t = function t(key, values) {
          var $i18n = appVm.$i18n;
          var silentTranslationWarn = $i18n.silentTranslationWarn;
          $i18n.silentTranslationWarn = true;
          var msg = appVm.$t(key, values);
          $i18n.silentTranslationWarn = silentTranslationWarn;
          if (msg !== key) {
            return msg;
          }
          return i18n.t(key, $i18n.locale, values);
        };
      }
    }
    return _t(key, values);
  };
  return {
    t: function t(key, values) {
      return _t(key, values);
    },
    getLocale: function getLocale() {
      return i18n.getLocale();
    },
    setLocale: function setLocale(newLocale) {
      return i18n.setLocale(newLocale);
    },
    mixin: {
      beforeCreate: function beforeCreate() {var _this3 = this;
        var unwatch = i18n.watchLocale(function () {
          _this3.$forceUpdate();
        });
        this.$once('hook:beforeDestroy', function () {
          unwatch();
        });
      },
      methods: {
        $$t: function $$t(key, values) {
          return _t(key, values);
        } } } };



}

/***/ }),
/* 55 */
/*!****************************************************************************!*\
  !*** H:/WorkPlace/Code/CodeBox/HX/TEST/kugou-u/pages.json?{"type":"stat"} ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _default = { "appid": "__UNI__EB967F3" };exports.default = _default;

/***/ })
],[[0,"app-config"]]]);
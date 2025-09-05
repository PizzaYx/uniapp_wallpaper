"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_yx_child2 = common_vendor.resolveComponent("yx-child");
  _easycom_yx_child2();
}
const _easycom_yx_child = () => "../../components/yx-child/yx-child.js";
if (!Math) {
  _easycom_yx_child();
}
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    const num = common_vendor.ref(0);
    const color = common_vendor.ref("#ccc");
    const size = common_vendor.ref(12);
    const onAdd = function(e) {
      common_vendor.index.__f__("log", "at pages/demo3/demo3.vue:15", e);
      num.value = e;
      color.value = "#" + String(e).substring(3, 6);
    };
    const onChange = function(e) {
      size.value = e;
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(onAdd),
        b: common_vendor.o(onChange),
        c: common_vendor.t(num.value),
        d: color.value,
        e: size.value + "px"
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-f557aef1"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo3/demo3.js.map

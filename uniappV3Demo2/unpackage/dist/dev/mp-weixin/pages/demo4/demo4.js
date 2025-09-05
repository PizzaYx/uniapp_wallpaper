"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_demo_child2 = common_vendor.resolveComponent("demo-child");
  _easycom_demo_child2();
}
const _easycom_demo_child = () => "../../components/demo-child/demo-child.js";
if (!Math) {
  _easycom_demo_child();
}
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    const child = common_vendor.ref(null);
    common_vendor.onMounted(() => {
      common_vendor.index.__f__("log", "at pages/demo4/demo4.vue:17", child.value);
    });
    function update() {
      child.value.updateCound();
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.sr(child, "3a0b9110-0", {
          "k": "child"
        }),
        b: common_vendor.o(update)
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo4/demo4.js.map

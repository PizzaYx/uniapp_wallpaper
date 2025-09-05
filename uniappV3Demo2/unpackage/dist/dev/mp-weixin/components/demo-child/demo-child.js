"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo-child",
  setup(__props, { expose: __expose }) {
    const count = common_vendor.ref(100);
    const updateCound = function() {
      count.value++;
    };
    __expose({
      count,
      str: "yangx",
      updateCound
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(count.value)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-620191ea"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/demo-child/demo-child.js.map

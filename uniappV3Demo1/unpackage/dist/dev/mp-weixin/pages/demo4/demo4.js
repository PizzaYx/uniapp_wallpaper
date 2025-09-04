"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo4",
  setup(__props) {
    const color = common_vendor.ref("#fc359a");
    const num = common_vendor.ref(1);
    const isLoading = common_vendor.ref(false);
    function onClick() {
      num.value++;
      color.value = "#" + String(Math.random()).substring(3, 9);
      common_vendor.index.__f__("log", "at pages/demo4/demo4.vue:21", String(Math.random()).substring(3, 9));
    }
    function onch(e) {
      isLoading.value = e.detail.value;
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(num.value),
        b: common_vendor.o(onClick),
        c: color.value,
        d: common_vendor.o(onch),
        e: isLoading.value
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo4/demo4.js.map

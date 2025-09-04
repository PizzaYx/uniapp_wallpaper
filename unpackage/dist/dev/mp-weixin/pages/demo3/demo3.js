"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo3",
  setup(__props) {
    const isActive = common_vendor.ref(true);
    const size = common_vendor.ref(20);
    const arrs = common_vendor.ref(["/static/pic1.png", "/static/pic2.png", "/static/pic3.webp"]);
    const picurl = common_vendor.ref("/static/pic1.png");
    let i = 0;
    setInterval(() => {
      i++;
      picurl.value = arrs.value[i % 3];
      isActive.value = !isActive.value;
    }, 1e3);
    return (_ctx, _cache) => {
      return {
        a: picurl.value,
        b: isActive.value ? 1 : "",
        c: "260px",
        d: size.value + "px"
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo3/demo3.js.map

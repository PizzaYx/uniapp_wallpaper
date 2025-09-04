"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo5",
  setup(__props) {
    const shop = common_vendor.ref(false);
    const day = common_vendor.ref(2);
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: shop.value
      }, shop.value ? {} : {}, {
        b: day.value === 1
      }, day.value === 1 ? {} : day.value === 2 ? {} : day.value === 3 ? {} : day.value === 4 ? {} : day.value === 5 ? {} : day.value === 6 ? {} : day.value === 7 ? {} : {}, {
        c: day.value === 2,
        d: day.value === 3,
        e: day.value === 4,
        f: day.value === 5,
        g: day.value === 6,
        h: day.value === 7
      }, {});
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo5/demo5.js.map

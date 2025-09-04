"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "demo7",
  setup(__props) {
    const goods = common_vendor.ref([
      { id: 11, name: "小米" },
      { id: 22, name: "华为" },
      { id: 33, name: "oppo" },
      { id: 44, name: "苹果" }
    ]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(goods.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: item.id
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-9595efcd"]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/demo7/demo7.js.map

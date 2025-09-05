"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "UserInfo",
  props: {
    obj: {
      type: Object,
      default() {
        return { name: "匿名", avatart: "" };
      }
    }
  },
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: __props.obj.avatart,
        b: common_vendor.t(__props.obj.name),
        c: common_vendor.t(__props.obj.name)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1e7cdf7b"]]);
wx.createComponent(Component);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/UserInfo/UserInfo.js.map

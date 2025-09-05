"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = /* @__PURE__ */ common_vendor.defineComponent({
  __name: "yx-child",
  emits: ["add", "change"],
  setup(__props, { emit: __emit }) {
    const emit = __emit;
    function onClick2() {
      emit("add", Math.random());
    }
    function onInput(e) {
      emit("change", e.detail.value);
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(
          //@ts-ignore
          (...args) => onClick2 && onClick2(...args)
        ),
        b: common_vendor.o(onInput)
      };
    };
  }
});
wx.createComponent(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/components/yx-child/yx-child.js.map

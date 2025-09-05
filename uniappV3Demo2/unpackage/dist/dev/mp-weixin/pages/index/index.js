"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_UserInfo2 = common_vendor.resolveComponent("UserInfo");
  _easycom_UserInfo2();
}
const _easycom_UserInfo = () => "../../components/UserInfo/UserInfo.js";
if (!Math) {
  _easycom_UserInfo();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const userInfo = common_vendor.ref({
      name: "张三",
      avatart: "/static/pic1.jpg"
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          obj: userInfo.value
        })
      };
    };
  }
};
wx.createPage(_sfc_main);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map

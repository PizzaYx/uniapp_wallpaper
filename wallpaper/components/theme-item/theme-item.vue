<template>
  <view class="themeItem">
    <navigator url="/pages/classlist/classlist" class="box" v-if="!isMore">
      <image class="pic" src="/common/images/classify1.jpg" mode="aspectFill"> </image>
      <view class="mask"> 美女 </view>
      <view class="tag"> 三天 </view>
    </navigator>
    <navigator open-type="reLaunch" url="/pages/classify/classify" class="box more" v-if="isMore">
      <image class="pic" src="/common/images/more.jpg" mode="aspectFill"> </image>
      <view class="mask">
        <uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
        <view class="text">更多</view>
      </view>
    </navigator>
  </view>
</template>

<script setup>
	defineProps({
		isMore:{
			type:Boolean,
			default:false
		}
	})
</script>

<style lang="scss" scoped>
.themeItem {
  .box {
    height: 340rpx;
    border-radius: 10rpx;
    overflow: hidden;
    position: relative; 

    .pic {
      width: 100%;
      height: 100%;
    }

    .mask {
      width: 100%;
      height: 70rpx;
      position: absolute;
      bottom: 0;
      left: 0;
      background: rgba(0, 0, 0, 0.2);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      backdrop-filter: blur(20rpx);
      font-weight: 600;
      font-size: 30rpx;
    }

    .tag {
      width: 100%;
      height: 50rpx;
      position: absolute;
      top: 0;
      left: 0;
      background: rgba(250, 129, 99, 0.7);
      backdrop-filter: blur(20rpx);
      color: #fff;
      font-size: 22rpx;
      padding: 5rpx 15rpx;
      border-radius: 0 0 20rpx 0;
      display: flex;
      transform: scale(0.8);
      transform-origin: left top;
      // align-items: center;
      // justify-content: center;
    }
  }

  .box.more {
    .mask {
      width: 100%;
      height: 100%;
	  flex-direction: column;
    }
	.text{
		font-size: 28rpx;
	}
  }
}
</style>

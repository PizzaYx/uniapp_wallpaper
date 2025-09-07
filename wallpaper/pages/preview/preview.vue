<template>
	<view class="preview">
		<swiper circular>
			<swiper-item v-for="item in 5">
				<image src="/common/images/classify1.jpg" mode="aspectFill"></image>
			</swiper-item>

		</swiper>
		<view class="mask">
			<view class="goBack">
			</view>
			<view class="count">
				3 / 19
			</view>
			<view class="time">
				10:10
			</view>
			<view class="date">
				02月02日
			</view>
			<view class="footer">
				<view class="box">
					<uni-icon type="info" size="28"></uni-icon>
					<view class="text">
						信息
					</view>
					<uni-icon type="star" size="28"></uni-icon>
					<view class="text">
						5分
					</view>
					<uni-icon type="download" size="28"></uni-icon>
					<view class="text">
						下载
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script setup>

</script>

<style lang="scss" scoped>
	.preview {
		width: 100%;
		height: 100vh;
		position: relative;

		swiper {
			width: 100%;
			height: 100%;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.mask {
			.goBack {}

			.count {
				position: absolute;
				top: 10vh;
				left: 0;
				right: 0;
				margin: auto;
				width: fit-content;
				padding: 8rpx 28rpx;
				font-size: 28rpx;
				background: rgba(0, 0, 0, 0.3);
				color: #fff;
				border-radius: 40rpx;
				backdrop-filter: blur(10rpx);
			}

			.time {}

			.date {}

			.footer {}

		}
	}
</style>
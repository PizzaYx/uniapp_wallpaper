<template>
	<view>
		<swiper indicator-dots="true" indicator-color="rgba(0, 0, 0, .3)" indicator-active-color="#007aff"
			autoplay="true" circular="true" interval="2000" vertical>
			<swiper-item>
				<image src="/static/pic1.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/pic2.png" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/pic3.webp" mode="aspectFill"></image>
			</swiper-item>
			<swiper-item>
				<image src="/static/pic4.jpg" mode="aspectFill"></image>
			</swiper-item>
		</swiper>
	</view>

	<view>
		<image src="/static/logo.png" mode="" class="pic1"></image>
		<image src="/static/pic3.webp" mode="aspectFill" class="pic2"></image>
		<image src="/static/pic4.jpg" mode="heightFix" class="pic3"></image>
	</view>
	
	--------
	<navigator url="/pages/demo2/demo2" >跳转demo2</navigator>
	
</template>

<script setup>

</script>

<style lang="scss">
	.pic1 {
		width: 100px;
		height: 100px;
	}

	.pic2 {
		width: 150px;
		height: 150px;
	}

	.pic3 {
		height: 300px;
	}

	swiper {
		width: 100vw;
		height: 200px;
		// box-sizing: border-box;
		border: 1px solid green;

		swiper-item {
			width: 100%;
			height: 100%;
			background: pink;

			image {
				width: 100%;
				height: 100%;
			}
		}

		swiper-item:nth-child(2n) {
			background: orange;
		}
	}
</style>
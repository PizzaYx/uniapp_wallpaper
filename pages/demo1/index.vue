<template>
	<view>
		<swiper indicator-dots="true" indicator-color="rgba(0, 0, 0, .3)" indicator-active-color="#007aff" autoplay="true" circular="true" interval="2000" vertical>
			<swiper-item>
				1111
			</swiper-item>
			<swiper-item>
				2222
			</swiper-item>
			<swiper-item>
				3333
			</swiper-item>
			<swiper-item>
				4444
			</swiper-item>
		</swiper>
	</view>
	
	<view>
		<image src="/static/logo.png" mode="" class="pic1" ></image>
		
		
	</view>
</template>

<script setup>

</script>

<style lang="scss">
.pic1{
	width: 100px;
	height: 100px;
}	
swiper{
	width: 100vw;
	height: 200px;
	// box-sizing: border-box;
	border: 1px solid green;
	swiper-item{
		width: 100%;
		height: 100%;
		background: pink;
	}
	swiper-item:nth-child(2n){
		background: orange;
	}
}

</style>
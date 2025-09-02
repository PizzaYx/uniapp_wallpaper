<template>
	<view hover-class="boxHover">
		<view class="inner" hover-class="innerHover" hover-stop-propagation>内部元素</view>
	</view>
	<view>
		<navigator url="/pages/demo1/index">跳转到demo1</navigator>

	</view>

	<scroll-view scroll-x="true" class="scrllView">
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>
		<view class="box">scroll子元素</view>

	</scroll-view>
</template>

<script setup>

</script>

<style lang="scss">
	.scrllView {
		width: 80%;
		height: 220px;
		border: 1px solid red;
		white-space: nowrap;
	}

	.box {
		width: 100px;
		height: 100px;
		background: goldenrod;
		display: inline-block;
		margin: 5px;
	}
</style>
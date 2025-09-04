<template>
	<view class="">
		<view v-if="shop">京东</view>
		<view v-else>淘宝</view>
		
		<view v-if="day===1">星期1</view>
		<view v-else-if="day===2">星期2</view>
		<view v-else-if="day===3">星期3</view>
		<view v-else-if="day===4">星期4</view>
		<view v-else-if="day===5">星期5</view>
		<view v-else-if="day===6">星期6</view>
		<view v-else-if="day===7">星期7</view>
		<view v-else>错误</view>
		
		<view class="box1" v-if="false">box1</view>
		<view class="box2" v-show="false">box2</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const shop = ref(false);
	const day = ref(2);
</script>

<style lang="scss" scoped>
	       
</style>

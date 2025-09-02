<template>
	<view>
		<image :src="picurl" mode=""></image>
		<button type="primary" :loading="false" :disabled="false">按钮</button>
	</view>
	
	<view class="box" :class="{active:isActive}">
		v-bind 指令
	</view>
	<view class="box" :style="{width: '300px',heigh:260+'px',fontSize:size+'px'}">
		内联样式
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	
	const isActive = ref(true);
	const size = ref(20);

	const arrs = ref(["/static/pic1.png", "/static/pic2.png", "/static/pic3.webp"]);
	const picurl = ref("/static/pic1.png");

	let i = 0;
	setInterval(() => {
		i++;
		// size.value +=i;
		picurl.value = arrs.value[i % 3]
		isActive.value = !isActive.value;
		
	}, 1000);
	
	
</script>

<style lang="scss">
	.box{
		width: 300px;
		height: 300px;
		background: orange;
		font-size: 30px;
	}
	.active{
		background: green;
		color: white;
	}
	
	

</style>
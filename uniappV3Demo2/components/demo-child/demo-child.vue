<template>
	<view class="out">
		子组件 count {{count}}
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const count = ref(100);
	const updateCound = function(){
		count.value++
	}
	defineExpose({
		count,
		str:"yangx",
		updateCound
	});
</script>

<style lang="scss" scoped>
	.out{
		padding: 20px;
		background: #eee;
	}
</style>
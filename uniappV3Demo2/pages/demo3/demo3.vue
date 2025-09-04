<template>
	<view class="">
		<yx-child @add="onAdd" @change="onChange"></yx-child>
		<view class="box1" :style="{background:color,fontSize:size+'px'}">num:{{num}}</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const num = ref(0)
	const color = ref('#ccc')
	const size = ref(12)
	const onAdd = function(e){
		console.log(e)
		num.value = e;
		color.value = "#"+String(e).substring(3,6)
	}
	const onChange = function(e){
		size.value = e;
	}
	
</script>

<style lang="scss" scoped>
	.box1{
		width: 200px;
		height: 200px;
	}
	       
</style>

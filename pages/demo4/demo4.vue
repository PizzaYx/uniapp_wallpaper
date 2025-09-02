<template>
	<view class="box" @click="onClick" :style="{background:color}">
		{{num}}
	</view>
	
	<switch  @change="onch" />
	
	<button type="primary" :loading="isLoading">按钮</button>
	
</template>

<script setup>
import { ref } from 'vue';

	const color =ref("#fc359a")
	const num = ref(1);
	const isLoading = ref(false);
	function onClick(){
		num.value++;  
		color.value = "#"+String(Math.random()).substring(3,9);
		console.log( String(Math.random()).substring(3,9) ) 
	}
	
	
	function onch(e){
		isLoading.value = e.detail.value;
	}
	
</script>

<style lang="scss">
	.box{
		width: 200px;
		height: 200px;
		background: orange; 
	}
	       
</style>

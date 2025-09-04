<template>
	<view class="out">
		<view class="box" v-for="(item,index) in 10" :key="index">box 模块 {{index+1}}</view>
		
		<view v-for="item in nba" :key="item.id">
			{{item.name}} - {{item.num}}
		</view>
	</view>
</template>
id
<script setup>
import { ref } from 'vue';

	
	const nba = ref([
		{id:1,name:"乔丹",num:23},
		{id:2,name:"詹姆斯",num:6},
		{id:3,name:"科比",num:24},
		
	]);
</script>

<style lang="scss" scoped>
	       
</style>

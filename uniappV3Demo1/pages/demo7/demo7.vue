<template>
	<view class="out">
		<view class="item" v-for="(item,index) in goods" :key="item.id">
			<checkbox></checkbox>
			<text class="title">{{item.name}}</text>
			<text class="del" @click="remove">删除</text>
		</view>
	</view>
</template>

<script setup>
import { ref } from 'vue';

	const goods = ref([
		{id:11,name:"小米"},
		{id:22,name:"华为"},
		{id:33,name:"oppo"},
		{id:44,name:"苹果"},
	])
	
	function remove(e){
		
	}
</script>

<style lang="scss" scoped>
	.out{
		padding: 5% 10px;
		.item{
			padding: 10px 0;
			.del{
				color:#c00;
				margin-left: 30px;
			}
		}
	}
</style>

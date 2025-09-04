<template>
	<view class="userInfo">
		<image :src="obj.avatart" mode="" class="avatar"></image>
		<view class="userName">{{obj.name}}</view>
		<view class="">
			{{obj.name}}
		</view>
	</view>
</template>

<script setup>
import { computed } from 'vue';
defineProps({
	obj:{
		type:Object,
		default(){
			return {name:"匿名",avatart:''}
		}
	}
});
	//const props = defineProps(['username','avatart']);
	// const props = defineProps({
	// 	username:{
	// 		type:String,
	// 		default:"匿名",
	// 	},
	// 	avatart:String
	// });
	// const myname = computed(()=>props.username+"@")
	
</script>

<style lang="scss" scoped>
	.userInfo{
		width: 100%;
		height: 200px;
		background: #ccc;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		image{
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
		.userName{
			padding: 10px 0;
			font-size: 20px;
		}
	}

</style>
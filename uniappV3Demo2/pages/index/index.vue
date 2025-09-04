<template>
	<view class="content">
		<!-- <UserInfo username="李四" avatart ="/static/logo.png"></UserInfo>
		<UserInfo avatart ="/static/pic2.jpg"></UserInfo>
		<UserInfo :username="name" avatart ="/static/pic3.jpg"></UserInfo> -->
		<UserInfo :obj="userInfo">
			
		</UserInfo>
		<UserInfo></UserInfo>
	</view>

</template>

<script setup>
import { ref } from 'vue';

	const userInfo = ref({
		name:"张三",
		avatart:"/static/pic1.jpg"
	})

</script>

<style>

</style>
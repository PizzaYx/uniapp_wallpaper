<template>
	<view class="layout">
		<demo-child ref="child"></demo-child>
		<view>------</view>
		<button @click="update"> 点击修改子值</button>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';

	const child = ref(null);
	onMounted(()=>{
		console.log(child.value);
	})
	function update(){
		child.value.updateCound()
	}
</script>

<style lang="scss" scoped>

</style>
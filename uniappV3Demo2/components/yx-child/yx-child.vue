<template>
	<view>
		子组件
		<!-- <button @click="emit('add',Math.random())">按钮</button> -->

		<button @click=" onClick2">按钮2</button>
		<view>-----</view>
		<input type="text" @input="onInput" />
	</view>
</template>

<script setup lang="ts">
	const emit = defineEmits(["add", "change"]);

	function onClick2() {
		emit("add", Math.random())
	}

	function onInput(e) {
		emit("change", e.detail.value);
	}
</script>

<style lang="scss">
	input {
		height: 40px;
		border: 1px solid red;
	}
</style>
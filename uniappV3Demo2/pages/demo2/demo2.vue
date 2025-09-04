<template>
	<view class="">
		<yx-layout>
			<template #header>
				<view>demo2头部</view>
			</template>
			<template #main>
				<view class="box1">demo2main</view>
			</template>
		</yx-layout>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.box1 {
		width: 100px;
		height: 100px;
		background: pink;
	}

	.box2 {
		width: 100px;
		height: 100px;
		background: green;
	}
</style>
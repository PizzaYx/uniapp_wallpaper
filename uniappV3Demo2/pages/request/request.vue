<template>
	<view class="container">
		<view class="menu">
			<uni-segmented-control :current="current" :values="values" @clickItem="onClickItem" styleType="button"
				activeColor="#2d7cdc"></uni-segmented-control>
		</view>
		<view class="layout">
			<view class="box" v-for="(item,index) in pets" :key="item._id">
				<view class="pic">
					<image lazy-load :src="item.url" mode="widthFix" @click="onPreview(index)">
					</image>
				</view>
				<view class="text">{{item.content}}</view>
				<view class="author">----- {{item.author}}</view>
			</view>
		</view>
		<view class="float">
			<view class="item" @click="onRefresh">
				<uni-icons type="refreshempty" size="26" color="#888"></uni-icons>
			</view>
			<view class="item" @click="onTop">
				<uni-icons type="arrow-up" size="26" color="#888"></uni-icons>
			</view>
		</view>
		<view class="loadMore">
			<uni-load-more status="loading"></uni-load-more>
		</view>
	</view>
</template>

<script setup>
	import {
		computed,
		ref
	} from 'vue';

	import {
		onReachBottom,
		onPullDownRefresh
	} from "@dcloudio/uni-app"


	const pets = ref([]);

	const current = ref(0);
	
	const classify = [{key:"all",value:"全部"},{key:"dog",value:"狗"},{key:"cat",value:"猫"}];
	
	const values = computed(()=>classify.map(item=>item.value))

	//点击菜单
	function onClickItem(e) {
		current.value = e.currentIndex;
		pets.value = [];
		network();
	}

	//点击刷新
	function onRefresh() {
		uni.startPullDownRefresh();
	}
	//回到顶部
	function onTop() {
		uni.pageScrollTo({
			scrollTop: 0,
			duration: 100
		})
	}


	//预览图片
	function onPreview(index) {
		let urls = pets.value.map(item => item.url);
		uni.previewImage({
			current: index,
			urls: urls
		})
	}
	//网络请求
	function network() {
		uni.showNavigationBarLoading();
		uni.request({
			url: "https://tea.qingnian8.com/tools/petShow",
			data: {
				size: 5,
				tpe: classify[current.value].key
			},
			method: 'GET',
			header: {
				"access-Key": "yx963852741"
			}
		}).then(res => {
			if (res.data.errCode === 0) {
				pets.value = [...pets.value, ...res.data.data];
				console.log(pets.value);
			} else if (res.data.errCode === 400) {
				uni.showToast({
					title: res.data.errMsg,
					icon: 'none',
					duration: 2000
				})
			}
		}).catch(err => {
			console.log(err);
		}).finally(() => {
			uni.stopPullDownRefresh()
			uni.hideNavigationBarLoading()
		})
	}

	//触底加载更多
	onReachBottom(() => {
		network();
	})
	//下拉刷新
	onPullDownRefresh(() => {
		pets.value = [];
		current.value = 0;
		network();
	})



	network();
</script>

<style lang="scss" scoped>
	.container {
		.menu {
			padding: 50rpx 50rpx 0;
		}

		.layout {
			padding: 50rpx;

			.box {
				margin-bottom: 60rpx;
				box-shadow: 0 10rpx 40rpx rgba(0, 0, 0, 0.1);
				border-radius: 20rpx;
				overflow: hidden;

				.pic {
					width: 100%;

					image {
						width: 100%;
					}
				}

				.text {
					padding: 30rpx;
					color: #333;
					font-size: 36rpx;
				}

				.author {
					padding: 0 30rpx 30rpx;
					text-align: right;
					color: #888;
					font-size: 28rpx;
				}
			}
		}

		.float {
			position: fixed;
			right: 30rpx;
			bottom: 80rpx;
			padding-bottom: env(safe-area-inset-bottom);

			.item {
				width: 90rpx;
				height: 90rpx;
				background: rgba(255, 255, 255, 0.9);
				border-radius: 50%;
				margin-bottom: 20rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				box-shadow: 1px solid #eee;
			}
		}

		.loadMore {
			padding-bottom: calc(env(safe-area-inset-bottom) + 50);
		}
	}
</style>
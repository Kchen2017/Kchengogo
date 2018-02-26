<template>
	<mt-swipe :auto="4000">
		<mt-swipe-item v-for="(swipe, index) in swipes" :key="index"><img :src="swipe.src"></mt-swipe-item>
	</mt-swipe>
</template>
<script>
	export default {
		data(){
			return {

			}
		},
		props: ["swipes"]
	}
</script>
<style>
	.mint-swipe .mint-swipe-item img {
		width: 100%;
		height: 100%;
	}
	.mint-swipe {
		height: 180px;
	}
</style>
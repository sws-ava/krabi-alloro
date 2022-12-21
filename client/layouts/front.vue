<template>
	<div class="page text-center">
		<front-header />
		<cart-block />
		<main>
			<!-- <nuxt /> -->
			<nuxt keep-alive/>
		</main>
		<front-footer />
	</div>
</template>

<script>

import {  mapActions } from 'vuex'

import frontFooter from '@/components/front/footer/frontFooter.vue'
import frontHeader from '@/components/front/header/frontHeader.vue'
import cartBlock from '@/components/front/header/cartBlock.vue'

export default {
  	components: {
		frontFooter,
		frontHeader,
		cartBlock
	},
	head() {
		return {
			link: [
				{rel: 'stylesheet', type: 'text/css', href: '/css/style.css'}
			],
			script: [
				{src: '/js/core.min.js', defer: true},
				{src: '/js/script.js', defer: true},
			],
		}
	},
	mounted(){
		this.countCartNums()

	},
	methods:{
		async countCartNums(){
			let cartList = JSON.parse(localStorage.getItem("cart"))
			if(cartList){
				let cartAmount = 0
				let cartSum = 0
				cartList.forEach(el => {
					cartAmount += el.amount
					cartSum += el.amount * el.price
				});
				this.setCartAmount(cartAmount)
				this.setCartSum(cartSum)
			}
		},
		
		...mapActions({
			setCartAmount: 'cart/setCartAmount',
			setCartSum: 'cart/setCartSum',
		}),
	}


}

</script>



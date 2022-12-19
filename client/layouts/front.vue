<template>
	<div class="page text-center">
		<front-header />
		<main>
			<nuxt />
		</main>
		<front-footer />
	</div>
</template>

<script>


import frontFooter from '@/components/front/footer/frontFooter.vue'
import frontHeader from '@/components/front/header/frontHeader.vue'

export default {
  	components: {
		frontFooter,
		frontHeader,
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


}

</script>



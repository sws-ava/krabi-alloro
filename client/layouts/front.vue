<template>
	<div class="page text-center">
		<nuxt-link :to="switchLocalePath('ru')">RU</nuxt-link>
		<nuxt-link :to="switchLocalePath('ua')">UA</nuxt-link>
		<!-- <front-header /> -->
		<main>
			<nuxt  keep-alive />
			<!-- <nuxt /> -->
		</main>
		<front-footer />
	</div>
</template>

<script>


import Cookies from 'js-cookie'
// import { cookieFromRequest } from '~/utils'

// import { mapGetters } from 'vuex'
// import { loadMessages } from '~/plugins/i18n'
import { mapMutations, mapActions } from 'vuex'

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
	mounted(){
		// this.getCookieLocale()
	},
	methods: {
		
		// getCookieLocale(){
		// 	let pathLocale = this.$route.fullPath.split('/')[1];
		// 	if(pathLocale == 'ua'){
		// 		this.setLocale({locale: 'ua'})
		// 	}else if(pathLocale == ''){
		// 		this.setLocale({locale: 'ru'})
		// 	}else{
		// 		this.setLocale({locale: 'ru'})
		// 	}
		// },
		// ...mapActions({
		// 	setLocale: 'lang/setLocale',
		// }),
	},


}

</script>



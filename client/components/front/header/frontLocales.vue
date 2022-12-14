<template>
	<div class="localesHolder">
		<div >
			<a v-for="(value, key) in locales" :key="key"   href="#"
				@click.prevent="setLocale(key)"
			>
				{{ value }}
			</a>
		</div>
	</div>
</template>

<script>

import { mapGetters } from 'vuex'
import { loadMessages } from '~/plugins/i18n'

export default {

  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    // setLocale (locale) {
	// 	console.log(locale)
	// 	console.log(this.$i18n.locale)
	// 	if(locale != 'ru'){
	// 		let pathArr = this.$route.fullPath.split('/')
	// 		if(pathArr[1] != locale){
	// 			this.$router.push('/'+locale+this.$route.fullPath)
	// 		}
	// 	}else{

	// 		let path = this.$route.fullPath.replace('/ua/', '/')
	// 		// this.$store.dispatch('lang/setLocale', { locale: 'ru' })
	// 		this.$router.push(path)
	// 	}
	
	// 	// if (this.$i18n.locale !== locale) {
	// 		loadMessages(locale)
	// 		this.$store.dispatch('lang/setLocale', { locale })
	// 	// }
    // }
  }
}

</script>


<style lang="scss" scoped>
.localesHolder {
	margin-top: 10px; 
	text-align: revert; 
	display: flex; 
	justify-content: flex-end; 
	gap: 6px;
	a + a {
		margin-left: 20px;
	}
}
</style>
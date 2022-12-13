<template>
  <div>
    {{ $t('ttl') }}

    
    <div v-html="page.content_ru"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'



export default {
  layout: 'front',



  head: {
    meta: [
      {
        hid: 'description',
        name: 'description',
        // content: this.page.description_ru
      }
    ],
     },
    data() {
      return {
        page: {}
      }
    },
    computed: mapGetters({
      locale: 'lang/locale',
      locales: 'lang/locales'
    }),
    async fetch() {
			console.log('main Page vue')
      this.page = await fetch(
        process.env.imagesBaseUrl + 'api/getMainPage'
      ).then(res => res.json())
    }
  }
</script>



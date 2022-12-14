<template>
  <div>
      <div v-html="$t('address')"></div>



    {{ $t('concept.title') }}



   
      <div v-html="$t('concept.content')"></div>

    
  </div>
</template>

<script>
import { mapGetters } from 'vuex'



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
    // data() {
    //   return {
    //     page: {}
    //   }
    // },
    // computed: mapGetters({
    //   locale: 'lang/locale',
    //   locales: 'lang/locales'
    // }),
    // async fetch() {
    //   this.page = await fetch(
    //     process.env.imagesBaseUrl + 'api/getConcept'
    //   ).then(res => res.json())
    // }
  }
</script>



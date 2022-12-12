<template>
<div>
  <div v-html="page.content_ru"></div>
  </div>
</template>

<script>

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
    // async fetch() {
    //   try {
    //     const res = await axios.post('/getPageContent', {slug: 2})
    //     console.log(res)
    //     this.page = res.data
    //   } catch (e) {
        
    //   }
    // },
    
    async fetch() {
      this.page = await fetch(
        process.env.imagesBaseUrl + 'api/getConcept'
      ).then(res => res.json())
    }
  }
</script>




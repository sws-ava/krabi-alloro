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
    async fetch() {
      this.page = await fetch(
        process.env.imagesBaseUrl + 'api/getContacts'
      ).then(res => res.json())
    }
  }
</script>




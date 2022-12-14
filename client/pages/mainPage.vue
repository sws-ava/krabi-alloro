<template>
  <div>
      <div v-html="$t('address')"></div>



    {{ $t('main.title') }}



   
      <div v-html="$t('main.content')"></div>
  </div>
</template>

<script>

import Cookies from 'js-cookie'

export default {
  layout: 'front',

  head(){
    return{
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('main.description'),
        },
      ]
    }
  },
  mounted(){
  }
  // data: () => ({
  //   page: {},
  //   // locale: '',
  // }),
  // async fetch(){
  //   this.page = await fetch(
  //     process.env.imagesBaseUrl + 'api/getMainPage?locale='+Cookies.get('i18n_redirected'),
  //   ).then(res => res.json())
  // },
    
}
</script>



<template>
  <div>
      <div v-html="$t('main.content')"></div>
  </div>
</template>

<script>


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

    
}
</script>



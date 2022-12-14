<template>
  <div> 
    <h1>gallery</h1>
    <!-- <div v-html="$t('delivery.content')"></div> -->
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
          content: this.$i18n.t('delivery.description'),
        },
      ]
    }
  },
}
</script>




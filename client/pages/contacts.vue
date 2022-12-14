<template>
  <div> 
    <div v-html="$t('contacts.content')"></div>
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
          content: this.$i18n.t('contacts.description'),
        },
      ]
    }
  },
}
</script>



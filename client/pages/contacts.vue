<template>
  <div> 
    <section class="section-top-50 section-bottom-66 section-lg-top-160 section-lg-bottom-160 inset-left-15 inset-right-15" style="background-image: url(/images/main_images/kontakty.jpg);     background-position-x: 50%;
    padding-top: 15%;
    padding-bottom: 15%;
    background-position-y: 50%;">
  <div class="header-divider">
	<h3 class="text-uppercase font-logo text-regular letter-spacing-200">{{$t('contacts.title')}}</h3>
  </div>
</section>
    <div v-html="$t('contacts.content')"></div>
  </div>
</template>

<script>

export default {
  layout: 'front',
  head(){
    return{
      title: this.$i18n.t('contacts.title') + ' ' + this.$i18n.t('static.siteName'),
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



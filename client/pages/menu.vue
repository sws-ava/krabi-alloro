<template>
  <div> 
    <section 
      class="section-top-50 section-bottom-66 section-lg-top-160 section-lg-bottom-160 inset-left-15 inset-right-15" 
      style="background-image: url(/images/main_images/test-menyu.jpg); background-size: 100%;  margin-bottom: 50px;  background-position-x: 50%; padding-top: 15%; padding-bottom: 15%; background-position-y: 50%;">
      <div class="header-divider">
      <h3 class="text-uppercase font-logo text-regular letter-spacing-200">Меню</h3>
      </div>
    </section>

    <div class="shell">
      <div class="panel-group menu_all" id="accordion" role="tablist" aria-multiselectable="true">
        <div class="range">
          <div
            v-for="(menuItem, idx) in menuItems"
            :key="menuItem.id"
            class="cell-sm-12"
          >
            <div 
              class="" 
              role="tab" 
              :id="'heading-' + idx"
            >
              <h3 class="">
                <a 
                  role="button" 
                  data-toggle="collapse" 
                  :href="'#collapse-' + idx" 
                  aria-expanded="false" 
                  :aria-controls="'collapse-' + idx" 
                  class="collapsed"
                >
                  {{ menuItem.title_ru }}       
                </a>
              </h3>
            </div>
            <div 
              :id="'collapse-' + idx" 
              class="panel-collapse collapse" 
              role="tabpanel" 
              :aria-labelledby="'heading-' + idx" 
              aria-expanded="false" 
              style="height: 40px;"
            >
              <menu-item
                :menuItems="menuItem.goods"
              />
              <!-- <div class="range">
                <div class="cell-sm-6 cell-md-4 item_holder">
                  <div class="image_holder">
                    <img class="image 2" src="/images/1/640_480_752_95340_1586443458.jpeg">
                  </div>
                  <h4>Рисовая лапша Wok с манго</h4>
                  <p class="description"></p>
                  <div class="price_weight text_left" style="justify-content: space-between; align-items: center;">
                    <span style="font-size: 12px; text-align: left;padding-right: 20px;">С МОРЕПРОДУКТАМИ (250 Г)</span>
                    <span class="price">249.00</span>
                  </div>
                  <div class="price_weight text_left" style="justify-content: space-between; align-items: center;">
                    <span style="font-size: 12px; text-align: left;padding-right: 20px;">С ТЕЛЯТИНОЙ (250 Г)</span>
                    <span class="price">229.00</span>
                  </div>
                </div>
                <div class="cell-sm-6 cell-md-4 item_holder">
                  <div class="image_holder">
                    <img class="image 2" src="/images/1/640_480_752_77904_1586444750.jpeg">
                  </div>
                  <h4>Суп Том-Ям-Коконат</h4>
                  <p class="description">кокосовое молоко, микс морепродуктов, окунь, лемонграсс, тайские секреты Том-Ям</p>
                  <div class="price_weight">
                    <span>300 мл</span>
                    <span class="price">199.00</span>
                  </div>
                </div>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>





  </div>
</template>

<script>

import menuItem from '@/components/front/menu/menuItem.vue'

export default {
  layout: 'front',
  components:{
    menuItem,
  },
  head(){
    return{
      title: this.$i18n.t('static.menuTitle') + ' ::  ' + this.$i18n.t('static.siteName'),
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$i18n.t('static.menuTitle'),
        },
      ]
    }
  },
  data(){
    return{
      menuItems: [],
    }
  },
	async fetch() {
		this.imagesBaseUrl = process.env.imagesBaseUrl + 'storage/'
    this.menuItems = await fetch(
      process.env.imagesBaseUrl + 'api/getMenu'
    ).then(res => res.json())
    // console.log(this.menuItems)
  },
}
</script>


<style scoped>
  h3{
    margin-bottom: 20px;
  }
</style>


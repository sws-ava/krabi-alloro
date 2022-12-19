<template>
  <div>
    <spinner v-if="showSpinner" />
    <div class="row mb-4">
      <div class="col-12">Редактирование страницы</div>
    </div>
    <form @submit.prevent>
      <div class="row">
        <div class="form-group col-lg-6">
          <small class="form-text text-muted">Название страницы на украинском</small>
          <input
            v-model="page.title_ru"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group col-lg-6">
          <small class="form-text text-muted">Название страницы на украинском</small>
          <input
            v-model="page.title_ua"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание страницы на русском</small>
          <input
            v-model="page.description_ru"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание страницы на украинском</small>
          <input
            v-model="page.description_ua"
            class="form-control"
            type="text"
          >
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Контент страницы на русском </small>
          <textarea 
              v-model="page.content_ru"
              class="form-control"
              style="min-height: 1000px;"
          ></textarea>
          <!-- <client-only>
            <quill-editor
              ref="editor"
              v-model="page.content_ru"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </client-only> -->
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Контент страницы на украинском </small>
          <textarea 
              v-model="page.content_ua"
              class="form-control"
              style="min-height: 1000px;"
          ></textarea>
          <!-- <client-only>
            <quill-editor
              ref="editor"
              v-model="page.content_ua"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </client-only> -->
        </div>
        <div class="d-flex justify-content-between col-12">
          <div class="form-group mt-2">
            <button 
              @click="savePage()"
              type="submit" 
              class="btn btn-sm btn-success"
            >
              Сохранить

            </button>
          </div>
          <div class="form-group mt-2">
            <button 
              @click="savePageAndExit()"
              type="submit" 
              class="btn btn-sm btn-primary"
            >
              Сохранить и выйти

            </button>
          </div>
          <div class="form-group mt-2">
             <button 
              @click="backToPages()"
              class="btn btn-sm btn-secondary"
             >
              Назад

             </button>
          </div>
        </div>
      </div>
    </form>
  </div>






</template>

<script>



import spinner from '@/components/admin/spinner.vue'
import axios from 'axios'




export default {
  components: {
    spinner,
  },
  layout: 'admin',
  data(){
    return{
      page: {},
			showSpinner: false,
      // editorOption: {
      //   theme: 'snow',
      //   modules: {
      //     toolbar: [
      //       ['bold', 'italic', 'underline', 'strike'],
      //       ['link', 'image'],
      //       ["showHtml"]
      //     ],
      //   }
      // }
    }
  },
  computed:{
    // editor() {
    //   return this.$refs.myQuillEditor.quill
    // }
  },
  mounted(){
    this.showSpinner = true
    this.fetchPage()
  },
  methods:{
    async fetchPage(){
      try{
        const page = await axios.get('/admin/fetchPage', {
          params:{
            pageId: this.$route.params.id
          }
        })
        this.page = page.data
			} catch (e) {
        console.log('some fetchPage error ')
      }finally{
        this.showSpinner = false
      }
    },
    async savePage(){
		  this.showSpinner = true
      try{
        const response = await axios.post('/admin/savePage/', {
          page: this.page
        })  
        console.log(response.data)      
      } catch (e){
        console.log('some savePage error')
        console.log(e.response.data)
      } finally{
		    this.showSpinner = false
      }
    },
    savePageAndExit(){
      this.savePage()
      this.backToPages()
    },
    backToPages(){
      this.$router.push('/admin/pages')
    },
    // onEditorBlur(editor) {
    //   // console.log('editor blur!', editor)
    // },
    // onEditorFocus(editor) {
    //   // console.log('editor focus!', editor)
    // },
    // onEditorReady(editor) {
    //   // console.log('editor ready!', editor)
    // },
  },
}
</script>

<style>

</style>
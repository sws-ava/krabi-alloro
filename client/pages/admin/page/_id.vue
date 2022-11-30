<template>
  <div>
    <spinner v-if="showSpinner" />
    <div class="row mb-4">
      <div class="col-12">edit page {{$route.params.id}}</div>
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
          <client-only>
            <quill-editor
              ref="editor"
              v-model="page.content_ru"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </client-only>
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Контент страницы на украинском </small>
          <client-only>
            <quill-editor
              ref="editor"
              v-model="page.content_ua"
              :options="editorOption"
              @blur="onEditorBlur($event)"
              @focus="onEditorFocus($event)"
              @ready="onEditorReady($event)"
            />
          </client-only>
        </div>
        <div class="d-flex justify-content-between col-12">
          <div class="form-group mt-2">
            <button 
              @click="savePage()"
              type="submit" 
              class="btn btn-success"
            >
              Сохранить

            </button>
          </div>
          <div class="form-group mt-2">
            <button 
              @click="savePageAndExit()"
              type="submit" 
              class="btn btn-primary"
            >
              Сохранить и выйти

            </button>
          </div>
          <div class="form-group mt-2">
             <button 
              @click="backToPages()"
              class="btn btn-secondary"
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





export default {
  components: {
    spinner,
  },
  layout: 'admin',
  data(){
    return{
      page: {},
			showSpinner: false,
      // content: '<p>I am Example</p>',
      editorOption: {
        // Some Quill options...
        theme: 'snow',
        modules: {
          toolbar: [
            ['bold', 'italic', 'underline', 'strike'],
            ['link', 'image'],
            ["showHtml"]
          ],
          // htmlEditButton: { debug: true, syntax: true },
        }
      }
    }
  },
  computed:{
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  mounted(){
    this.fetchPage()
  },
  methods:{
    backToPages(){
      this.clearInputs()
      this.$router.push('/admin/pages')
    },
    clearInputs(){
      this.page = {}
    },
    fetchPage(){
      setTimeout(() => {
        // fetch here
        this.page = {
          id: 1,
          title_ru: 'Название страницы на русском', 
          title_ua: 'Название страницы на украинском',
          description_ru: 'Описание страницы на русском',
          description_ua: 'Описание страницы на украинском',
          content_ru: '<b>Какой-то контент страницы на русском</b>',
          content_ua: '<b>Какой-то контент страницы на украинском</b>',
        }
			  this.showSpinner = false
      },500)
    },
    savePage(){
      console.log(this.page)
		  this.showSpinner = true
      setTimeout(()=> {

      // this.backToPages()
		  this.showSpinner = false
      }, 500)
    },
    savePageAndExit(){
      this.savePage()
      this.backToPages()
    },
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
  },
}
</script>

<style>

</style>
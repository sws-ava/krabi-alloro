<template>
  <div>
    <div class="row mb-4">
      <div class="col-12">edit page {{$route.params.id}}</div>
    </div>
    <form>
      <div class="row">
        <div class="form-group col-lg-6">
          <small id="emailHelp" class="form-text text-muted">Название страницы на украинском</small>
          <input type="text" name="title-ua" class="form-control">
        </div>
        <div class="form-group col-lg-6">
          <small id="emailHelp" class="form-text text-muted">Название страницы на русском</small>
          <input type="text" name="title-ru" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small id="emailHelp" class="form-text text-muted">Описание страницы на украинском</small>
          <input type="text" name="description-ua" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small id="emailHelp" class="form-text text-muted">Описание страницы на русском</small>
          <input type="text" name="description-ru" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Контент страницы на украинском</small>
          <textarea class="form-control" id="" rows="3"><b>Какой-то контент страницы</b></textarea>
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Контент страницы на русском</small>
          <textarea class="form-control" id="" rows="3"><b>Какой-то контент страницы на русском</b></textarea>
        </div>
        <div class="form-group col-lg-6 mt-2">
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </div>

      </div>
    </form>
  </div>






</template>

<script>
export default {
  layout: 'admin',
  data(){
    return{
      
    }
  }
}
console.log('asd')
</script>

<style>

</style>
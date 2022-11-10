<template>
	<div>
		<h5 class="mb-3">Добавить категорию</h5>
		<nav aria-label="breadcrumb">
			<ol class="breadcrumb-my">
				<li class="breadcrumb-item">
					<router-link :to="{name: 'dashboard'}">
					Главная
					</router-link>
				</li>
				<li class="breadcrumb-item">
					<router-link :to="{name: 'admin-menu'}">
						Меню
					</router-link>
				</li>
				<li class="breadcrumb-item">
					<router-link :to="{name: 'admin-menu-categories'}">
						Категории меню
					</router-link>
				</li>
				<li class="breadcrumb-item active" aria-current="page">Добавить категорию</li>
			</ol>
		</nav>

		
    <form>
      <div class="row">
        <div class="form-group col-lg-7">
          <small id="emailHelp" class="form-text text-muted">Название категории ру</small>
          <input type="text" name="title-ua" class="form-control">
        </div>
		<div class="form-group col-lg-7">
			<small id="emailHelp" class="form-text text-muted">Название категории укр</small>
			<input   type="text" name="title-ua" class="form-control">
		</div>
		<div class="form-group col-lg-7">
			<small class="form-text text-muted">Ссылка категории</small>
			<input type="text" name="slug" class="form-control">
		</div>
        <div class="form-group col-lg-7 mt-2">
          <button type="submit" class="btn btn-primary">Сохранить</button>
        </div>

      </div>
    </form>
		
		

		

	</div>
</template>

<script>
export default {
	middleware: 'auth',
	layout: 'admin',
	
}

</script>

<style lang="scss" scoped>

</style>
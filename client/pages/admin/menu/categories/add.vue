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

		
	
		<form @submit.prevent>
			<div class="row">
				<div class="form-group col-lg-7">
					<small class="form-text text-muted">Название категории ру</small>
					<input 
						required
						v-model="category.title_ru" 
						type="text" 
						class="form-control"
					>
				</div>
				<div class="form-group col-lg-7">
					<small  class="form-text text-muted">Название категории укр</small>
					<input  
						required
						v-model="category.title_ua" 
						type="text" 
						class="form-control"
					>
				</div>
				<div class="form-group col-lg-7">
					<small class="form-text text-muted">Ссылка категории</small>
					<input 
						required
						v-model="category.slug"
						type="text"
						class="form-control"
					>
				</div>

				<div class="d-flex justify-content-between col-12">
					<div class="form-group mt-2">
						<button 
							@click="saveCategory()"
							type="submit" 
							class="btn btn-success"
						>
							Сохранить

						</button>
					</div>
					<div class="form-group mt-2">
						<button 
							@click="saveCategoryAndExit()"
							type="submit" 
							class="btn btn-primary"
						>
							Сохранить и выйти

						</button>
					</div>
					<div class="form-group mt-2">
						<button 
						@click="backToCategories()"
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
export default {
	middleware: 'auth',
	layout: 'admin',
	

	data(){
		return{
			category:{},
			showSpinner: false,
		}
	},
	methods:{
		backToCategories(){
			this.clearInputs()
			this.$router.push('/admin/menu-categories')
		},
		clearInputs(){
			this.category = {}
		},
		saveCategory(){
			if(this.category.title_ru && this.category.title_ua && this.category.slug){
				this.showSpinner = true
				setTimeout(()=> {
					this.showSpinner = false
				}, 500)
				// fetch here
			}
		},
		saveCategoryAndExit(){
			this.saveCategory()
			this.backToCategories()
		},
	},
}

</script>

<style lang="scss" scoped>

</style>
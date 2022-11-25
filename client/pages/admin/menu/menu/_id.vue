<template>
	<div>
		<h5 class="mb-3">Редактировать блюдо</h5>
    	<spinner v-if="showSpinner" />
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
				<li class="breadcrumb-item active" aria-current="page">Редактирование блюда</li>
			</ol>
		</nav>
		    <form>
      <div class="row">
		<div class="col-lg-7">
			<div class="form-group">
				<small class="form-text text-muted">Выбрать категорию</small>
				<select
					class="form-control"
				>
					<option :value="cat.id"
						:selected="cat.id === item.cat"
						v-for="cat in categories" :key="cat.id"
					>
						{{ cat.title }}
					</option>
				</select>
			</div>
			<div class="form-group">
			<small class="form-text text-muted">Название блюда ру</small>
			<input :value="item.title_ru" type="text" name="title" class="form-control">
			</div>
			<div class="form-group">
			<small class="form-text text-muted">Название блюда укр</small>
			<input :value="item.title_ua" type="text" name="title-ua" class="form-control">
			</div>
        </div>
		<div class="col-lg-5">
			<form v-if="!item.photo">
				<div class="form-group">
					<label for="exampleFormControlFile1">Добавить фото</label>
					<input type="file" class="form-control-file">
				</div>
			</form>
			<div class="imageHolder">
				<img :src="item.photo" alt="">
			</div>
				
				<div  v-if="item.photo" class="arrows">
					<span 
						@click="showDelModal(photo)"
						class="fa-icon-holder"
					>
						<font-awesome-icon 
							:icon="['fas', 'trash']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
				</div>
		</div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда ру (description)</small>
          <input :value="item.description_ru" type="text" name="description" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда укр (description)</small>
          <input :value="item.description_ua" type="text" name="description-ua" class="form-control">
        </div>
		
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда на сайт ру</small>
          <input :value="item.desc_ru" type="text" name="description" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда на сайт укр</small>
          <input :value="item.desc_ua" type="text" name="description-ua" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Ссылка на блюдо</small>
          <input :value="item.slug" type="text" name="slug" class="form-control">
        </div>

		<div class="col-12">
			Цена:
			<div v-for="price in item.prices" :key="price.id" class="row">
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">вес/шт/л/размер</small>
					<input
						type="text"
						class="w-100 form-control"
						:value="price.weight"
					>
				</div>
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">ед. измерения</small>
					<input
						type="text"
						class="w-100 form-control"
						:value="price.weightKind"
					>
				</div>
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">цена</small>
					<input
						type="text"
						class="w-100 form-control"
						:value="price.price"
					>
				</div>
			</div>
			<div class="row d-flex align-items-center">
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">вес/шт/л/размер</small>
					<input
						type="text"
						class="w-100 form-control"
					>
				</div>
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">ед. измерения</small>
					<input
						type="text"
						class="w-100 form-control"
					>
				</div>
        		<div class="form-group col-lg-2">
          			<small class="form-text text-muted">цена</small>
					<input
						type="text"
						class="w-100 form-control"
					>
				</div>
				<div class="minus-btn">
					<font-awesome-icon 
						:icon="['fas', 'minus']"
						style="width:13px; height: 13px"
						class="fa-icon"
					/>
				</div>
			</div>
			
			<div class="row">
				<div class="col-12">
					<div class="plus-btn">
						<font-awesome-icon 
							:icon="['fas', 'plus']"
							style="width:13px; height: 13px"
							class="fa-icon"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="form-group col-lg-12 mt-4 text-right">
			<button type="submit" class="btn btn-primary">Сохранить</button>
		</div>

      </div>
    </form>
		

		

	</div>
</template>

<script>

import spinner from '@/components/admin/spinner.vue'

export default {
	middleware: 'auth',
	layout: 'admin',

	
	components: { spinner },



	data(){
		return{
			item:{},
			categories:[
				{id:1, title:'Пицца', order: 1},
				{id:2, title:'Напитки', order: 3},
				{id:3, title:'WOK', order: 2},
			],
			showSpinner: true
		}
	},
	mounted(){
		this.fetchItem()
	},
	methods:{
		fetchItem(){
			this.showSpinner = true	
			setTimeout(() => {
				// fetch here
				this.item = {
					id:1,
					cat: 2,
					title_ru:'Маргарита',
					title_ua:'Маргарiта',
					description_ru: 'Описание блюда на русском в html',
					description_ua: 'Описание блюда на украинском в html',
					desc_ru: 'Описание блюда на украинском на сайте',
					desc_ua: 'Описание блюда на украинском на сайте',
					slug: 'margarita',
					prices:[
						{id:1, weight: 'L 17', weightKind:'см', price: 50},
						{id:2, weight: 'XL 17', weightKind:'см', price: 85},
						{id:3, weight: 'XXL 17', weightKind:'см', price: 150},
					],
					photo: 'https://via.placeholder.com/300x500'
				}
				this.showSpinner = false
			},500)
		}
	}
}

</script>

<style lang="scss" scoped>


	.price-holder{
		position: relative;
		width: 170px;
		display: flex;
   		align-items: center;
		&+.price-holder{
			margin-top: 10px;
		}
	}
	.plus-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		background: green;
		border-radius: 50%;
		padding: 13px;
		margin-left: 5px;
		cursor: pointer;
		svg{
			color:#fff;
		}
	}
	.minus-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		background: red;
		border-radius: 50%;
		padding: 13px;
		margin-left: 5px;
		cursor: pointer;
		svg{
			color:#fff;
		}
	}
	.imageHolder{
		width: 200px;
		height: 200px;
		cursor: pointer;
		img{
			width: 100%;
			object-fit: cover;
			height: inherit;
		}
	}
	.arrows{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		width: 200px;
		span{
			cursor: pointer;
		}
	}
	.fa-icon-holder {
		& + .fa-icon-holder{
			margin-left: 50px;
		}
	}
</style>
<template>
	<div>
		<h5 class="mb-3">Добавить блюдо</h5>
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
				<li class="breadcrumb-item active" aria-current="page">Добавить блюдо</li>
			</ol>
		</nav>

		
    <form>
      <div class="row">
		<div class="form-group col-lg-7">
			<small class="form-text text-muted">Выбрать категорию</small>
			<select class="form-control" >
				<option selected disabled>Выбрать категорию</option>
				<option
					v-for="cat in categories" :key="cat.id"
				>
					{{ cat.title }}
				</option>
			</select>
		</div>
        <div class="form-group col-lg-7">
          <small class="form-text text-muted">Название блюда ру</small>
          <input type="text" name="title" class="form-control">
        </div>
        <div class="form-group col-lg-7">
          <small class="form-text text-muted">Название блюда укр</small>
          <input type="text" name="title-ua" class="form-control">
        </div>
		
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда ру (description)</small>
          <input type="text" name="description" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда укр (description)</small>
          <input type="text" name="description-ua" class="form-control">
        </div>
		
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда на сайт ру</small>
          <input type="text" name="description" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Описание блюда на сайт укр</small>
          <input type="text" name="description-ua" class="form-control">
        </div>
        <div class="form-group col-lg-12">
          <small class="form-text text-muted">Ссылка на блюдо</small>
          <input type="text" name="slug" class="form-control">
        </div>

		<div class="col-12">
			Цена:
			<div class="row">
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
export default {
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			categories:[
				{id:1, title:'Пицца', order: 1},
				{id:2, title:'Напитки', order: 3},
				{id:3, title:'WOK', order: 2},
			],
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
</style>
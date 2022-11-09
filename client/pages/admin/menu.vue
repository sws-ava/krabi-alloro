<template>
	<div>
		<h5 class="mb-3">Меню</h5>
		
		<div class="menu-top-row">
			<div class="menu-top-row__left">
				<router-link
					:to="{name: 'admin-menu-add'}"
				>
					Добавить блюдо
				</router-link>
			</div>
			<div>
				<router-link
					:to="{name: 'admin-menu-categories'}"
				>
					Категории меню
				</router-link>
			</div>
		</div>
		<div class="row seacrh-block mt-4">
			<div class="form-group col-md-12">
				<input type="text" class="form-control" placeholder="Поиск">
			</div>
		</div>

		<table class="table">
			<!-- <thead>
				<tr>
					<th scope="col">ID</th>
					<th scope="col">Заголовок</th>
					<th scope="col-lg-2">Цена</th>
					<th scope="col">Опции</th>
				</tr>
			</thead> -->
			<tbody>
				<tr v-for="item in menuItems" :key="item.id">
					<th scope="row">{{ item.id }}</th>
					<td>{{item.title}}</td>
					<td class="price-holder">
						<input
							:value="item.price"
							type="text"
							class="w-100"

						>
						<div class="done">
							<font-awesome-icon 
								:icon="['fas', 'check']"
								style="width:13px; height: 13px"
								class="fa-icon"
							/>
						</div>
					</td>
					<td class="btns-holder">
						<router-link 
							:to="'/admin/menu/'+item.id"  
							class="btn btn-outline-primary btn-sm"
						>
							Редактировать
						</router-link>
						
						<div class="btn btn-outline-secondary btn-sm">Скрыть</div>
						<div class="btn btn-outline-danger btn-sm">Удалить</div>
					</td>
				</tr>
			</tbody>
		</table>




		

	</div>
</template>

<script>
export default {
	middleware: 'auth',
	layout: 'admin',

	
	data(){
		return{
			menuItems: [
				{id:1, item:11, title:'Meat pizza', weight:'270гр', price:270.99},
				{id:2, item:27, title:'Coca cola', weight:'2л', price:70},
				{id:4, item:34, title:'Cheese pizza Cheese pizza Cheese pizza pizza Cheese pizza Cheese pizza', weight:'470гр', price:150.99},
			]
		}
	}


}

</script>

<style lang="scss" scoped>
	.menu-top-row{
		display: flex;
		justify-content: space-between;
		&__left{
			a + a{
				margin-left: 20px;
			}
		}
	}
	.btns-holder{
		white-space: nowrap;
		text-align: right;
	}
	.price-holder{
		position: relative;
		width: 140px;
		display: flex;
   		align-items: center;
		.done{
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
	}
</style>
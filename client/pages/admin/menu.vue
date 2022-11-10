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
					<td class="w-100">{{item.title}}</td>
					<td>
						<div v-for="subItem in item.items" :key="subItem.id" class="price-holder">
							<small class="form-text text-muted nowrap">
								{{subItem.weight}} {{subItem.weightKind}}
							</small>
							<input
								:value="subItem.price"
								type="text"
								class="w-100 form-control text-right"
							>
							<div class="done">
								<font-awesome-icon 
									:icon="['fas', 'check']"
									style="width:13px; height: 13px"
									class="fa-icon"
								/>
							</div>
						</div>
					</td>
					<td class="btns-holder">
						<router-link 
							:to="'/admin/menu/'+item.id"  
							class="btn btn-outline-primary btn-sm"
						>
							Ред
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
				{
					id:1,
					title:'Маргарита',
					items:[
						{id:1, weight: 'L 17', weightKind:'см', price: 50.85},
						{id:2, weight: 'XL 17', weightKind:'см', price: 85},
						{id:3, weight: 'XXL 17', weightKind:'см', price: 150},
					]
				},
				{
					id:3,
					title:'Яичница с беконом и зеленым салатом',
					items:[
						{id:7, weight: '200', weightKind:'г', price: 55},
					],
				},
				{
					id:2,
					title:'Coca cola',
					items:[
						{id:4, weight: '0.5', weightKind:'л', price: 20},
						{id:5, weight: '1.0', weightKind:'л', price: 45},
						{id:6, weight: '2.0', weightKind:'л', price: 50},
					]
				},
				{
					id:4,
					title:'Омлет с охотничьими колбасками, сыром Моцарелла и помидорами черри',
					items:[
						{id:8, weight: '200', weightKind:'г', price: 75},
					], 
				},
			]
		}
	},


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
		width: 170px;
		display: flex;
   		align-items: center;
		&+.price-holder{
			margin-top: 10px;
		}
		input{
			margin-left: 5px;
			min-width: 60px;
		}
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
	.nowrap{
		white-space: nowrap;
	}
</style>
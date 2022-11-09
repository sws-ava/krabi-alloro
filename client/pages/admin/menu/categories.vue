<template>
	<div>
		<h5 class="mb-3">Категории меню</h5>
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
				<li class="breadcrumb-item active" aria-current="page">Категории меню</li>
			</ol>
		</nav>
		
		<div class="row">
			<div class="col-lg-6">

			</div>
		</div>

		<div class="text-right">
			<router-link
				:to="{name: 'admin-menu-category-add'}"
			>
				Добавить категорию
			</router-link>
		</div>

		<ul class="list-group  list-group-flush">
			<li
				v-for="cat in categories" :key="cat.id"
				class="list-group-item text-center"
			>	
				<span class="fa-icon-holder mr-4">
					<font-awesome-icon 
						:icon="['fas', 'arrow-down']"
						style="width:16px; height: 16px"
						class="fa-icon"
					/>
				</span>
				<router-link
					:to="`/admin/menu-category/${cat.id}`"
				>
					 {{ cat.title }}
					<span class="edit-item ml-4">
						<span class="fa-icon-holder">
							<font-awesome-icon 
								:icon="['fas', 'pen']"
								style="width:16px; height: 16px"
							/>
						</span>
					</span>
				</router-link>
				<span class="fa-icon-holder ml-4">
					<font-awesome-icon 
						:icon="['fas', 'arrow-up']"
						style="width:16px; height: 16px"
						class="fa-icon"
					/>
				</span>
			</li>
		</ul>

		

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
			]
		}
	}
}

</script>

<style lang="scss" scoped>
	.list-group{
		&-item{
			max-width: 300px;
    		margin: 0 auto;
		}
	}
	.fa-icon{
		cursor: pointer;
	}
	.fa-icon-holder{
		cursor: pointer;
		svg{
			transition: scale 0.25s ease-in-out;
		}
		&:hover{
			svg{
				scale: 1.1;
			}
		}
	}
</style>
<template>
	<div>
		<h5 class="mb-3">Категории меню</h5>
		<spinner v-if="showSpinner"></spinner>
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
				v-for="(cat, index) in categories" :key="cat.id"
				class="list-group-item text-center"
			>	
				<span
					v-if="index !== categories.length - 1"
					@click="orderBottom(cat.order)" 
					class="fa-icon-holder mr-4"
				>
					<font-awesome-icon 
						:icon="['fas', 'arrow-down']"
						style="width:16px; height: 16px"
						class="fa-icon"
					/>
				</span>
				<router-link
					:to="`/admin/menu-category/${cat.id}`"
				>
					{{ cat.title_ru }}
					<span class="edit-item ml-4">
						<span class="fa-icon-holder">
							<font-awesome-icon 
								:icon="['fas', 'pen']"
								style="width:16px; height: 16px"
							/>
						</span>
					</span>
				</router-link>
				<span
					v-if="index !== 0"
					@click="orderTop(cat.order)" 
					class="fa-icon-holder ml-4"
				>
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
import spinner from '@/components/admin/spinner.vue'
export default {
	components:{
		spinner
	},
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			categories:[
				{id:1, title_ru:'Пицца', order: 1},
				{id:2, title_ru:'Напитки', order: 3},
				{id:3, title_ru:'WOK', order: 2},
			],
			showSpinner: false
		}
	},
	methods:{
		orderTop(order){
			this.showSpinner = true
			setTimeout(() => {
				this.categories.forEach(el => {
					if(el.order == order - 1){
						el.order += 1
					}
					else if(el.order == order){
						el.order -= 1
					}
				})
				this.sortCategories()
				this.showSpinner = false
			}, 500)
		},
		orderBottom(order){
			this.showSpinner = true
			setTimeout(() => { 
				this.categories.forEach(el => {
					if(el.order == order){ 
						el.order += 1			
					}
					else if(el.order == order + 1){
						el.order -= 1
					}
				this.showSpinner = false
				this.sortCategories()
				})
			}, 500)
		},
		sortCategories(){
			this.categories.sort((a,b) => a.order - b.order)
		},
	},
	mounted(){
		this.sortCategories()
	},

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
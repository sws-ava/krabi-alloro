<template>
	<div>
		<h5 class="mb-3">Меню</h5>
		<spinner v-if="$store.state.adminMenuItems.showSpinner"></spinner>
		<!-- <div
			v-if="showSaveOrderButton" 
			class="saveOrderButton"
		>
			Сохранить порядок вывода
		</div> -->
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
				<input 
					type="text" 
					class="form-control" 
					placeholder="Поиск"
				>
			</div>
		</div>
		<div class="row seacrh-block mt-2">
			<div class="form-group col-md-12">
				<span 
					@click="fetchItems()"
					class="categoryBtn"
				>
					Всё	
				</span>
				<span 
					@click="getItemsByCategory(cat)"
					v-for="cat in categories" :key="cat.id"
					class="categoryBtn">
						{{ cat.title_ru }}
				</span>
			</div>
		</div>

		<table class="table">
			<tbody>
				<tr v-for="(item, index) in $store.state.adminMenuItems.menuItems" :key="item.id">
					<th scope="row">{{ item.id }}</th>
					<td class="w-100">
						{{item.title}}
						<div class="subItemsHolder mt-2">
							<div  v-for="subItem in item.items" :key="subItem.id" class="subItemsHolderFlex">
								<!-- <div class="orderNum">
									<input 
										@input="showSaveOrderButton = true"
										:value="subItem.order"
										type="text"
										class="w-100"
									>
								</div> -->
								<div class="price-holder mb-1">
									<small class="form-text text-muted w-100show: 1, ">
										{{subItem.weight}} {{subItem.weightKind}}
									</small>
									<div class="subItemHandler">
										<input
											disabled="disabled"
											@change="changePriceHandler($event)"
											:value="subItem.price"
											type="text"
											class="w-100 form-control priceInput"
										>
										<div
											@click="changePriceActive($event)"
											class="editPrice"
										>
											<font-awesome-icon 
												:icon="['fas', 'edit']"
												style="width:13px; height: 13px"
												class="fa-icon"
											/>
										</div>
										<div
											@click="changePriceFetch(subItem)" 
											class="done"
										>
											<font-awesome-icon 
												:icon="['fas', 'check']"
												style="width:13px; height: 13px"
												class="fa-icon"
											/>
										</div>
										<div class="ml-2">
											<div 
												@click="showSubItem(subItem)"
												v-if="!subItem.show" 
												class="btn btn-outline-secondary btn-sm"  
												style="color:green"
											>
												
												<font-awesome-icon 
													:icon="['fas', 'eye']"
													style="width:13px; height: 13px"
													class="fa-icon"
												/>
											</div>
											<div 
												@click="hideSubItem(subItem)"
												v-else 
												class="btn btn-outline-secondary btn-sm" 
												style="color:red"
											>
												<font-awesome-icon 
													:icon="['fas', 'eye-slash']"
													style="width:13px; height: 13px"
													class="fa-icon"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>	
						</div>	
					</td>
					<td class="btns-holder">
						<div class="d-flex justify-content-between mb-2" style="gap:10px;">
							<router-link 
								:to="'/admin/menu/'+item.id"  
								class="btn btn-outline-primary btn-sm"
							>
								Ред
							</router-link>
							<div 
								@click="hideItem(item)"
								v-if="item.show" 
								class="btn btn-outline-secondary btn-sm"
							>
								Скрыть
							</div>
							<div 
								@click="showItem(item)"
								v-else 
								class="btn btn-outline-secondary btn-sm"
							>
								Показать
							</div>
						</div>
						<div class="upDownHolder">
							<span
								v-if="index !== menuItems.length - 1"
								@click="orderBottom(item.order)" 
								class="fa-icon-holder mr-2 ml-2"
							>
								<font-awesome-icon 
									:icon="['fas', 'arrow-down']"
									style="width:16px; height: 16px"
									class="fa-icon"
								/>
							</span>
							<span
								v-if="index !== 0"
								@click="orderTop(item.order)" 
								class="fa-icon-holder ml-2 mr-2"
							>
								<font-awesome-icon 
									:icon="['fas', 'arrow-up']"
									style="width:16px; height: 16px"
									class="fa-icon"
								/>
							</span>
						</div>
					</td>
				</tr>
				
			</tbody>
		</table>

	</div>
</template>

<script>
import spinner from '../../components/admin/spinner.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  components: { spinner },
	middleware: 'auth',
	layout: 'admin',

	computed: mapGetters({
		user: 'auth/user',
		// searchQuery: 'menuItems/searchQuery',
		// choosedCategory: 'menuItems/choosedCategory',
		// menuItems: 'adminMenuItems/menuItems',
		// showSpinner: 'adminMenuItems/showSpinner',
	}),
	
	data(){
		return{
			// showSpinner: false,
			// menuItems: [],
			categories:[
				{id:1, title_ru:'Пицца', order: 1},
				{id:2, title_ru:'Напитки', order: 3},
				{id:3, title_ru:'WOK', order: 2},
			],
			// searchQuery: '',
			// changePrice: '',
		}
	},
	mounted(){
		// this.fetchItems()
	},
	methods:{
		...mapActions({
			fetchItems: 'adminMenuItems/fetchItems'
		}),


		// sortItems(){
		// 	this.menuItems.sort((a,b) => a.order - b.order)
		// },
		// fetchItems(){
			
		// 	this.showSpinner = true	
		// 	setTimeout(() => {
		// 		this.menuItems = [
		// 			{
		// 				id:1,
		// 				show: true,
		// 				title:'Том ям коконат',
		// 				items:[
		// 					{id:1, mainItem: 1, order: 1, show: 1, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
		// 					{id:2, mainItem: 1, order: 3, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 85},
		// 					{id:3, mainItem: 1, order: 2, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 150},
		// 				],
		// 				order: 1,
		// 			},
		// 			{
		// 				id:3,
		// 				show: false,
		// 				title:'Яичница с беконом и зеленым салатом',
		// 				items:[
		// 					{id:7, mainItem: 3, order: 1, show: 0, weight: '200', weightKind:'г', price: 55},
		// 				],
		// 				order: 3,
		// 			},
		// 			{
		// 				id:2,
		// 				show: false,
		// 				title:'Coca cola',
		// 				items:[
		// 					{id:4,  mainItem: 2, order: 2, show: 1, weight: '0.5', weightKind:'л', price: 20},
		// 					{id:5,  mainItem: 2, order: 1, show: 1, weight: '1.0', weightKind:'л', price: 45},
		// 					{id:6,  mainItem: 2, order: 3, show: 1, weight: '2.0', weightKind:'л', price: 50},
		// 				],
		// 				order: 2,
		// 			},
		// 			{
		// 				id:4,
		// 				show: false,
		// 				title:'Омлет с охотничьими колбасками, сыром Моцарелла и помидорами черри',
		// 				items:[
		// 					{id:8, mainItem: 4, order: 1, show: 1, weight: '200', weightKind:'г', price: 75},
		// 				], 
		// 				order: 4,
		// 			},
		// 		]
		// 		this.sortItems()
		// 		this.showSpinner = false	
		// 	}, 500)
		// },
		// getItemsByCategory(cat){
		// 	console.log(cat.title_ru)
		// 	this.showSpinner = true	
		// 	setTimeout(() => {
		// 		// fetch here
		// 		this.menuItems = [
		// 		{
		// 			id:1,
		// 			show: true,
		// 			title:'Маргарита',
		// 			items:[
		// 				{id:1, show: 1, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
		// 				{id:2, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 85},
		// 				{id:3, show: 0, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 150},
		// 			],
		// 			order: 2,
		// 		},
		// 		{ 
		// 			id:2,
		// 			show: false,
		// 			title:'Diabola',
		// 			items:[
		// 				{id:5, show: 1, weight: 'З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ З ТИГРОВИМИ КРЕВЕТКАМИ ТА КЕШЮ', weightKind:'см', price: 50.85},
		// 			],
		// 			order: 1, 
		// 		},
		// 		]
		// 		this.sortItems()
		// 		this.showSpinner = false
		// 	},500)
		// },
		// getItemsBySearchQuery(event){
		// 	this.searchQuery = event.target.value
		// 	console.log(event.target.value)
		// },
		// showSubItem(subItem){
		// 	this.showSpinner = true
		// 	setTimeout(() =>{
		// 		this.menuItems.forEach(el => {
		// 			el.items.forEach(element => {
		// 				if(subItem.id == element.id){
		// 					element.show = 1
		// 				}
		// 			});
		// 		});
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// hideSubItem(subItem){
		// 	this.showSpinner = true
		// 	setTimeout(() =>{
		// 		this.menuItems.forEach(el => {
		// 			el.items.forEach(element => {
		// 				if(subItem.id == element.id){
		// 					element.show = 0
		// 				}
		// 			});
		// 		});
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// showItem(item){
		// 	this.showSpinner = true
		// 	setTimeout(() =>{
		// 		this.menuItems.forEach(el => {
		// 			if(item.id == el.id){
		// 				el.show = true
		// 			}
		// 		});
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// hideItem(item){
		// 	this.showSpinner = true
		// 	setTimeout(() =>{
		// 		this.menuItems.forEach(el => {
		// 			if(item.id == el.id){
		// 				el.show = false
		// 			}
		// 		});
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// changePriceActive(event){
		// 	let targetParent = event.target.closest('.subItemHandler')
		// 	targetParent.classList.add('priceRowFocus')
		// 	let targetInput = targetParent.firstChild
		// 	targetInput.classList.add('priceInputFocus')
		// 	targetInput.removeAttribute('disabled')
		// 	document.querySelectorAll('.editPrice').forEach(el => {
		// 		el.classList.add('d-none')
		// 	})
		// },
		// changePriceHandler(event){
		// 	this.changePrice =  event.target.value.replace(',', '.')
		// 	// console.log(this.changePrice)
		// },
		// changePriceFetch(subItem){
		// 	this.showSpinner = true
		// 	if(this.changePrice){
		// 		this.menuItems.forEach(el => {
		// 			el.items.forEach(element => {
		// 				if(subItem.id == element.id){
		// 					element.price = this.changePrice
		// 				}
		// 			});
		// 		});
		// 	}
		// 	setTimeout(() =>{
		// 		document.querySelectorAll('.priceInput').forEach(element => {
		// 			element.setAttribute('disabled', 'disabled')
		// 		});
				
		// 		document.querySelectorAll('.editPrice.d-none').forEach(el => {
		// 			el.classList.remove('d-none')
		// 		})
		// 		document.querySelector('.priceInputFocus').classList.remove('priceInputFocus')
		// 		let targetParent = document.querySelector('.priceRowFocus')
		// 		targetParent.classList.remove('priceRowFocus')
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// orderTop(order){
		// 	this.showSpinner = true
		// 	setTimeout(() => {
		// 		this.menuItems.forEach(el => {
		// 			if(el.order == order - 1){
		// 				el.order += 1
		// 			}
		// 			else if(el.order == order){
		// 				el.order -= 1
		// 			}
		// 		})
		// 		this.sortItems()
		// 		this.showSpinner = false
		// 	}, 500)
		// },
		// orderBottom(order){
		// 	this.showSpinner = true
		// 	setTimeout(() => { 
		// 		this.menuItems.forEach(el => {
		// 			if(el.order == order){ 
		// 				el.order += 1			
		// 			}
		// 			else if(el.order == order + 1){
		// 				el.order -= 1
		// 			}
		// 		this.showSpinner = false
		// 		this.sortItems()
		// 		})
		// 	}, 500)
		// },
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
		width: 170px;
		display: flex;
   		align-items: center;
		justify-content: flex-end;
    	width: 100%;
		&+.price-holder{
			margin-top: 10px;
		}
		input{
			margin-left: 5px;
			min-width: 90px;
		}
	}

	.nowrap{
		white-space: nowrap;
	}
	.categoryBtn{
		cursor: pointer;
		display: inline-block;
		&:hover{
			text-decoration: underline;
		}
	}
	.categoryBtn + .categoryBtn {
		margin-left: 10px;
		margin-bottom: 10px;
	}
	.subItemsHolder{
		max-width: 80%;
		margin-left: auto;
	}
	.subItemHandler{
		display: flex;
		align-items: center;
		width: 180px;
		min-width: 180px;
	    max-width: 180px;
	}	
	.done{
		display: none;
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
	.editPrice{
		display: none;
		align-items: center;
		justify-content: center;
		width: 20px;
		height: 20px;
		background: lightblue;
		border-radius: 50%;
		padding: 13px;
		margin-left: 5px;
		cursor: pointer;
		svg{
			color:#000;
		}
	}
	.subItemHandler{
		.done{
			display: none;
		}
		.editPrice{
			display: flex;
		}
	}
	.subItemHandler.priceRowFocus{
		.done{
			display: flex;
		}
		.editPrice{
			display: none;
		}
	}
	.subItemsHolderFlex{
		display: flex;
		align-items: center;
	}
	.saveOrderButton{
		position: fixed;
		right: 20px;
		bottom: 20px;
		background: green;
		color: #fff;
		padding: 10px 20px;
		cursor: pointer;
		transition: opacity 0.25s ease-in-out;
		&:hover{
			opacity: 0.7;
		}
	}
	.orderNum{
		width: 50px;
		margin-right: 50px;
	}
	.upDownHolder{
		display: flex;
		justify-content: center;
		margin-top: 30px;
		span {
			cursor: pointer;
			padding: 0 10px;
		}
	}
</style>
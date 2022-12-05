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
		<div class="row">
			<div class="col-lg-4 offset-lg-8" style="min-height: 240px;">
				<form v-if="!item.photo">
					<div class="form-group">
						<label for="exampleFormControlFile1">Добавить фото</label>
						<input type="file" class="form-control-file" >
					</div>
				</form>
				<div 
					@click="showPhotoWindow = true"
					v-if="item.photo" 
					class="imageHolder"
				>
					<img 
						@click="showItemPhoto = true"
						:src="item.photo" 
						alt=""
					>
				</div>
					
				<div  v-if="item.photo" class="arrows">
					<span class="fa-icon-holder" >
						<font-awesome-icon 
							@click="showDeletePhotoModal = true"
							:icon="['fas', 'trash']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
				</div>
			</div>
		</div>
		<form>
			<div class="row">
				<div class="col-lg-7" style="    margin-top: -170px;">
					<div class="form-group">
						<small class="form-text text-muted">Выбрать категорию</small>
						<select
							class="form-control"
						>
							<option :value="cat.id"
								:selected="cat.id === item.category"
								v-for="cat in categories" :key="cat.id"
							>
								{{ cat.title_ru }}
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

				<div class="col-12 mb-4">
					Цена:
					<div 
						v-for="(price, idx) in item.prices" 
						:key="price.id" 
						class="row align-items-center"
					>
						<div class="col-lg-5 mb-4">
							<div class="row">
								<div class=" col-lg-12">
									<small class="form-text text-muted">название ru</small>
									<input
										type="text"
										class="w-100 form-control"
										:value="price.title_ru"
										disabled
									>
								</div>
								<div class=" col-lg-12">
									<small class="form-text text-muted">название ua</small>
									<input
										type="text"
										class="w-100 form-control"
										:value="price.title_ua"
										disabled
									>
								</div>
							</div>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted">вес/шт/л...</small>
							<input
								type="text"
								class="w-100 form-control"
								:value="price.weight"
								disabled
							>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted no-wrap">ед. изм</small>
							<input
								type="text"
								class="w-100 form-control"
								:value="price.weightKind"
								disabled
							>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted">цена</small>
							<input
								type="text"
								class="w-100 form-control"
								:value="price.price"
								disabled
							>
						</div>
						<div class="col-lg-3 d-flex">
							<div  v-if="item.prices.length > 1" class="upDownHolder">
								<span
									v-if="idx != item.prices.length -1"
									@click="orderBottom(price.order)" 
									class="fa-icon-holder mr-2 ml-2"
								>
									<font-awesome-icon 
										:icon="['fas', 'arrow-down']"
										style="width:16px; height: 16px"
										class="fa-icon"
									/>
								</span>
								<span
									v-if="idx != 0"
									@click="orderTop(price.order)" 
									class="fa-icon-holder ml-2 mr-2"
								>
									<font-awesome-icon 
										:icon="['fas', 'arrow-up']"
										style="width:16px; height: 16px"
										class="fa-icon"
									/>
								</span>
							</div>
							<div class="right-btns-holder">
								<span
									@click="editSubItem(price)" 
									class="fa-icon-holder mr-2 ml-2 edit-btn"
								>
									<font-awesome-icon 
										:icon="['fas', 'edit']"
										style="width:16px; height: 16px"
										class="fa-icon"
									/>
								</span>
								<div v-if="item.prices.length > 1" class="minus-btn">
									<font-awesome-icon 
										@click="showDeleteModalHandler(price)"
										:icon="['fas', 'minus']"
										style="width:13px; height: 13px"
										class="fa-icon"
									/>
								</div>
							</div>
						</div>
					</div>

					
					<!-- <div class="row align-items-center">
						<div class="form-group col-lg-5">
							<small class="form-text text-muted">название</small>
							<input
								type="text"
								class="w-100 form-control"
							>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted">вес/шт/л...</small>
							<input
								type="text"
								class="w-100 form-control"
							>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted no-wrap">ед. изм</small>
							<input
								type="text"
								class="w-100 form-control"
							>
						</div>
						<div class="form-group col-lg">
							<small class="form-text text-muted">цена</small>
							<input
								type="text"
								class="w-100 form-control"
							>
						</div>
						<div class="col-lg-3 d-flex">
							<div class="upDownHolder">
								<span
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
							<div class="minus-btn">
								<font-awesome-icon 
									:icon="['fas', 'minus']"
									style="width:13px; height: 13px"
									class="fa-icon"
								/>
							</div>
						</div>
					</div> -->




					
					<div class="row">
						<div class="col-12">
							<div class="plus-btn">
								<font-awesome-icon 
									@click="showAddSubItemWindow = true"
									:icon="['fas', 'plus']"
									style="width:13px; height: 13px"
									class="fa-icon"
								/>
							</div>
						</div>
					</div>
				</div>
				
				<div class="d-flex justify-content-between col-12 mt-4 mb-4">
					<div class="form-group mt-2">
						<button 
							@click.prevent="saveItem()"
							type="submit" 
							class="btn btn-success"
						>
							Сохранить

						</button>
					</div>
					<div class="form-group mt-2">
						<button 
							@click.prevent="saveItemAndExit()"
							type="submit" 
							class="btn btn-primary"
						>
							Сохранить и выйти

						</button>
					</div>
					<div class="form-group mt-2">
						<button 
							@click.prevent="backToItems()"
							type="submit" 
							class="btn btn-secondary"
						>
							Назад

						</button>
					</div>
				</div>
				<div class="form-group col-lg-12 mt-4 text-left">
					<span 
						@click="showDeleteItemModal = true"
						class="btn btn-danger"
					>
						Удалить блюдо
					</span>
				</div>
			</div>
		</form>
		
		<!-- delete Item modal -->
		<modal-delete-window
			:showDeleteModal="showDeleteItemModal"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Удалить блюдо полностью?</h5>
			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="removeItem(item)"
					class="btn btn-outline-danger btn-sm"
				>
					Удалить
				</div>
				<div 
					@click="showDeleteItemModal = false"
					class="btn btn-outline-secondary btn-sm"
				>
					Отменить
				</div> 
			</div>
		</modal-delete-window>

		<!-- delete subItem modal -->
		<modal-delete-window
			:showDeleteModal="showDeleteModal"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Удалить это блюдо?</h5>
			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="removeSubItemRow(subItemToDelete)"
					class="btn btn-outline-danger btn-sm"
				>
					Удалить
				</div>
				<div 
					@click="showDeleteModal = false"
					class="btn btn-outline-secondary btn-sm"
				>
					Отменить
				</div> 
			</div>
		</modal-delete-window>

		<!-- delete item photo modal -->
		<modal-delete-window
			:showDeleteModal="showDeletePhotoModal"
		>
			<h5 class="text-center mb-4">Удалить фото?</h5>
			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="removeItemPhoto(item)"
					class="btn btn-outline-danger btn-sm"
				>
					Удалить фото
				</div>
				<div 
					@click="showDeletePhotoModal = false"
					class="btn btn-outline-secondary btn-sm"
				>
					Отменить
				</div> 
			</div>
		</modal-delete-window>

		<modal-show-full-img
			:showModal="showPhotoWindow"
			@hideModal="hidePhotoWindow"
		>
			<img :src="item.photo" alt="">
		</modal-show-full-img>

		<!-- add sub Item row modal -->
		<modal-delete-window
			:showDeleteModal="showAddSubItemWindow"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Добавление разновидности блюда</h5>
			<form @submit.prevent>
				<div class="row">
					<div class="form-group col-lg-12">
						<small class="form-text text-muted">название на русском</small>
						<input
							v-model="newSubItem.title_ru"
							type="text"
							class="w-100 form-control"
							name="subTitle"
						>
					</div>
					<div class="form-group col-lg-12">
						<small class="form-text text-muted">название на украинском</small>
						<input
							v-model="newSubItem.title_ua"
							type="text"
							class="w-100 form-control"
							name="subTitle"
						>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="form-group col-lg">
						<small class="form-text text-muted">вес/шт/л</small>
						<input
							v-model="newSubItem.weight"
							type="text"
							class="w-100 form-control"
							name="subWeight"
						>
					</div>
					<div class="form-group col-lg">
						<small class="form-text text-muted no-wrap">ед. изм</small>
						<input
							v-model="newSubItem.weightKind"
							type="text"
							class="w-100 form-control"
							name="subWeightKind"
						>
					</div>
					<div class="form-group col-lg">
						<small class="form-text text-muted">цена</small>
						<input
							v-model="newSubItem.price"
							type="text"
							class="w-100 form-control"
							name="subPrice"
						>
					</div>
				</div>
			</form>



			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="addSubItemRow()"
					class="btn btn-success btn-sm"
				>
					Сохранить
				</div>
				<div 
					@click="showAddSubItemWindow = false"
					class="btn btn-secondary btn-sm"
				>
					Отменить
				</div> 
			</div>
		</modal-delete-window>

		<!-- edit sub Item row modal -->
		<modal-delete-window
			:showDeleteModal="showEditRowModal"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Редактирование разновидности блюда</h5>
			<form @submit.prevent>
				<div class="row">
					<div class="form-group col-lg-12">
						<small class="form-text text-muted">название на русском</small>
						<input
							v-model="editedSubItem.title_ru"
							type="text"
							class="w-100 form-control"
							name="subTitle"
						>
					</div>
					<div class="form-group col-lg-12">
						<small class="form-text text-muted">название на украинском</small>
						<input
							v-model="editedSubItem.title_ua"
							type="text"
							class="w-100 form-control"
							name="subTitle"
						>
					</div>
				</div>
				<div class="row align-items-center">
					<div class="form-group col-lg">
						<small class="form-text text-muted">вес/шт/л</small>
						<input
							v-model="editedSubItem.weight"
							type="text"
							class="w-100 form-control"
							name="subWeight"
						>
					</div>
					<div class="form-group col-lg">
						<small class="form-text text-muted no-wrap">ед. изм</small>
						<input
							v-model="editedSubItem.weightKind"
							type="text"
							class="w-100 form-control"
							name="subWeightKind"
						>
					</div>
					<div class="form-group col-lg">
						<small class="form-text text-muted">цена</small>
						<input
							v-model="editedSubItem.price"
							type="text"
							class="w-100 form-control"
							name="subPrice"
						>
					</div>
				</div>
			</form>



			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="editSubItemHandler()"
					class="btn btn-success btn-sm"
				>
					Сохранить
				</div>
				<div 
					@click="hideEditRowModal()"
					class="btn btn-secondary btn-sm"
				>
					Отменить
				</div> 
			</div>
		</modal-delete-window>		


	</div>
</template>

<script>


import modalShowFullImg from '@/components/admin/modalShowFullImg.vue'
import Spinner from '@/components/admin/spinner.vue'
import ModalDeleteWindow from '@/components/admin/modalDeleteWindow.vue';
import axios from 'axios'

export default {
	middleware: 'auth',
	layout: 'admin',

	components: { modalShowFullImg, Spinner, ModalDeleteWindow, modalShowFullImg },
	
	data(){
		return{
			showDeleteModal: false,
			subItemToDelete: {},
			showDeleteItemModal: false,
			showPhotoWindow: false,
			showDeletePhotoModal: false,
			showAddSubItemWindow: false,
			newSubItem: {},
			editedSubItem: {},
			showEditRowModal: false,
			item:{},
			categories:[],
			showSpinner: true,
			
		}
	},
	mounted(){
		this.fetchCategories()
		this.fetchItem()
	},
	methods:{
		async fetchItem(){
			this.showSpinner = true	
			try {
				const response = await axios.post('/admin/getGoodsItem', {itemId: this.$route.params.id })
				this.item = response.data
			} catch (e) {
				console.log('some fetchItem error')
				console.log(e.response.data)
			}
			
			// this.orderSubItems()
			// this.showSpinner = false
		},
		async fetchCategories(){
			// this.showSpinner = true	
			try {
				const response = await axios.get('/admin/getGoodsCats')
				this.categories = response.data
			} catch (e) {
				console.log('some fetchCategories error')
				console.log(e.response.data)
			}
			
			// this.orderSubItems()
			this.showSpinner = false
		},

		orderTop(order){
			this.showSpinner = true	
			setTimeout(() => {
				this.item.prices.forEach(el => {
					if(el.order == order - 1){
						el.order += 1
					}
					else if(el.order == order){
						el.order -= 1
					}
				})
				this.orderSubItems()
				this.showSpinner = false
			}, 500)
		},
		orderBottom(order){
			this.showSpinner = true	
			setTimeout(() => { 
				this.item.prices.forEach(el => {
					if(el.order == order){ 
						el.order += 1			
					}
					else if(el.order == order + 1){
						el.order -= 1
					}
				})
				this.orderSubItems()
				this.showSpinner = false
			}, 500)
		},
		showDeleteModalHandler(price){
			this.showDeleteModal = true
			this.subItemToDelete = price
		},
		removeSubItemRow(item){
			this.showDeleteModal = false
			this.showSpinner = true	
			setTimeout(() => {
				if(this.item.prices.length > 1){
					this.item.prices = this.item.prices.filter(a => a.id !== item.id)
				}
				this.subItemToDelete = {}
				this.reOrderSubItems()
				this.showSpinner = false	
			}, 500)
		},
		reOrderSubItems(){
			let i = 1
			this.item.prices.forEach(el => {
				el.order = i
				i++
			})
		},
		hideDeleteModal(){
			this.showDeleteModal = false
			this.subItemToDelete = {}
		},
		orderSubItems(){
			this.item.prices.sort((a,b) => a.order - b.order)
		},
		removeItem(item){
			console.log('del')
			console.log(item)
			this.showDeleteItemModal = false
		},
		backToItems(){
			this.$router.push('/admin/menu')
		},
		saveItem(){
			this.showSpinner = true
			setTimeout(()=> {
				console.log('save')
				console.log(this.item)
				this.showSpinner = false
			}, 500)
		},
		saveItemAndExit(){
			this.saveItem()
			console.log('save and exit')
			this.backToItems()
		},
		hidePhotoWindow(){
			this.showPhotoWindow = false
		},
		removeItemPhoto(item){
			this.showSpinner = true
			this.showDeletePhotoModal = false
			setTimeout(()=>{
				this.item.photo = ''
				this.showSpinner = false	
			}, 500)		
		},
		addSubItemRow(){
			if(this.newSubItem.price &&  this.newSubItem.title_ru  &&  this.newSubItem.title_ua){
				this.newSubItem.order = this.item.prices.length + 1
				this.newSubItem.id = Date.now()
				this.newSubItem.price = Number(this.newSubItem.price.toString().replace(',', '.'))
				this.item.prices.push(this.newSubItem)
				this.newSubItem = {}
				this.showAddSubItemWindow = false
				console.log(this.item.prices)
			}
		},
		editSubItem(item){
			this.showEditRowModal = true
			this.item.prices.forEach(el => {
				if(el.id == item.id){
					this.editedSubItem = el
				}
			})
		},
		editSubItemHandler(){
			console.log(this.editedSubItem)
			this.item.prices.forEach(el => {
				if(el.id == this.editedSubItem.id){
					el = this.editedSubItem
					
					el.price = Number(el.price.toString().replace(',', '.'))
				}
			})
			this.showEditRowModal = false
		},
		hideEditRowModal(){
			this.showEditRowModal = false
			this.editedSubItem = {}
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
		margin-left: auto;
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
	.upDownHolder{
		display: flex;
		justify-content: center;
		span {
			cursor: pointer;
			padding: 0 10px;
		}
	}
	.edit-btn{
		cursor: pointer;
	}
	.right-btns-holder{
		display: flex;
		align-items: center;
		margin-left: auto;
		gap: 20px;
	}
	.subItemRow{
		cursor: pointer;
		input{
			cursor: pointer;
		}
	}
</style>
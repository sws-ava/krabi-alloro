<template>
  
	<div>
		<h5 class="mb-3">Галерея</h5>
		<spinner v-if="showSpinner" />
		<form>
			<div class="form-group">
				<label for="exampleFormControlFile1">Добавить фото</label>
				<input type="file" class="form-control-file">
			</div>
		</form>
		<div class="row">
			<div  v-for="(photo, index) in photos" :key="photo.id" class="col-lg-4 mb-4">
				<div  class="block-holder">
					<div @click="showFullImg(photo.id)" class="image-holder">
						<img :src="photo.path">
					</div>
				</div>
				
				<div class="arrows">
					<span 
						@click="orderLeft(photo.order)"
						v-if="index  !== 0" 
						class="fa-icon-holder"
					>
						<font-awesome-icon 
							:icon="['fas', 'arrow-left']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
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
					<span 
						@click="orderRight(photo.order)"
						v-if="index !== photos.length - 1" 
						class="fa-icon-holder"
					>
						<font-awesome-icon 
							:icon="['fas', 'arrow-right']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
				</div>
			</div>
		</div>
		<modal-show-full-img
			:showModal="showModal"
			@hideModal="hideModal"
		>
			<img :src="imageToShowPath" alt="">
		</modal-show-full-img>
		<modal-delete-window
			:showDeleteModal="showDeleteModal"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Удалить фото c сайта?</h5>
			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="deletePhoto(photoToDelete)"
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
	</div>
</template>

<script>
import modalShowFullImg from '@/components/admin/modalShowFullImg.vue'
import Spinner from '@/components/admin/spinner.vue'
import ModalDeleteWindow from '@/components/admin/modalDeleteWindow.vue';
export default {
	components: { modalShowFullImg, Spinner, ModalDeleteWindow },
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			photos:[
				{id:1, order:1, path:'https://via.placeholder.com/150x150',},
				{id:2, order:3, path:'https://via.placeholder.com/300x150',},
				{id:3, order:2, path:'https://via.placeholder.com/150x300',},
				{id:4, order:6, path:'https://via.placeholder.com/200x300',},
				{id:5, order:5, path:'https://via.placeholder.com/500x100',},
				{id:6, order:4, path:'https://via.placeholder.com/100x500',},
			],
			showModal: false,
			imageToShowPath: '',
			showSpinner: false,
			showDeleteModal: false,
			photoToDelete : {},
		}
	},
	mounted(){
		this.sortPhotos()
	},
	methods:{
		hideModal(){
			this.showModal = false
			this.imageToShowPath = ''
		},
		orderLeft(order){
			this.showSpinner = true
			setTimeout(() => {
				this.photos.forEach(el => {
					if(el.order == order - 1){
						el.order += 1
					}
					else if(el.order == order){
						el.order -= 1
					}
				})
				this.sortPhotos()
				this.showSpinner = false
			}, 500)
		},
		orderRight(order){
			this.showSpinner = true
			setTimeout(() => {
				this.photos.forEach(el => {
					if(el.order == order){
						el.order += 1
					}
					else if(el.order == order + 1){
						el.order -= 1
					}
				})
				this.sortPhotos()
				this.showSpinner = false
			}, 500)
		},
		sortPhotos(){
			this.photos.sort((a,b) => a.order - b.order)
		},
		showFullImg(photoId){
			this.showModal = true
			this.photos.forEach(element => {
				if(element.id == photoId){
					this.imageToShowPath = element.path
				}
			});
		},
		deletePhoto(photo){
			this.showDeleteModal = false
			this.showSpinner = true
			setTimeout(() => {
				this.photos = this.photos.filter(r => r.id !== photo.id)
				let i = 1
				this.photos.forEach(el => {
					el.order = i
					i++
				})
				this.sortPhotos()
				this.showSpinner = false
			}, 500)	
		},
		showDelModal(photo){
			this.showDeleteModal = true
			this.photoToDelete = photo
		},
		hideDeleteModal(){
			this.showDeleteModal = false
		},
	}
}
</script>

<style lang="scss" scoped>
	.block-holder{
		position: relative;
		width: 100%;
		padding-top: 100%;
	}
	.image-holder{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		font-size: 14px;
		display: flex;
		img{
			width: 100%;
			height: auto;
			object-fit: cover;
			cursor: pointer;
		}
	}
	.arrows{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
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
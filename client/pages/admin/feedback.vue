<template>
	<div>
		<h5>Обратная связь</h5>
		<spinner v-if="showSpinner" />
		<template v-if="feedbacks.length">
			<feedback-item
				v-for="feedback in feedbacks"
				:key="feedback.id"
				:feedback=feedback
				@feedbackReaded="feedbackReaded"
				@feedbackNotReaded="feedbackNotReaded"
				@feedbackToDelete="feedbackToDelete"
			/>
		</template>
		<div
			v-else
			class="text-center mt-4"
		>
			<h5>Новых записей нет</h5>
		</div>
		<modal-delete-window
			:showDeleteModal="showDeleteModal"
			@hideDeleteModal="hideDeleteModal"
		>
			<h5 class="text-center mb-4">Удалить это обращение?</h5>
			<p>
				{{feedbackItemToDelete.text}}
			</p>
			<div class="d-flex justify-content-around mt-4">
				<div 
					@click="feedbackRemove(feedbackItemToDelete)"
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
import feedbackItem from '@/components/admin/feedback/feedbackItem.vue'
import Spinner from '@/components/admin/spinner.vue';
import ModalDeleteWindow from '@/components/admin/modalDeleteWindow.vue';



export default {
	components: { feedbackItem, Spinner, ModalDeleteWindow },

	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			feedbacks: [
				{id:1, date: '22:20 20.02.22', isRead: false , name: 'Александр', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
				{id:2, date: '22:20 20.02.22', isRead: true , name: 'Маргарита', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!'},
				{id:3, date: '22:20 20.02.22', isRead: false , name: 'Алексей', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!'},
				{id:4, date: '22:20 20.02.22', isRead: true , name: 'Руслан', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
			],
			showSpinner:false,
			showDeleteModal: false,
			feedbackItemToDelete : {},
		}
	},
	methods:{
		feedbackReaded(feedbackId){
			this.showSpinner = true
			setTimeout(() => {
				this.feedbacks.forEach((element, index) => {
					if(element.id === feedbackId) {
						element.isRead = true
					}
				})
				this.showSpinner = false
			}, 500)
		},
		feedbackNotReaded(feedbackId){
			this.showSpinner = true
			setTimeout(() => {
				this.feedbacks.forEach((element, index) => {
					if(element.id === feedbackId) {
						element.isRead = false
					}
				})
				this.showSpinner = false
			}, 500)
		},
		feedbackRemove(feedback){
			this.showDeleteModal = false
			this.showSpinner = true
			setTimeout(() => {
				this.feedbacks = this.feedbacks.filter(r => r.id !== feedback.id)
				this.showSpinner = false
			}, 500)
		},
		hideDeleteModal(){
			this.showDeleteModal = false
		},
		feedbackToDelete(feedback){
			this.feedbackItemToDelete = feedback
			this.showDeleteModal = true
		},
	}
}

</script>

<style lang="scss" scoped>

</style>
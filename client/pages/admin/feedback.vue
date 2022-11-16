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
				@feedbackRemove="feedbackRemove"
			/>
		</template>
		<div
			v-else
			class="text-center mt-4"
		>
			<h5>Новых записей нет</h5>
		</div>
	</div>
</template>

<script>
import feedbackItem from '@/components/admin/feedback/feedbackItem.vue'
import Spinner from '@/components/admin/spinner.vue';



export default {
	components: { feedbackItem, Spinner },

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
			this.showSpinner = true
			setTimeout(() => {
				this.feedbacks = this.feedbacks.filter(r => r.id !== feedback.id)
				this.showSpinner = false
			}, 500)
		}
	}
}

</script>

<style lang="scss" scoped>

</style>
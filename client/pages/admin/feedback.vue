<template>
	<div>
		<h5>Обратная связь</h5>
		<div 
			v-for="review in reviews" 
			:key="review.id"
		>
			<div class="review-header mb-2">
				<span class="mr-2">
					{{ review.name }} {{ review.phone }}
				</span>
				<div class="review-header__status ">
					<b>
						<span 
							v-if="review.isRead" 
							class="green-text"
							>
							Прочитано
						</span>
						<span 
							v-else 
							class="red-text"
						>
							Новое сообщение
						</span>
					</b>
				</div>
			</div>
			<b> {{review.date}} </b>
			<div>
				{{ review.text }}
			</div>
			<div class="buttons mt-2">
				<div v-if="!review.isRead">
					<div class="btn btn-outline-primary btn-sm">Ознакомились</div>
				</div>
				<div v-else>
					<div class="btn btn-outline-secondary btn-sm">Ознакомлены</div> 
				</div>
				<div class="btn btn-outline-danger btn-sm btn-delete">Удалить</div> 
			</div>
			<hr class="mb-4 mt-4">
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			reviews: [
				{id:1, date: '22:20 20.02.22', isRead: false , name: 'Александр', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
				{id:2, date: '22:20 20.02.22', isRead: true , name: 'Маргарита', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!'},
				{id:3, date: '22:20 20.02.22', isRead: true , name: 'Алексей', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!'},
				{id:4, date: '22:20 20.02.22', isRead: true , name: 'Руслан', phone: '0946543201', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit'},
			]
		}
	}
}

</script>

<style lang="scss" scoped>
	.review-header{
		display: flex;
		align-items: center;
		&__status{
			margin-left: auto;
			.green-text{
				color: green;
			}
			.red-text{
				color: red;
			}
		}
	}
	.answer{
		max-width: 80%;
		margin-left: auto;
		text-align: right;
		border-radius: 20px;
		background: #f3f0f0;
		padding: 4px 10px;    
		width: max-content;
	}
	.buttons{
		display: flex;
		gap: 10px;
	}
	.star{
		width: 20px;
		fill: #ebeb00;
	}
	.btn-delete{
		margin-left: auto;
	}
</style>
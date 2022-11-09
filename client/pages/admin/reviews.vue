<template>
	<div>
		<h5>Отзывы</h5>
		<div 
			v-for="review in reviews" 
			:key="review.id"
		>
			<div class="review-header mb-2">
				<span class="mr-2">
					{{ review.name }}
				</span>
				<svg 
					v-for="(star,idx) in review.stars" 
					:key="idx" 
					class="star" 
					xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xml:space="preserve"><path d="m15.397 4.687 2.579 5.225a1 1 0 0 0 .753.547l5.766.838a1 1 0 0 1 .554 1.706l-4.173 4.067c-.236.23-.343.561-.288.885l.985 5.743a1 1 0 0 1-1.451 1.054l-5.158-2.712a1.002 1.002 0 0 0-.931 0l-5.158 2.712a1 1 0 0 1-1.451-1.054l.985-5.743a.999.999 0 0 0-.288-.885l-4.173-4.067a1 1 0 0 1 .554-1.706l5.766-.838a1 1 0 0 0 .753-.547L13.6 4.687c.37-.743 1.43-.743 1.797 0z"/></svg>
				<div class="review-header__status ">
					<span 
						v-if="review.show" 
						class="green-text"
						>
						Опубликовано
					</span>
					<span 
						v-else 
						class="red-text"
					>
						Ожидает модерации
					</span>
				</div>
			</div>
			<div>
				{{ review.text }}
			</div>
			<div 
				v-if="review.answer" 
				class="mt-2 mb-3 answer"
			>
				{{ review.answer }}
			</div>
			<div class="buttons mt-2">
				<div v-if="!review.show">
					<div class="btn btn-outline-primary btn-sm">Ответить</div> 
					<div class="btn btn-outline-success btn-sm">Опубликовать</div> 
				</div>
				<div v-else>
					<div class="btn btn-outline-secondary btn-sm">Редактировать</div> 
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
				{id:1, stars: 2, show: false, name: 'Александр', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit', answer: ''},
				{id:2, stars: 5, show: true, name: 'Маргарита', text: 'Lorem ipsum, dolor sit amet consecteturLorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!', answer: 'tate error laudantium soluta architecto mollitia quas! Totam qu'},
				{id:3, stars: 4, show: true, name: 'Алексей', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam praesentium esse voluptate error laudantium soluta architecto mollitia quas! Totam quasi neque nam a!', answer: ''},
				{id:4, stars: 2, show: true, name: 'Руслан', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit', answer: 'Lorem ipsum, dolor sit amet consectetur'},
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
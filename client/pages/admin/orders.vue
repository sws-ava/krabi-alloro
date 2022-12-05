<template>
	<div>
		<h5 class="mb-3">Заказы с сайта</h5>
    	<spinner v-if="showSpinner" />

		<div class="mt-3 mb-3 review-header__status ">
			<b 
				@click="getNewOrders()"
				class="red-text mr-4 pointer"
			>
				Новые заказы
			</b>
			<b 
				@click="getDoneOrders()"
				class="green-text pointer"
			>
				Выполненые заказы
			</b>
		</div>


		<div 
			v-for="order in orders" 
			:key="order.id"
			class="mt-4"
		>
			<div class="review-header__status ">
				<b>
					<span 
						v-if="order.status === 1" 
						class="red-text"
						>
							Новый заказ
					</span>
					<span 
						v-else-if="order.status === 2" 
						class="green-text"
					>
						Заказ выполнен
					</span>
					{{order.date}}
				</b>
			</div>
			<div class="review-header mb-2">
				<div class="row">
					<div class="col-lg-5">
						<div class="option-title">Имя:</div>
						<div class="option-text">{{ order.name }}</div>
					</div>
					<div class="col-lg-4">
						<div class="option-title">Телефон:</div>
						<div class="option-text">{{ order.phone }}</div>
					</div>
					<div class="col-lg-3">
						<div class="option-title">Сумма:</div>
						<div class="option-text">{{ order.total }}</div>
					</div>
					<div v-if="order.address" class="mb-2 col-lg-6">
						<span class="option-title">Адрес:</span>
						<span class="option-text">{{ order.address }}</span>
					</div>
					<div  v-if="order.comment" class="mb-2 col-12">
						<span class="option-title">Комментарий к заказу:</span>
						<span class="option-text">{{ order.comment }}</span>
					</div>
				</div>
			</div>
			<div class="buttons mt-1">
				<router-link
					:to="`/admin/orders/${order.id}`"
					class="btn btn-outline-danger btn-sm btn-delete"
				>
						Детали
				</router-link>
				<div class=""></div> 
			</div>
			<hr class="mb-4 mt-4">
		</div>
	</div>
</template>

<script>


import spinner from '@/components/admin/spinner.vue'
import axios from 'axios'

export default {
	middleware: 'auth',
	layout: 'admin',


	components: { spinner },


	data(){
		return{
			showSpinner: false,
			orders: [],
		}
	},
	mounted(){
		this.getNewOrders()
	},
	methods: {
		getNewOrders(){
			this.showSpinner = true
			setTimeout(() => {
				this.orders = [
					{
						id: 1,
						date: '22:20 20.02.22',
						name: 'Семен',
						phone: '0987654321',
						address: 'ул.Уличная, дом 18, кв 24, пд 3',
						comment: 'домофон не работает',
						orderItems:[
							{id:1, item:11, title:'meat pizza', weight:'270гр', price:270.99},
							{id:2, item:27, title:'coca cola', weight:'2л', price:70},
						],
						status: 1,
						total: 159.98,
					},
					{
						id: 3,
						date: '22:20 20.02.22',
						name: 'Василиса',
						phone: '0936848765',
						address: 'ул.Уличная, дом 222',
						comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero omnis doloremque facere pariatur suscipit sequi neque fugit hic, quisquam animi libero officiis. Consectetur consequatur eveniet, repellendus blanditiis quidem non repudiandae nisi magnam provident fugit dolore possimus neque quibusdam nobis quasi et facere consequuntur vero similique iusto reprehenderit laudantium accusantium inventore.',
						orderItems:[
							{id:4, item:34, title:'cheese pizza', weight:'270гр', price:150.99},
						],
						status: 1,
						total: 299.99,
					},
				]
				this.showSpinner = false
			}, 500);
			// try {
			// } catch (e) {
			// 	console.log('some getNewOrders error')
			// }
		},
		getDoneOrders(){
			this.showSpinner = true
			setTimeout(() => {
				this.orders = [
					{
						id: 2,
						date: '22:20 20.02.22',
						name: 'Василиса',
						phone: '0936844321',
						address: 'ул.Уличная, дом 18',
						comment: '',
						orderItems:[
							{id:1, item:11, title:'meat pizza', weight:'270гр', price:270.99}
						],
						status: 2,
						total: 245,
					},
				]
				this.showSpinner = false
			}, 500);
			// try {
			// } catch (e) {
			// 	console.log('some getDoneOrders error')
			// }
		},
	}
}

</script>

<style lang="scss" scoped>
	.review-header{
		// display: flex;
		// align-items:flex-start;
		&__status{
			margin-left: auto;
			.green-text{
				color: green;
			}
			.red-text{
				color: red;
			}
			.blue-text{
				color: blue;
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
	.option-title{
		font-size: 12px;
		display: block;
	}
	.option-text{
		padding-left: 20px;
	}
	.order-list{
		// display: flex;
		
	}
	.pointer{
		cursor: pointer;
		&:hover{
			text-decoration: underline;
		}
	}
</style>
<template>
	<div>
	
		Меню
		<nav class="nav flex-column">
			<router-link 
				:to="{name: 'admin-orders'}" 
				class="nav-link"
			>
				Заказы с сайта
				<span>2</span>
				<span class="order-in-progress">2</span>
			</router-link>
			<router-link 
				:to="{name: 'admin-reviews'}" 
				class="nav-link"
			>
				Отзывы
				<span>1</span>
			</router-link>
			<router-link 
				:to="{name: 'admin-menu'}" 
				class="nav-link"
			>
				Меню
			</router-link>
			<router-link
				:to="{name: 'admin-feedback'}" 
				class="nav-link"
			>
				Обратная связь
				<span>1</span>
			</router-link>
			<router-link 
				:to="{name: 'admin-pages'}" 
				class="nav-link"
			>
				Страницы
			</router-link>

			<a class="nav-link" href="#">!!! Интерьер (галерея)</a>
			<a class="nav-link" href="#">Новости / Акции</a>
			<a class="nav-link" href="#">Блок с уведомлением</a>
			<a class="nav-link" href="#">Блоки на сайте</a>
		</nav>
</div>
</template>

<script>
export default {

}
</script>


<style scoped lang="scss">
	.nav-link{
		display: flex;
		align-items: center;
		span{
			margin-left: 5px;
			color: #fff;
			background: red;
			font-size: 12px;
			font-weight: bold;
			height: 16px;
			width: 16px;
			display: flex  !important;
			align-items: center;
			justify-content: center;
			padding: 5px;
			display: inline-block;
			padding: 5px;
			border-radius: 50%;
		}
		.order-in-progress{
			background: blue;
		}
	}
</style>
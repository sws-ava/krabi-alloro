<template>
	<div>
		<h5 class="mb-3">Редактировать блюдо</h5>
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
		
		

		

	</div>
</template>

<script>
export default {
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			categories:[
				{id:1, title:'Пицца', order: 1},
				{id:2, title:'Напитки', order: 3},
				{id:3, title:'WOK', order: 2},
			]
		}
	}
}

</script>

<style lang="scss" scoped>

</style>
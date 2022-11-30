<template>
<div>
	<h5>Pages</h5>
		<div class="mt-4">
		<table class="table">
			<thead>
				<tr>
				<th scope="col">ID</th>
				<th scope="col">Заголовок</th>
				<th scope="col"></th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="page in pages" :key="page.id">
					<th scope="row">{{ page.id }}</th>
					<td>{{page.title_ru}}</td>
					<td>
						<router-link 
							:to="'/admin/page-edit/'+page.id"  
							class="btn btn-outline-primary btn-sm"
						>
							Редактировать
						</router-link>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</div>
</template>


<script>

export default {

	middleware: 'auth',
	layout: 'admin',

	data() {
		return {
			pages:[
				{id: 1, title_ru: 'Главная', title_ua: 'Головна'},
				{id: 4, title_ru: 'Концепция', title_ua: 'Концепцiя'},
				{id: 2, title_ru: 'Контакты', title_ua: 'Контакти'},
				{id: 3, title_ru: 'Доставка', title_ua: 'Доставка'},
			]
		}
	}

}
</script>

<style>

</style>
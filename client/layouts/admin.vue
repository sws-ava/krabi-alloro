<template>
  <div class="layout">
	<navbar />
	<div class="container mt-4">
		<card>
			<div class="row">
				<div class="col-3">
					<admin-navigation />
				</div>
				<div class="col-9">
					<nuxt />
				</div>
			</div>
		admin layout
		</card>
    </div>
  </div>
</template>

<script>
import Navbar from '~/components/Navbar'
import AdminNavigation from '@/components/admin/adminNavigation.vue'

export default {
  components: {
    Navbar,
	AdminNavigation
  }
}
</script>


<style>
	.container{
		max-width: 1280px!important;
	}
	.nav-link, a{
		color: rgb(43, 39, 39) !important;
	}
	
	.breadcrumb-my{
		display: flex;
		padding: 0;
		margin-bottom: 20px;
	}
</style>
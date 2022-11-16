<template>
  <div class="layout">
	<navbar />
          <!-- {{user}} -->

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
		</card>
    </div>
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Navbar from '~/components/Navbar'
import AdminNavigation from '@/components/admin/adminNavigation.vue'

export default {
  components: {
    Navbar,
	AdminNavigation
  },

//   computed: mapGetters({
//     user: 'auth/user'
//   }),

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
	b {
		font-weight: bold;
	}
</style>
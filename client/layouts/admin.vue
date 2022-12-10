<template>
  <div class="layout">
	<navbar />
          <!-- {{user}} -->
	<div class="container mt-4">
		<card>
			<div class="row">
				<div class="col-3">
					<admin-navigation
					/>
				</div>
				<div class="col-9">
					<nuxt 
					/>
				</div>
			</div>
		</card>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
import Navbar from '~/components/Navbar'
import AdminNavigation from '@/components/admin/adminNavigation.vue'

import axios from 'axios'



export default {
  components: {
    Navbar,
	AdminNavigation
  },

  
  data(){
    return{
		
    }
  },
  mounted(){
	this.getUnreadedMessages()
  },
  methods:{
	async getUnreadedMessages(){
		try {
			const response = await axios.get('/admin/getUnreadedMessages')
			this.setReviews(response.data.reviews)
			this.setFeedbacks(response.data.feedbacks)
			this.setOrders(response.data.orders)
		} catch (e) {
			console.log(e)
		}
	},
	...mapMutations({
		setReviews: 'countMenuNums/SET_REVIEWS',
		setFeedbacks: 'countMenuNums/SET_FEEDBACKS',
		setOrders: 'countMenuNums/SET_ORDERS',
	}),
	
  },
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
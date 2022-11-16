<template>
  
	<div>
		<h5 class="mb-3">Галерея</h5>
		<form>
			<div class="form-group">
				<label for="exampleFormControlFile1">Добавить фото</label>
				<input type="file" class="form-control-file">
			</div>
		</form>
		<div class="row">
			<div  v-for="photo in photos" :key="photo.id" class="col-lg-4 mb-4">
				<div  class="block-holder">
					<div class="image-holder">
						<img :src="photo.path">
					</div>
				</div>
				<div class="arrows">
					<span class="fa-icon-holder">
						<font-awesome-icon 
							:icon="['fas', 'arrow-left']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
					<span class="fa-icon-holder">
						<font-awesome-icon 
							:icon="['fas', 'arrow-right']"
							style="width:16px; height: 16px"
							class="fa-icon"
						/>
					</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	middleware: 'auth',
	layout: 'admin',

	data(){
		return{
			photos:[
				{id:1, order:1, path:'https://via.placeholder.com/150x150',},
				{id:2, order:3, path:'https://via.placeholder.com/300x150',},
				{id:3, order:2, path:'https://via.placeholder.com/150x300',},
				{id:4, order:6, path:'https://via.placeholder.com/200x300',},
				{id:5, order:5, path:'https://via.placeholder.com/500x100',},
				{id:6, order:4, path:'https://via.placeholder.com/100x500',},
			]
		}
	}
}
</script>

<style lang="scss" scoped>
	.block-holder{
		position: relative;
		width: 100%;
		padding-top: 100%;
	}
	.image-holder{
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		font-size: 14px;
		display: flex;
		img{
			width: 100%;
			height: auto;
			object-fit: cover;
			cursor: pointer;
		}
	}
	.arrows{
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 10px;
		span{
			cursor: pointer;
		}
	}
	.fa-icon-holder {
		& + .fa-icon-holder{
			margin-left: 50px;
		}
	}
</style>
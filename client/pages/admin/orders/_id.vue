<template>
  <div>
    <h5 class="mb-3">Детали заказа</h5>
    <div>
      <div class="review-header__status ">
        <span v-if="order.status === 1" class="red-text">
          Новый заказ
        </span>
        <span v-else-if="order.status === 2" class="blue-text">
          Заказ выполняется
        </span>
        <span v-else-if="order.status === 3" class="green-text">
          Заказ выполнен
        </span>
      </div>
      <div class="review-header mb-2">
        <div class="row">
          <div class="form-group col-lg-5">
            <div class="option-title">Имя:</div>
            <input class="form-text w-100" type="text" :value="order.name" />
            <!-- <div class="option-text">{{ order.name }}</div> -->
          </div>
          <div class="form-group col-lg-4">
            <div class="option-title">Телефон:</div>
            <input class="form-text w-100" type="text" :value="order.phone" />
            <!-- <div class="option-text">{{ order.phone }}</div> -->
          </div>
          <div class="form-group col-lg-3">
            <div class="option-title">Сумма:</div>
            <div class="option-text">{{ order.total }}</div>
          </div>
          <div v-if="order.address" class="mb-2 col-lg-6 form-group ">
            <span class="option-title">Адрес:</span>
            <input class="form-text w-100" type="text" :value="order.address" />
            <!-- <span class="option-text">{{ order.address }}</span> -->
          </div>
          <div v-if="order.comment" class="form-group mb-2 col-12">
            <span class="option-title">Комментарий к заказу:</span>
            <input class="form-text w-100" type="text" :value="order.comment" />
            <!-- <span class="option-text">{{ order.comment }}</span> -->
          </div>
        </div>
      </div>
      <div class="mt-4 mb-2 d-flex align-items-center">
        Заказ:
        <span class="btn btn-outline-primary btn-sm ml-auto"
          >Добавить блюдо</span
        >
      </div>
      <hr class="mb-2 mt-1" />
      <div>
        <div
          v-for="(item, idx) in order.orderItems"
          :key="item.item"
          class="row mb-2 d-flex align-items-center"
        >
          <div class="col-lg-6">
            {{ idx + 1 }}. {{ item.title }} {{ item.weight }}
            <span class="edit-item">
				<span class="fa-icon-holder">
					<font-awesome-icon 
						:icon="['fas', 'pen']"
						style="width:16px; height: 16px"
					/>
           		</span>
            </span>
            <span class="edit-item ml-4" v-if="item.cat === 5"
            >
				<span class="fa-icon-holder">
					<font-awesome-icon
						:icon="['fas', 'plus-circle']"
						style="width:17px; height: 17px"
					/>
				</span>
            </span>
          </div>
		  <div class="col-lg-2 text-right">
			{{ item.price }} грн
		  </div>
          <div class="col-lg plus-minus-holder">
            <div class="plus-minus">
				<span class="">
					<font-awesome-icon
						:icon="['fas', 'minus-circle']"
						style="width:17px; height: 17px"
					/>
				</span>
			</div>
            {{ item.amount }}
            <div class="plus-minus">
				<span class="">
					<font-awesome-icon
						:icon="['fas', 'plus-circle']"
						style="width:17px; height: 17px"
					/>
				</span>
			</div>
          </div>
          <div class="col-lg text-right">
			{{ item.price }} грн
			
				<span class="fa-icon-holder">
					<font-awesome-icon
						:icon="['fas', 'trash']"
						style="width:17px; height: 17px"
					/>
				</span>
			</div>
        </div>
      </div>
      <hr class="mb-1 mt-2" />
      <div class="row text-right">
        <div class="offset-lg-7 col-lg-5">Сумма: {{ order.total }} грн</div>
      </div>
      <div class="buttons mt-2">
        <div class="d-flex justify-content-center w-100">
          <div class="btn btn-outline-success btn-sm">Сохранить</div>
        </div>
      </div>
      <div class="buttons mt-4">
        <div>
          <div class="btn btn-outline-secondary btn-sm">Заказ выполнен</div>
        </div>
        <div class="btn btn-outline-danger btn-sm btn-delete">Удалить</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  middleware: "auth",
  layout: "admin",

  data() {
    return {
      order: {
        id: 1,
        name: "Семен",
        phone: "0987654321",
        address: "ул.Уличная, дом 18, кв 24, пд 3",
        comment: "домофон не работает",
        orderItems: [
          {
            id: 1,
            item: 11,
            cat: 5,
            amount: 1,
            title:
              "Мясная пицца ясная пицца ясная пицца ясная пицца ясная пицца",
            weight: "270гр",
            price: 270.99
          },
          {
            id: 2,
            item: 27,
            cat: 1,
            amount: 2,
            title: "Coca cola",
            weight: "2л",
            price: 70
          }
        ],
        status: 1, // new, inProgress, done
        total: 159.98
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.review-header {
  // display: flex;
  // align-items:flex-start;
  &__status {
    margin-left: auto;
    .green-text {
      color: green;
    }
    .red-text {
      color: red;
    }
    .blue-text {
      color: blue;
    }
  }
}
.answer {
  max-width: 80%;
  margin-left: auto;
  text-align: right;
  border-radius: 20px;
  background: #f3f0f0;
  padding: 4px 10px;
  width: max-content;
}
.buttons {
  display: flex;
  gap: 10px;
}
.star {
  width: 20px;
  fill: #ebeb00;
}
.btn-delete {
  margin-left: auto;
}
.option-title {
  font-size: 12px;
  display: block;
}
.option-text {
  padding-left: 20px;
}
.plus-minus-holder {
  display: flex;
  align-items: center;
}
.plus-minus {
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
  line-height: 20px;
  cursor: pointer;
  margin: 0 10px;
}
span.edit-item {
  font-size: 12px;
  font-weight: bold;
//   cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
}
.fa-icon{
	cursor: pointer;
}
.fa-icon-holder{
	cursor: pointer;
	svg{
		transition: scale 0.25s ease-in-out;
	}
	&:hover{
		svg{
			scale: 1.1;
		}
	}
}
</style>

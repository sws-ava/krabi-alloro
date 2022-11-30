<template>
  <div>
    <h5 class="mb-3">Детали заказа</h5>
    <spinner v-if="showSpinner" />
    <div>
      <div class="review-header__status mb-2">
        <b>
          <span v-if="order.status === 1" class="red-text">
            Новый заказ
          </span>
          <!-- <span v-else-if="order.status === 2" class="blue-text">
            Заказ выполняется
          </span> -->
          <span v-else-if="order.status === 2" class="green-text">
            Заказ выполнен
          </span>
          {{order.date}}
        </b>
      </div>
      <div class="review-header mb-2">
        <div class="row">
          <div class="form-group col-lg-5">
            <div class="option-title">Имя:</div>
            <input 
              v-model="order.name" 
              class="form-text w-100 form-control" 
              type="text" 
            />
          </div>
          <div class="form-group col-lg-4">
            <div class="option-title">Телефон:</div>
            <input 
              v-model="order.phone" 
              class="form-text w-100 form-control" 
              type="text" 
            />
          </div>
          <div class="form-group col-lg-3">
            <div class="option-title">Сумма:</div>
            <div class="option-text ">
              <span class="orderTotalTop"> {{ order.total }} </span>грн
            
            </div>
          </div>
          <div v-if="order.address" class="mb-2 col-lg-6 form-group ">
            <span class="option-title">Адрес:</span>
            <input 
              v-model="order.address" 
              class="form-text w-100 form-control" 
              type="text" 
            />
          </div>
          <div v-if="order.comment" class="form-group mb-2 col-12">
            <span class="option-title">Комментарий к заказу:</span>
            <input
              v-model="order.comment" 
              class="form-text w-100 form-control" 
              type="text" 
            />
          </div>
        </div>
      </div>
      <div class="mt-4 mb-2 d-flex align-items-center">
        Заказ:
        <span
          @click="showAddOrderItemsModal = true"
          class="btn btn-outline-primary btn-sm ml-auto"
        >
          Добавить блюдо
        </span
        >
      </div>
      <hr class="mb-2 mt-1" />
      <div>
        <div
          v-for="(item, idx) in order.orderItems"
          :key="item.item"
          class="row mb-4
           d-flex align-items-center"
        >
          <div class="col-lg-6">
            {{ idx + 1 }}. {{ item.title }} {{ item.weight }}
            <span 
              @click="showEditOrderItemsModalHandler(item)"
              class="edit-item"
            >
              <span class="fa-icon-holder">
                <font-awesome-icon 
                  :icon="['fas', 'pen']"
                  style="width:16px; height: 16px"
                />
           		</span>
            </span>
            <!-- <span class="edit-item ml-4" v-if="item.cat === 5"
            >
              <span class="fa-icon-holder">
                <font-awesome-icon
                  :icon="['fas', 'plus-circle']"
                  style="width:17px; height: 17px"
                />
              </span>
            </span> -->
          </div>
		  <div class="col-lg-2 text-right">
			{{ item.price }} грн
		  </div>
          <div class="col-lg plus-minus-holder">
            <div class="plus-minus">
              <span
                @click="decrementOrderItem(item)"
              >
                <font-awesome-icon
                  :icon="['fas', 'minus-circle']"
                  style="width:17px; height: 17px"
                />
              </span>
            </div>
            {{ item.amount }}
            <div class="plus-minus">
              <span
                @click="incrementOrderItem(item)"
              >
                <font-awesome-icon
                  :icon="['fas', 'plus-circle']"
                  style="width:17px; height: 17px"
                />
              </span>
            </div>
          </div>
          <div class="col-lg text-right">
			      {{ (item.price * item.amount) }} грн
			
				<span 
          @click="showRemoveOrderItemModal(item)"
          class="fa-icon-holder"
        >
					<font-awesome-icon
						:icon="['fas', 'trash']"
						style="width:17px; height: 17px"
					/>
				</span>
			</div>
        </div>
      </div>
      <hr class="mb-1 mt-2 mb-4" />
      <div class="row text-right mt-4 mb-4">
        <div class="offset-lg-7 col-lg-5">Сумма: <span class="orderTotal"> {{ order.total }} </span> грн</div>
      </div>
        <div class="d-flex justify-content-between col-12">
          <div class="form-group mt-2">
            <button 
              @click="saveOrder()"
              type="submit" 
              class="btn btn-success"
            >
              Сохранить

            </button>
          </div>
          <div class="form-group mt-2">
            <button 
              @click="saveOrderAndExit()"
              type="submit" 
              class="btn btn-primary"
            >
              Сохранить и выйти

            </button>
          </div>
          <div class="form-group mt-2">
             <button 
              @click="backToOrders()"
              class="btn btn-secondary"
             >
              Назад

             </button>
          </div>
        </div>
      <!-- <div class="buttons mt-4 mb-4">
        <div class="d-flex justify-content-center w-100">
          <div class="btn btn-outline-success btn-sm">Сохранить</div>
        </div>
        <div class="d-flex justify-content-center w-100">
          <div class="btn btn-outline-primary btn-sm">Сохранить и вернуться</div>
        </div>
      </div> -->
      <div class="buttons mt-4">
        <div>
          <div
            @click="changeOrderStatus()"
            v-if="order.status === 1" 
            class="btn btn-outline-success btn-sm"
          >
            Заказ выполнен
          </div>
          <div
            @click="changeOrderStatus()"
            v-else-if="order.status === 2" 
            class="btn btn-outline-primary btn-sm"
          >
            Заказ еще выполняется
          </div>
        </div>
        <div 
          @click="showDeleteOrderModal = true"
          class="btn btn-outline-danger btn-sm btn-delete"
        >
          Удалить заказ
        </div>
      </div>
    </div>
    		<!-- delete subItem modal -->
        <modal-delete-window
          :showDeleteModal="showDeleteModal"
        >
          <h5 class="text-center mb-4">Удалить это блюдо?</h5>
          <div class="d-flex justify-content-around mt-4">
            <div 
              @click="removeOrderItem()"
              class="btn btn-outline-danger btn-sm"
            >
              Удалить
            </div>
            <div 
              @click="hideRemoveOrderItemModal()"
              class="btn btn-outline-secondary btn-sm"
            >
              Отменить
            </div> 
          </div>
        </modal-delete-window>


      		<!-- delete order modal -->
        <modal-delete-window
          :showDeleteModal="showDeleteOrderModal"
        >
          <h5 class="text-center mb-4">Удалить этот заказ?</h5>
          <div class="d-flex justify-content-around mt-4">
            <div 
              @click="removeOrder()"
              class="btn btn-outline-danger btn-sm"
            >
              Удалить
            </div>
            <div 
              @click="showDeleteOrderModal = false"
              class="btn btn-outline-secondary btn-sm"
            >
              Отменить
            </div> 
          </div>
        </modal-delete-window>

      		<!-- add new item to order modal -->
        <modal-delete-window
          :showDeleteModal="showAddOrderItemsModal"
        >
          <h5 class="text-center mb-4">Добавить блюдо к заказу</h5>
          <div class="row">
            <div class="mb-2 col-12 form-group ">
              <span class="option-title">Поиск блюда, мин 2 символа</span>
              <input 
                v-model="searchDish" 
                @input="fetchDishesByQuery()"
                class="form-text w-100 form-control" 
                type="text" 
              />
            </div>
            <div v-for="dish in menuItems" :key="dish.item"
              class="col-12 mb-2"
            >
              <div class="d-flex justify-content-between">
                {{ dish.title }}
                <br>
                {{ dish.weight }}{{ dish.weightKind }} {{ dish.price }}грн
                <span 
                  @click="addDishToOrderMenuItems(dish)"
                  class="addDish"
                >
                  Добавить
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around mt-4">
            <div 
              @click="showAddOrderItemsModal = false"
              class="btn btn-outline-secondary btn-sm"
            >
              Отменить
            </div> 
          </div>
        </modal-delete-window>

      		<!-- edit(change) item in order modal -->
        <modal-delete-window
          :showDeleteModal="showEditOrderItemsModal"
        >
          <h5 class="text-center mb-4">Заменить блюдо</h5>
          <div class="row">
            <div
              v-if="!sameOrderItems.length"
              class="text-center w-100"
              style="color: red; font-weight: bold;"
            >
              Нет похожих блюд
            </div>
            <div v-for="sameItem in sameOrderItems" :key="sameItem.item"
              class="col-12 mb-2"
            >
              <div class="d-flex justify-content-between">
                {{ sameItem.title }}
                <br>
                {{ sameItem.weight }}{{ sameItem.weightKind }} {{ sameItem.price }}грн
                <span 
                  @click="editDishInOrderMenuItems(sameItem)"
                  class="addDish"
                >
                  Заменить
                </span>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-around mt-4">
            <div 
              @click="showEditOrderItemsModal = false"
              class="btn btn-outline-secondary btn-sm"
            >
              Отменить
            </div> 
          </div>
        </modal-delete-window>


  </div>
  
</template>

<script>
import Spinner from '@/components/admin/spinner.vue';
import ModalDeleteWindow from '@/components/admin/modalDeleteWindow.vue';

export default {
  components:{
    Spinner,
    ModalDeleteWindow
  },

  middleware: "auth",
  layout: "admin",

  data() {
    return {
      showSpinner: false,
      order: {},
      sameOrderItems:[],
      menuItems:[],
      menuItemToRemove: {},
      showDeleteModal: false,
      showDeleteOrderModal: false,
      showAddOrderItemsModal: false,
      searchDish: '',
      showEditOrderItemsModal: false,
      orderItemToReplace: {},
    };
  },
  mounted(){
    this.fetchOrder()
  },
  methods:{
    fetchOrder(){
      this.showSpinner = true
      setTimeout(() => {
        this.order = {
          id: 1,
          date: '20:20 20.02.22',
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
              item: 37,
              cat: 1,
              amount: 2,
              title: "Coca cola",
              weight: "2л",
              price: 70
            },
            
            { id: 3, item: 28, cat: 3, amount: 2, title: "Рисовая лапша Wok с манго С ОВОЩАМИ", weight: "250", weightKind: 'г', price: 169 },
          ],
          status: 1, // new, inProgress, done
          total: 159.98
        }
        this.countTotalSum()
        this.showSpinner = false
      }, 500)
    },
    incrementOrderItem(orderItem){
      this.showSpinner = true
      setTimeout(()=>{
        this.order.orderItems.forEach(el => {
          if(el.item == orderItem.item){
            el.amount += 1
          }
        })
        this.countTotalSum()
        this.showSpinner = false
      }, 500)
    },
    decrementOrderItem(orderItem){
        this.order.orderItems.forEach(el => {
          if(el.item == orderItem.item){
            if(el.amount > 1){
              this.showSpinner = true
              setTimeout(()=>{
                el.amount -= 1
                this.countTotalSum()
                this.showSpinner = false
              }, 500)
            }
          }
        })
    },
    showRemoveOrderItemModal(orderItem){
      this.showDeleteModal = true
      this.menuItemToRemove = orderItem
    },
    hideRemoveOrderItemModal(){
      this.showDeleteModal = false
      this.menuItemToRemove = {}
    },
    removeOrderItem(){
      this.showSpinner = true
      this.showDeleteModal = false
      setTimeout(() => {
        this.order.orderItems = this.order.orderItems.filter(a => a.item !== this.menuItemToRemove.item)
        this.countTotalSum()
        this.showSpinner = false
      }, 500)
    },
    removeOrder(){
      // fetch
      console.log('remove order id='+this.order.id)
      this.backToOrders()
    },
    countTotalSum(){
      let totalSum = 0
      this.order.orderItems.forEach(el => {
        totalSum += el.amount * el.price
      })
      this.order.total = totalSum.toFixed(2)
    },
    fetchMenuItems(query){
      setTimeout(()=>{
        this.menuItems = [
          { id: 2, item: 25, cat: 1, title: "Coca cola", weight: "0.5", weightKind: 'л', price: 40 },
          { id: 2, item: 26, cat: 1, title: "Coca cola", weight: "1.0", weightKind: 'л', price: 55 },
          { id: 2, item: 27, cat: 1, title: "Coca cola", weight: "2.0", weightKind: 'л', price: 70 },
          { id: 6, item: 21, cat: 5, title: "Суши", weight: "6", weightKind: 'шт', price: 170 },
          { id: 9, item: 22, cat: 4, title: "Том ям коконат", weight: "250", weightKind: 'г', price: 99.95 },
          { id: 11, item: 23, cat: 3, title: "Фанта", weight: "2.0", weightKind: 'л', price: 70 },
        ]
      }, 500)
    },
    changeOrderStatus(){
      this.showSpinner = true
      setTimeout(() => {
        this.order.status == 1 ? this.order.status = 2 : this.order.status = 1
        this.showSpinner = false
      }, 500);
    },
    backToOrders(){
			this.$router.push('/admin/orders')
    },
    saveOrder(){
      this.showSpinner = true
      setTimeout(() => {
        console.log(this.order)
        // fetch
        this.showSpinner = false
      }, 500);
    },
    saveOrderAndExit(){
      this.saveOrder()
      this.backToOrders()
    },
    fetchDishesByQuery(){
      // fetch
      if(this.searchDish.length > 1 ){
        this.menuItems = [
          { id: 3, item: 25, cat: 3, title: "Рисовая лапша Wok с манго С МОРЕПРОДУКТАМИ", weight: "250", weightKind: 'г', price: 249 },
          { id: 3, item: 26, cat: 3, title: "Рисовая лапша Wok с манго С ТЕЛЯТИНОЙ", weight: "250", weightKind: 'г', price: 229 },
          { id: 3, item: 27, cat: 3, title: "Рисовая лапша Wok с манго С КУРИНЫМ ФИЛЕ", weight: "250", weightKind: 'г', price: 199 },
          { id: 6, item: 21, cat: 5, title: "Суши", weight: "6", weightKind: 'шт', price: 170 },
          { id: 9, item: 22, cat: 4, title: "Том ям коконат", weight: "250", weightKind: 'г', price: 99.95 },
          { id: 11, item: 23, cat: 3, title: "Фанта", weight: "2.0", weightKind: 'л', price: 70 },
        ].filter(item => item.title.toLowerCase().includes(this.searchDish.toLowerCase()))
      }else if(this.searchDish.length == 0 ){
        this.menuItems = []
      }
    },
    addDishToOrderMenuItems(dish){
      this.showAddOrderItemsModal = false
      this.showSpinner = true
      setTimeout(()=> {
        dish.amount = Number(1)
        dish.price = Number(dish.price.toFixed(2)) 
        this.order.orderItems.push(dish)
        this.countTotalSum()
        this.searchDish = ''
        this.menuItems = []
        this.showSpinner = false
      }, 500)
      console.log(this.order.orderItems)
    },
    // fetchSameOrderItems(){
    //   setTimeout(()=>{
    //     this.sameOrderItems = [
    //       { id: 4, item: 25, cat: 1, title: "Coca cola", weight: "0.5", weightKind: 'л', price: 40 },
    //       { id: 5, item: 26, cat: 1, title: "Coca cola", weight: "1.0", weightKind: 'л', price: 55 },
    //       { id: 6, item: 27, cat: 1, title: "Coca cola", weight: "2.0", weightKind: 'л', price: 70 },
    //     ]
    //   }, 500)
    // },
    showEditOrderItemsModalHandler(item){
      this.showEditOrderItemsModal = true
      this.orderItemToReplace = item
      // fetch
      this.sameOrderItems = [
        { id: 3, item: 25, cat: 3, title: "Рисовая лапша Wok с манго С МОРЕПРОДУКТАМИ", weight: "250", weightKind: 'г', price: 249 },
        { id: 4, item: 26, cat: 3, title: "Рисовая лапша Wok с манго С ТЕЛЯТИНОЙ", weight: "250", weightKind: 'г', price: 229 },
        { id: 5, item: 27, cat: 3, title: "Рисовая лапша Wok с манго С КУРИНЫМ ФИЛЕ", weight: "250", weightKind: 'г', price: 199 },
        { id: 6, item: 21, cat: 5, title: "Суши", weight: "6", weightKind: 'шт', price: 170 },
        { id: 9, item: 22, cat: 6, title: "Том ям коконат", weight: "250", weightKind: 'г', price: 99.95 },
        { id: 11, item: 23, cat: 7, title: "Фанта", weight: "2.0", weightKind: 'л', price: 70 },
      ].filter(i => i.cat == item.cat)
    },
    editDishInOrderMenuItems(newOrderItemToReplace){
      this.showEditOrderItemsModal = false
      this.showSpinner = true
      setTimeout(() => {
        this.order.orderItems = this.order.orderItems.filter(a => a.item !== this.orderItemToReplace.item)
        newOrderItemToReplace.amount = 1
        this.order.orderItems.push(newOrderItemToReplace)
        this.countTotalSum()
        this.showSpinner = false
      }, 500);

    }
  }
}
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
.orderTotal{
  font-weight: bold;
  font-size: 30px;
}
.orderTotalTop{
  font-weight: bold;
  font-size: 20px;
}
.addDish{
  cursor: pointer;
  color: green;
  &:hover{
    text-decoration: underline;
  }
}
</style>

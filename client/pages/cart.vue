<template>
  <div class="mb200"> 
    <div class="shell">
      <h2 class="text-center" style="margin-bottom: 50px;">Ваш заказ:</h2>
      <div class="cartItems">
        <div class="cartItem">
          <span class="itemTitle" style="">Тяхан ( рис с яйцом) С ТИГРОВЫМИ КРЕВЕТКАМИ И КЕШЬЮ (250 Г) 250 г</span>
          <div class="amountBlock">
            <font-awesome-icon
              :icon="['fas', 'minus-circle']"
              class="icons"
            />
            <span class="amount">1</span>
            <font-awesome-icon
              :icon="['fas', 'plus-circle']"
              class="icons"
            />
            <span class="price">249.00 грн</span>
            <font-awesome-icon
              :icon="['fas', 'trash']"
              class="icons trashIcon"
            />
          </div>
        </div>
        <div class="cartItem">
          <span style="font-size: 18px; text-align: left;padding-right: 20px;">Тайские соки FOCO Личи 350 мл</span>
          <div class="amountBlock">
            <font-awesome-icon
              :icon="['fas', 'minus-circle']"
              class="icons"
            />
            <span class="amount">1</span>
            <font-awesome-icon
              :icon="['fas', 'plus-circle']"
              class="icons"
            />
            <span class="price">249.00 грн</span>
            <font-awesome-icon
              :icon="['fas', 'trash']"
              class="icons trashIcon"
            />
          </div>
        </div>
        <div class="cartSum">
          Итого: <span>1599.00</span> грн
        </div>
      </div>
      <div class="designCart">
        К оформлению заказа
      </div>
    </div>
  </div>
</template>

<script>

export default {
  layout: 'front',
  data(){
    return{
      items: [],
    }
  },
  async fetch(){
    this.items = await fetch(
      process.env.imagesBaseUrl + 'api/getNews'
    ).then(items => items.json())
  }

}
</script>


<style lang="scss" scoped>
.cartItems{
  max-width: 800px;
  margin: 0 auto 20px;
}
.cartItem{
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 16px;
    margin-bottom: 20px;
    @media (max-width: 767px){
      flex-direction: column;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      padding-bottom: 20px;
    }
}
.cartSum{
      border-top: 1px solid rgba(255,255,255,0.6);
      padding-top: 20px;
      font-size: 20px;
      color: #e0ca8f;
      span{
        font-weight: 700;
      }
    @media (max-width: 767px){
      border-top: none;
    }
}
.amountBlock{
  display: flex;
  align-items: center;
  justify-content: space-between;
    @media (max-width: 767px){
      margin-top: 10px;
    }
  .amount{
    margin-left: 10px;
    margin-right: 10px;
    line-height: 1;
  }
  .price{    
    margin-left: 30px;
    white-space: nowrap;
    @media (max-width: 767px){
      font-size: 18px;
    } 
  }
}
.itemTitle{
  font-size: 18px;
  text-align: left;
  padding-right: 20px;
    @media (max-width: 767px){
      text-align: center;
    }
}
.mb200{
  margin-bottom: 200px;
    @media (max-width: 767px){
      margin-bottom: 100px;
    }
}
.trashIcon {
  margin-left: 10px;
  @media (max-width: 767px){
    margin-left: 30px;
  } 
}
.icons {
  width:17px; 
  height: 17px; 
  cursor: pointer; 
  transition: scale 0.25s ease-in-out;
  &:hover{
    scale: 1.15;
    transition: scale 0.25s ease-in-out;
  }
  @media (max-width: 767px){
    height: 25px;
    width: 25px;
  } 
}
.designCart{
  background-color: #ffcb1f;
  width: fit-content;
  border-radius: 5px;
  color: #000;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  margin: 50px auto 50px;
  font-weight: 700;
  transition: scale 0.25s ease-in-out;
  &:hover{
    scale: 1.15;
    transition: scale 0.25s ease-in-out;
  }
}
</style>

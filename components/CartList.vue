<template>
  <div>
    <ul class="cartList">
      <li
        class="cartListItem"
        v-for="cartItem in $store.state.cartItems"
        :key="cartItem.id"
      >
        <img :src="cartItem.imageUrl" />
        <div class="cartListItem__header">
          <span class="cartListItem__title">
            {{ cartItem.name }}
          </span>
          <span>
            {{ cartItem.price }}
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { FETCH_CART_ITEMS } from '@/store'
export default {
  fetch() {
    this.$store.dispatch(FETCH_CART_ITEMS)
  },
}
</script>

<style scoped>
.cartList {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cartListItem {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
}

.cartListItem >>> img {
  width: 98px;
  margin-right: 10px;
}
.cartListItem >>> .cartListItem__header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.cartListItem >>> .cartListItem__title {
  width: 200px;
  font-weight: 700;
}
</style>

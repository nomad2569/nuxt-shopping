<template>
  <div>
    <div class="detail-wrapper">
      <img :src="product.imageUrl" :alt="product.name" />
      <span class="detail__title">{{ product.name }}</span>
      <span>{{ product.price }} $</span>
      <button @click="navToCart">Get to Cart</button>
    </div>
  </div>
</template>

<script>
import { addProductToCart, fetchProductById } from '../../api/api.js'
export default {
  async asyncData({ params }) {
    const response = await fetchProductById(params.id)
    return { product: response.data }
  },
  methods: {
    navToCart() {
      addProductToCart(this.product)
      this.$router.push('/cart')
    },
  },
}
</script>

<style scoped>
.detail-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.detail-wrapper::v-deep img {
  width: 30%;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 25px;
}
span {
  margin-bottom: 5px;
}

.detail__title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 15px;
}
</style>

<template>
  <div class="app">
    <main>
      <div class="search-bar flex">
        <SearchInput v-model="searchKeyword" @search="searchProducts" />
      </div>
      <div class="products-wrapper">
        <ul>
          <li v-for="product in products" :key="product.id" class="item flex">
            <img
              class="product-image"
              :src="product.imageUrl"
              :alt="product.name"
              @click="moveToDetailPage(product.id)"
            />
            <p @click="moveToDetailPage(product.id)">{{ product.name }}</p>
            <div>
              <span @click="moveToDetailPage(product.id)"
                >$ {{ product.price }}</span
              >
              <button class="products__get-cart" @click="navToCart">
                Grab
              </button>
            </div>
          </li>
        </ul>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios'
import NuxtLogo from '../components/NuxtLogo.vue'
import SearchInput from '../components/SearchInput.vue'
import { fetchAllProduct, fetchProductsByKeyword } from '../api/api'

export default {
  components: { SearchInput },
  async asyncData() {
    const response = await fetchAllProduct()
    const products = response.data.map((item) => {
      return {
        ...item,
        imageUrl: `${item.imageUrl}?random=${Math.random()}`,
      }
    })
    return { products }
  },
  data() {
    return {
      searchKeyword: '',
    }
  },

  methods: {
    navToCart(event) {
      this.$router.push('/cart')
    },
    moveToDetailPage(id) {
      this.$router.push(`/detail/${id}`)
    },

    async searchProducts() {
      const response = await fetchProductsByKeyword(this.searchKeyword)
      this.products = response.data.map((item) => {
        return {
          ...item,
          imageUrl: `${item.imageUrl}?random=${Math.random()}`,
        }
      })
      this.$emit('search-home', this.products)
    },
  },
}
</script>

<style scoped>
.flex {
  display: flex;
  justify-content: center;
}
main {
  width: 100%;
}

.products__get-cart {
  cursor: pointer;
}
.search-bar {
  margin-bottom: 15px;
  padding-left: 10px;
}
.search-bar >>> input {
  min-width: 60%;
  text-align: center;
  overflow-wrap: break-word;
}
.item {
  display: inline-block;
  width: 400px;
  height: 300px;
  text-align: center;
  margin: 0 0.5rem;
  cursor: pointer;
  z-index: 100;
}
.product-image {
  width: 400px;
  height: 250px;
}
.app {
  position: relative;
}
.cart-wrapper {
  position: sticky;
  float: right;
  bottom: 50px;
  right: 50px;
}
.cart-wrapper .btn {
  display: inline-block;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
}
</style>

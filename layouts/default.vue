<template>
  <div class="default-main">
    <header class="header flex">
      <NuxtLink to="/" @search-home="goHome">
        <span class="header__title"> Home </span>
      </NuxtLink>
    </header>
    <div class="cartNav-wrapper">
      <span @click="navToCart">🛒</span>
    </div>
    <Nuxt />
  </div>
</template>

<script>
import { fetchAllProduct } from '../api/api'
export default {
  methods: {
    goHome(products) {
      this.$router.push('/')
    },
    navToCart() {
      this.$router.push('/cart')
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@100;400;700&display=swap');
* {
  font-family: 'Raleway', sans-serif;
}
.default-main {
  position: relative;
}
.cartNav-wrapper {
  font-size: 50px;
  position: fixed;
  bottom: 30px;
  right: 50px;
  border: 1px solid #a29bfe;
  padding: 15px;
  border-radius: 50%;
  background-color: #74b9ff;
  cursor: pointer;
  z-index: 1;
}

.cartNav-wrapper >>> span {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  overflow: hidden;
}
.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}
.header {
  width: 100%;
  background-color: #a29bfe;
  margin-top: 10px;
  padding-top: 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-radius: 20px;
}

a {
  text-decoration: none;
}

.header__title {
  color: #ffeaa7;
  font-size: 36px;
  font-weight: 700;
  font-family: 'Raleway';
  transition: color 300ms ease;
}

.header__title:hover {
  color: #fab1a0;
}
</style>

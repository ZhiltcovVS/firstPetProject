<template>
  <div class="list-item-wrap">
    <div class="list-item">
      <a href="#" class="item-img text-center">
        <img :src="apiUrl + product.img" :alt="product.name" />
        <span class="item-title">{{ product.name }}</span>
        <div class="item-price">
          <span>
            <strong>
              {{ product.price }}
              <span>₽</span>
            </strong>
          </span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductItem',
  props: {
    product: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    apiUrl() {
      return process.env.VUE_APP_API_URL;
    },
  },
};
</script>

<style scoped>
.list-item {
  background-color: white;
  box-shadow: 0 13px 27px rgba(0, 0, 0, 0.15);
  padding: 20px;
  margin-bottom: 30px;
  position: relative;
}

.list-item .item-img {
  display: block;
  margin-bottom: 20px;
}

.list-item .item-title {
  font-size: 14px;
  margin-bottom: 20px;
}
</style>

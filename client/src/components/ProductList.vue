<template>
  <div class="catalog-items">
    <div class="row">
      <div class="col-4" v-for="product in productsList" :key="product.id">
        <ProductItem :product="product" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem.vue';

export default {
  name: 'ProductList',
  components: {
    ProductItem,
  },
  data: () => ({
    catalogTitle: 'Телефоны',
    totalProducts: 12,
  }),
  props: {
    productsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.catalog-items {
  height: fit-content;
  padding-bottom: 50px;
  position: relative;
  width: 100%;
  box-sizing: border-box;
  padding-top: 30px;
}

.row {
  margin: 0 -15px;
  display: flex;
  flex-wrap: wrap;
}
</style>

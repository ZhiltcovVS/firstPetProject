<template>
  <!-- TODO: Возможно, это стоит разделить на TotalProducts и SortList -->
  <div class="catalog-row d-flex">
    <div class="catalog-group-title d-flex">
      <h1 class="catalog-title">{{ selectedCategory || 'Все категории' }}</h1>
      <span class="h1 catalog-item-count">&#8212; {{ totalProducts }}</span>
    </div>
    <div class="sort">
      <StoreSelect v-model="selectedSort" :options="options" />
    </div>
  </div>
</template>

<script>
import useSortedProducts from '@/hooks/useSortedProducts';
import useCategory from '@/hooks/useCategory';
import { useProducts } from '@/hooks/useProducts';
import { ref } from 'vue';

export default {
  name: 'CatalogRow',
  props: {
    totalProducts: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const options = ref([
      { value: 'rating', name: 'По рейтингу' },
      { value: 'priceAsc', name: 'По цене (сначала дешевые)' },
      { value: 'price', name: 'По цене (сначала дорогие)' },
    ]);

    const { productsList } = useProducts();
    const { selectedCategory } = useCategory();
    const { selectedSort } = useSortedProducts(productsList);

    return {
      selectedCategory,
      selectedSort,
      options,
    };
  },
};
</script>

<style scoped>
.catalog-row {
  /* border-bottom: 1px solid #e6e6e6; */
  justify-content: space-between;
  padding-bottom: 20px;
  padding-top: 30px;
}

.catalog-group-title {
  padding: 0 100px 0 0;
}

.catalog-title {
  padding: 0;
}

.catalog-item-count {
  margin-left: 5px;
  opacity: 0.25;
}

.sort-row {
  display: flex;
}

.sort-row-catalog {
  padding: 14px 0 0;
}

.sort-item + .sort-item {
  margin-left: 28px;
}

.sort-item {
  cursor: pointer;
  position: relative;
}
</style>

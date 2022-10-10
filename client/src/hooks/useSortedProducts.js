import { computed, ref } from 'vue';

const selectedSort = ref();

export default function useSortedProducts(productsList) {
  const sortedProducts = computed(() => {
    if (!selectedSort.value) {
      return productsList.value;
    }
    return [...productsList.value]
      .sort((product, nextProduct) => {
        if (selectedSort.value === 'price' || selectedSort.value === 'rating') {
          return nextProduct[selectedSort.value] - product[selectedSort.value];
        }
        if (selectedSort.value === 'priceAsc') {
          return product.price - nextProduct.price;
        }
      });
  });

  return {
    selectedSort,
    sortedProducts,
  };
}

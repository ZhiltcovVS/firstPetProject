import { computed } from 'vue';

export default function useSortedAndFilteredProducts(sortedProducts, selectedCategoryId) {
  const sortedFilteredProducts = computed(() => {
    if (!selectedCategoryId.value) {
      return sortedProducts.value;
    }
    return sortedProducts.value.filter((product) => product.typeId === selectedCategoryId.value);
  });
  const totalProducts = computed(() => {
    return sortedFilteredProducts.value.length;
  });

  return {
    sortedFilteredProducts,
    totalProducts,
  };
}

import { ref, computed, onMounted } from 'vue';
import axios from 'axios';

const selectedCategory = ref('');

export default function useCategory() {
  const categories = ref([]);
  const selectedCategoryId = computed(() => {
    if (selectedCategory.value === '') {
      return 0;
    }
    return categories.value.reduce((acc, category) => {
      if (category.name === selectedCategory.value) {
        acc = category.id;
      }
      return acc;
    }, 0);
  });
  const getProductCategory = async () => {
    const response = await axios.get('http://localhost:5000/api/type');
    categories.value = response.data;
  };

  onMounted(getProductCategory);

  return {
    selectedCategory,
    selectedCategoryId,
    categories,
  };
}

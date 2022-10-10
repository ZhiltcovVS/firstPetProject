import { ref, onMounted } from 'vue';
import axios from 'axios';

export function useProducts() {
  const productsList = ref([]);
  // const isLoading = ref(false);
  const getProductsList = async () => {
    const response = await axios.get('http://localhost:5000/api/device');
    productsList.value = response.data.rows;
  };

  onMounted(getProductsList);

  return { productsList };
}

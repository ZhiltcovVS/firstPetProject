<template>
  <div class="app">
    <NavbarVue @onChangeCategory="onChangeCategory" :categories="categories" />
    <div class="catalog container">
      <div class="catalog-content">
        <CatalogRow :totalProducts="totalProducts" />
        <div class="catalog-inner">
          <ProductList :productsList="sortedFilteredProducts" :totalProducts="totalProducts" />
          <CatalogFilter />
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="footer-inner">
        <a href="#">
          <img src="@/img/logo-black.png" alt="logo" />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import NavbarVue from '@/components/Navbar.vue';
import CatalogRow from '@/components/CatalogRow.vue';
import CatalogFilter from '@/components/CatalogFilter.vue';
import { useProducts } from '@/hooks/useProducts';
import useCategory from '@/hooks/useCategory';
import useSortedProducts from '@/hooks/useSortedProducts';
import useSortedFilteredProducts from '@/hooks/useSortedFilteredProducts';

export default {
  name: 'App',
  components: {
    ProductList,
    NavbarVue,
    CatalogRow,
    CatalogFilter,
  },
  setup() {
    const { selectedCategory, selectedCategoryId, categories } = useCategory();
    const { productsList } = useProducts();
    const { sortedProducts } = useSortedProducts(productsList);
    const { sortedFilteredProducts, totalProducts } = useSortedFilteredProducts(
      sortedProducts,
      selectedCategoryId,
    );

    return {
      productsList,
      categories,
      totalProducts,
      sortedProducts,
      selectedCategory,
      selectedCategoryId,
      sortedFilteredProducts,
    };
  },
};
</script>

<style>
/* Reset start */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Graphik-Medium';
}

body {
  color: #212121;
}

div {
  display: block;
}

a {
  text-decoration: none !important;
}

ul {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}

li {
  display: list-item;
}

img {
  max-width: 100%;
}

h1 {
  font-size: 28px;
  line-height: 34px;
  margin-bottom: 10px;
}

/* Reset end */
/* Default classes start */
.d-flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.text-center {
  text-align: center;
}

/* Default classes end */

#header {
  /* padding: 23px 0 22px; */
  /* border-bottom: 2px solid lightgrey; */
  background-color: white;
  box-shadow: 0 3px 20px rgba(0, 0, 0, 0.2);
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 99;
}

.col-4 {
  width: 33.3333%;
  padding: 0 15px;
}

.container {
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
}

.catalog-inner {
  display: flex;
  position: relative;
}

.footer {
  background-color: #f7f7f7;
  position: relative;
  padding: 40px 15px 40px;
  align-items: flex-start;
  display: flex;
}
</style>

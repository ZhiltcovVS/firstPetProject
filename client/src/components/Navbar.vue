<template>
  <header id="header">
    <div class="container">
      <div class="header-content">
        <div class="logo">
          <!-- <a href="#">
          <img src="../img/logo-black.png" alt="logo" />
        </a> -->
        </div>
        <nav class="header-nav">
          <ul class="main-menu-list">
            <li class="main-menu-item">
              <a href="#" class="main-menu-link" @mousedown.left="onChangeCategory(null)"
                >Категории</a
              >
              <ul class="main-menu-dropdown">
                <li
                  class="main-menu-dropdown-item"
                  v-for="category in categories"
                  :key="category.id"
                  @mousedown.left="onChangeCategory(category.name)"
                >
                  <a href="#" class="main-menu-dropdown-link">{{ category.name }}</a>
                </li>
              </ul>
            </li>
            <li class="main-menu-item">
              <a href="#" class="main-menu-link">Поиск</a>
            </li>
            <li class="main-menu-item">
              <a href="#" class="main-menu-link">Личный кабинет</a>
            </li>
            <li class="main-menu-item">
              <a href="#" class="main-menu-link">Корзина</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
import useCategory from '@/hooks/useCategory';

export default {
  name: 'NavbarVue',
  props: {
    categories: {
      type: Array,
      required: true,
    },
  },
  methods: {
    onChangeCategory(categoryName) {
      this.selectedCategory = categoryName || null;
    },
  },
  setup() {
    const { selectedCategory } = useCategory();

    return {
      selectedCategory,
    };
  },
};
</script>

<style scoped>
.container {
  margin: 0 auto;
  max-width: 1440px;
  padding-left: 20px;
  padding-right: 20px;
}

.header-content {
  display: flex;
  align-items: center;
  position: relative;
}

.main-menu-list {
  display: flex;
  align-items: center;
}

.main-menu-item {
  position: relative;
  z-index: 1;
}

.main-menu-dropdown {
  background-color: #f7f7f7;
  box-shadow: 0 2px 5px 2px rgb(0 0 0 / 20%);
  left: -5px;
  min-width: 230px;
  opacity: 0;
  padding: 8px 0;
  margin-top: 2px;
  position: absolute;
  top: 100%;
  visibility: hidden;
}

.main-menu-dropdown-item {
  position: relative;
}

.main-menu-dropdown-link {
  align-items: center;
  display: flex;
  padding: 7px 20px;
  transition: background 0.25s ease 0s;
  white-space: nowrap;
  color: #666;
  font-size: 14px;
}

.main-menu-dropdown-link:hover {
  background: #efefef;
}

.main-menu-item:hover .main-menu-dropdown {
  opacity: 1 !important;
  transition: all ease 0.25s;
  visibility: visible;
}

.main-menu-link {
  display: flex;
  align-items: center;
  padding: 0 15px;
  height: 60px;
  color: #666;
  transition: all 0.25s ease;
}

.header-nav {
  font-size: 16px;
  font-weight: 700;
}

.header-nav a {
  text-transform: capitalize;
}

.header-nav a + a {
  margin-left: 30px;
}

.header-nav a:hover {
  color: #a46b5a !important;
}
</style>

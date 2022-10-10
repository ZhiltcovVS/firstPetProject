<template>
  <div class="catalog-filter-wrapper">
    <div class="catalog-filter">
      <form class="catalog-filter-form">
        <div class="catalog-filter-input-block">
          <span class="catalog-filter-title">Бренд</span>
          <div class="catalog-filter-input">
            <div class="catalog-filter-input-line">
              <label class="checkbox">
                <input type="checkbox" class="checkbox-input" value="Apple" />
                <span class="checkbox-text"> Apple </span>
              </label>
            </div>
          </div>
          <div class="catalog-filter-input">
            <div class="catalog-filter-input-line">
              <label class="checkbox">
                <input type="checkbox" class="checkbox-input" value="Apple" />
                <span class="checkbox-text"> Samsung </span>
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CatalogFilter',
};
</script>

<style scoped>
.catalog-filter-wrapper {
  max-width: 255px;
  width: 100%;
  position: relative;
}

.catalog-filter {
  box-sizing: border-box;
  display: block;
  font-size: 14px;
  line-height: 17px;
  padding: 5px 0 0;
  position: sticky;
  top: 70px;
}

.catalog-filter-form {
  position: relative;
  z-index: 1;
}

.catalog-filter-title {
  display: block;
  font-family: 'Graphik-Medium';
  font-size: 14px;
  padding: 17px 0 13px 30px;
  white-space: normal;
  width: 250px;
}

.catalog-filter-input-line {
  margin-bottom: 8px;
  margin-left: 30px;
  margin-top: 4px;
  align-items: center;
  display: flex;
  justify-content: space-between;
}

.checkbox {
  display: flex;
  font-size: 14px;
}

.checkbox-text {
  padding-left: 5px;
}
</style>

<template>
  <div id="sidebar">
    <div class="sidebar__header">
      <div class="sidebar__header--title">
        DEV LIFE
      </div>
      <div class="sidebar__header--sub-title">
        Front-End Web Developer
      </div>
      <div class="sidebar__header--manage">로그인</div>
    </div>

    <div class="sidebar__menu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      open: true,
      overlay: true,
      fullheight: true,
      fullwidth: false,
      right: false,
    };
  },
};
</script>

<style lang="scss">
#sidebar {
  position: absolute;
  width: 340px;
  height: 100%;
  background-color: #0d2b40;
  border-right: 4px solid #48c2c9;

  .sidebar__header {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .sidebar__header--title {
      font-family: 'NotoSansKR-Regular';
      font-size: 35px;
      color: white;
    }

    .sidebar__header--sub-title {
      font-family: 'NotoSansKR-Light';
      font-size: 20px;
      color: rgb(200, 200, 200);
    }

    .sidebar__header--manage {
      font-family: 'NotoSansKR-Regular';
      font-size: 15px;
      color: white;
      margin-top: 50px;
    }
  }
}

.mobile {
  #sidebar {
    display: none;
  }
}
</style>

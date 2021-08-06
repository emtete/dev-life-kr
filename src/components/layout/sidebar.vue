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

      <!-- <b-menu>
        <b-menu-list>
          <b-menu-item label="Info"></b-menu-item>
          <b-menu-item :active="isActive" expanded>
            <template #label="props">
              Administrator
              <b-icon
                class="is-pulled-right"
                :icon="props.expanded ? 'angle-down' : 'angle-up'"
              ></b-icon>
            </template>
            <b-menu-item label="Users"></b-menu-item>
            <b-menu-item label="Device"></b-menu-item>
          </b-menu-item>
          <b-menu-item label="My Account">
            <b-menu-item label="Account data"></b-menu-item>
            <b-menu-item label="Addresses"></b-menu-item>
          </b-menu-item>
        </b-menu-list>

        <b-menu-list>
          <b-menu-item
            label="Expo"
            tag="router-link"
            target="_blank"
            to="/expo"
          ></b-menu-item>
        </b-menu-list>
      </b-menu> -->
    </div>

    <div class="sidebar__menu"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
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
  position: fixed;
  width: 340px;
  height: 100%;
  background-color: #0d2b40;
  border-right: 4px solid #48c2c9;

  display: flex;
  justify-content: center;

  .sidebar__header {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;

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

    & > .menu {
      width: 100%;

      .menu-list a {
        color: white;

        &:hover {
          background-color: #7957d5;
        }
      }
    }
  }
}

.mobile {
  #sidebar {
    display: none;
  }
}
</style>

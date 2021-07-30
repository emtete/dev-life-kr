<template>
  <div id="appbar">
    <b-navbar>
      <template #brand>
        <b-navbar-item tag="router-link" :to="{ path: '/' }">
          <!-- <img
            src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
            alt="Lightweight UI components for Vue.js based on Bulma"
          /> -->
        </b-navbar-item>
      </template>

      <!-- <template #start>
        <b-navbar-item href="#">
          Home
        </b-navbar-item>
        <b-navbar-item href="#">
          Documentation
        </b-navbar-item>
        <b-navbar-dropdown label="Info">
          <b-navbar-item href="#">
            About
          </b-navbar-item>
          <b-navbar-item href="#">
            Contact
          </b-navbar-item>
        </b-navbar-dropdown>
      </template> -->
      <template #start>
        <div class="appbar__header">
          <div class="appbar__header--title">
            DEV LIFE
          </div>
          <div class="appbar__header--sub-title">
            Front-End Web Developer
          </div>
          <div class="appbar__header--manage">로그인</div>
        </div>

        <div class="appbar__menu">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item label="Info"></b-menu-item>
              <b-menu-item :active="isActive" expanded>
                <template #label="props">
                  Administrator
                  <b-icon
                    class="is-pulled-right"
                    :icon="props.expanded ? 'menu-down' : 'menu-up'"
                  ></b-icon>
                </template>
                <b-menu-item label="Users"></b-menu-item>
                <b-menu-item>
                  <template #label>
                    Devices
                    <b-dropdown
                      aria-role="list"
                      class="is-pulled-right"
                      position="is-bottom-left"
                    >
                      <template #trigger>
                        <!-- <b-icon icon="dots-vertical"></b-icon> -->
                      </template>
                      <b-dropdown-item aria-role="listitem"
                        >Action</b-dropdown-item
                      >
                      <b-dropdown-item aria-role="listitem"
                        >Another action</b-dropdown-item
                      >
                      <b-dropdown-item aria-role="listitem"
                        >Something else</b-dropdown-item
                      >
                    </b-dropdown>
                  </template>
                </b-menu-item>
                <b-menu-item label="Payments" disabled></b-menu-item>
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
            <b-menu-list label="Actions">
              <b-menu-item label="Logout"></b-menu-item>
            </b-menu-list>
          </b-menu>
        </div>
      </template>

      <template #end>
        <b-navbar-item tag="div">
          <div class="buttons">
            <a class="button is-primary">
              <strong>Sign up</strong>
            </a>
            <a class="button is-light">
              Log in
            </a>
          </div>
        </b-navbar-item>
      </template>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="scss">
#appbar {
  .appbar__header {
    display: none;
  }

  .appbar__menu {
    /* display: none; */
  }

  /* .buttons {
    display: none;
  } */
}

.mobile {
  #appbar {
    .navbar-menu {
      /* display: block; */
      background-color: #0d2b40;

      .navbar-start .navbar-item,
      .navbar-start .navbar-link {
        color: white;
      }

      .appbar__header {
        padding-top: 30px;
        display: flex;
        flex-direction: column;
        align-items: center;

        .appbar__header--title {
          font-family: 'NotoSansKR-Regular';
          font-size: 35px;
          color: white;
        }

        .appbar__header--sub-title {
          font-family: 'NotoSansKR-Light';
          font-size: 20px;
          color: rgb(200, 200, 200);
        }

        .appbar__header--manage {
          font-family: 'NotoSansKR-Regular';
          font-size: 15px;
          color: white;
          margin-top: 50px;
        }
      }
    }
  }
}
</style>

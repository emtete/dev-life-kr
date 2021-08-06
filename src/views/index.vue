<template>
  <div id="index" :class="device">
    <Sidebar />
    <div class="body">
      <div class="appbar">
        <div class="appbar__header">
          <p></p>
          <b-button
            @click="open_menu"
            size="is-default"
            :icon-left="menu_icon"
          />
        </div>
        <!-- <div class="appbar__dropdown--wrap"> -->
        <b-collapse
          aria-id="contentIdForA11y2"
          class="panel"
          animation="slide"
          v-model="isOpen"
        >
          <div class="panel-block">
            <div class="appbar__dropdown">
              <div class="appbar__dropdown--title">
                DEV LIFE
              </div>
              <div class="appbar__dropdown--sub-title">
                Front-End Web Developer
              </div>
              <div class="appbar__dropdown--manage">로그인</div>

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
          </div>
        </b-collapse>

        <div class="content" style="width: 100%;">
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Sidebar from '@/components/layout/sidebar.vue';
import Appbar from '@/components/layout/appbar.vue';

@Component({
  components: {
    Sidebar,
    Appbar,
  },
})
export default class extends Vue {
  device = '';

  isActive = true;
  menu_icon: 'times' | 'list' = 'list';
  isOpen = false;

  open_menu() {
    this.menu_icon = this.menu_icon === 'list' ? 'times' : 'list';
    this.isOpen = !this.isOpen;
  }

  created() {
    const media = matchMedia('screen and (max-width: 768px)') as MediaQueryList;
    if (media.matches) this.device = 'mobile';

    media.addEventListener('change', e => {
      this.device = e.matches ? 'mobile' : '';
    });
  }
}
</script>

<style lang="scss">
#index {
  height: 100%;

  .body {
    position: absolute;
    left: 341px;
    width: calc(100% - 340px);

    .appbar {
      height: 60px;
      width: 100%;

      .appbar__header {
        box-shadow: 0px 2px 2px gray;
        height: 100%;
        width: 100%;
        padding: 10px;

        display: flex;
        align-items: center;
        justify-content: space-between;

        & > button {
          display: none;
        }
      }

      .panel-block {
        background-color: #0d2b40;
        display: flex;
        justify-content: center;
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;

        .appbar__dropdown {
          display: flex;
          flex-direction: column;
          align-items: center;

          .appbar__dropdown--title {
            font-family: 'NotoSansKR-Regular';
            font-size: 35px;
            color: white;
          }

          .appbar__dropdown--sub-title {
            font-family: 'NotoSansKR-Light';
            font-size: 20px;
            color: rgb(200, 200, 200);
          }

          .appbar__dropdown--manage {
            font-family: 'NotoSansKR-Regular';
            font-size: 15px;
            color: white;
            margin-top: 50px;
          }

          & > .menu {
            width: 100%;

            .menu-list a {
              color: white;
            }
          }
        }
      }
    }

    .content {
    }
  }
}

#index.mobile {
  .body {
    position: relative;
    left: 0px;
    width: 100%;

    .appbar {
      .appbar__header {
        & > button {
          display: block;
        }
      }
    }

    .content {
      width: 100%;
    }
  }
}
</style>

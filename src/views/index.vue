<template>
  <div id="index" :class="is_mobile">
    <div class="sidebar">
      <div class="sidebar__header">
        <div class="sidebar__header--title">
          DEV LIFE
        </div>
        <div class="sidebar__header--sub-title">
          Front-End Web Developer
        </div>
        <div class="sidebar__header--manage">로그인</div>
      </div>

      <div class="sidebar__menu">
        <!--  -->
      </div>
    </div>
    <div class="body">
      <div class="header"></div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import sidebar from '@/components/sidebar/index.vue';

@Component({
  components: {
    sidebar,
  },
})
export default class extends Vue {
  get is_mobile() {
    return window.innerWidth < 769 ? 'mobile' : '';
  }
}
</script>

<style lang="scss">
#index {
  height: 100%;

  .sidebar {
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

  .body {
    position: absolute;
    left: 341px;
  }
}

.mobile {
  .sidebar {
    display: none;
  }
}
</style>

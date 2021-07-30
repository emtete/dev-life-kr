<template>
  <div id="index" :class="is_mobile">
    <Sidebar />
    <!-- <div class="sidebar">
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
      </div>
    </div> -->
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
import Sidebar from '@/components/sidebar/index.vue';

@Component({
  components: {
    Sidebar,
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

  .body {
    position: absolute;
    left: 341px;
  }
}

#index.mobile {
  .body {
    position: relative;
    left: 0px;
  }
}
</style>

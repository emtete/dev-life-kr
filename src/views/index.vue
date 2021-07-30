<template>
  <div id="index" :class="device">
    <Sidebar />
    <div class="body">
      <div class="header">
        <Appbar />
      </div>
      <div class="content">
        <router-view></router-view>
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

    .header {
      position: fixed;
      width: calc(100% - 340px);
      height: 60px;
    }

    .content {
      position: absolute;
      top: 60px;
      width: calc(100% - 340px);
    }
  }
}

#index.mobile {
  .body {
    position: relative;
    left: 0px;

    .header {
      width: 100%;
    }

    .content {
      width: 100%;
    }
  }
}
</style>

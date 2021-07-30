<template>
  <div id="index" :class="device">
    {{ device }}
    <Sidebar />
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
  }
}

#index.mobile {
  .body {
    position: relative;
    left: 0px;
  }
}
</style>

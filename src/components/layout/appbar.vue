<template>
  <div id="appbar">
    <div class="appbar__header">
      <p></p>
      <b-button @click="open_menu" size="is-default" :icon-left="menu_icon" />
    </div>
    <div class="appbar__menu"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class extends Vue {
  isActive = true;
  menu_icon: 'times' | 'list' = 'list';

  open_menu() {
    this.menu_icon = this.menu_icon === 'list' ? 'times' : 'list';
  }
}
</script>

<style lang="scss">
#appbar {
  height: 100%;

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
}

.mobile {
  #appbar {
    .appbar__header {
      & > button {
        display: block;
      }
    }

    /* .appbar__header {
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
      } */
  }
}
</style>

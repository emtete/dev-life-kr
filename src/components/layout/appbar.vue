<template>
  <div id="appbar">
    <div class="appbar__header">
      <p></p>
      <b-button @click="open_menu" size="is-default" :icon-left="menu_icon" />
    </div>
    <div class="appbar__menu">
      <b-collapse
        aria-id="contentIdForA11y2"
        class="panel"
        animation="slide"
        v-model="isOpen"
      >
        <div class="panel-block">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
          Nulla accumsan, metus ultrices eleifend gravida, nulla nunc varius
          lectus, nec rutrum justo nibh eu lectus. <br />
          Ut vulputate semper dui. Fusce erat odio, sollicitudin vel erat vel,
          interdum mattis neque.
        </div>
      </b-collapse>
    </div>
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
  isOpen = false;

  open_menu() {
    this.menu_icon = this.menu_icon === 'list' ? 'times' : 'list';
    this.isOpen = !this.isOpen;
  }
}
</script>

<style lang="scss">
#appbar {
  height: 60px;
  position: fixed;
  width: 100%;
  /* background-color: ; */

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

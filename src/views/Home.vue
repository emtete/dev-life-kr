<template>
  <div id="home">
    <p>abc</p>
    <!-- <div style="display: flex; flex-direction: column">
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
      <img alt="Vue logo" src="../assets/logo.png" />
    </div> -->
    <b-button size="is-small" icon-left="user">
      Add
    </b-button>

    <b-button size="is-small" icon-pack="fab" icon-left="font-awesome">
      Add
    </b-button>

    <b-button size="is-small" icon-pack="fab" icon-left="github-square">
      Add
    </b-button>

    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" /> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import axios from 'axios';

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  url = `https://api-dev-life-kr.herokuapp.com/post/getScrollList?userId=1&numberOfRequest=10`;

  created() {
    axios
      .get(this.url)
      .then(result => {
        console.log(result);
      })
      .catch(err => {
        alert(err);
      });
  }

  // toast() {
  //   this.$buefy.toast.open('Something happened');
  // }
}
</script>

<style lang="scss">
.mobile {
  .home {
    p {
      color: red;
    }
  }
}

#home {
  /* width: 100%; */
  display: flex;
  /* flex-direction: column; */
  /* height: auto; */
  /* max-height: calc(100% - 60px); */
  /* overflow-y: auto; */
}
</style>

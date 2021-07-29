<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
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
      .then((result) => {
        console.log(result);
        
      })
      .catch((err) => {
        alert(err);
      });
  }
}
</script>

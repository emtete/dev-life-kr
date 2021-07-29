<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <b-button label="Launch toast (default)" size="is-medium" @click="toast" /> -->
    <!-- <i class="fab fa-500px"></i> -->
    <i class="fab fa-github-square"></i>
    <i class="fab fa-git-square"></i>
    <b-button size="is-small" icon-left="user">
      Add
    </b-button>
    <b-button size="is-small" icon-pack="fab" icon-left="font-awesome">
      Add
    </b-button>

    <b-button size="is-small" icon-pack="fab" icon-left="github-square">
      Add
    </b-button>

    <b-icon pack="fas" icon="home" size="is-medium"> </b-icon>
    <b-icon pack="fab" icon="fa-500px" size="is-small"> </b-icon>
    <b-icon pack="fas" icon="user" size="is-large" type="is-success"></b-icon>
    <!-- <b-icon pack="fa" icon="faGit" size="is-large" type="is-success"></b-icon> -->
    <vue-fontawesome :icon="['fab', 'font-awesome']" />
    <vue-fontawesome :icon="['fab', 'faGit']" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
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

  toast() {
    this.$buefy.toast.open('Something happened');
  }
}
</script>

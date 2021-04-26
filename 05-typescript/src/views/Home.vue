<template>
  <div class="home">
    <ToggleButton v-model="v"/> 
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import ToggleButton from 'vue-js-toggle-button';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

@Options({
  data() {
    return {
      v: false
    }
  },

  components: {
    HelloWorld, ToggleButton
  },
})

export default class Home extends Vue {
}
</script>

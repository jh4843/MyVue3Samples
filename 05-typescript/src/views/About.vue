
<template>
  <div class="about">
    <h1>This is an about page</h1>

    <Button
      @click="following = !following"
      :icon="following ? 'done' : 'person'"
      :type="following ? 'primary' : 'neutral'"
      >{{ following ? "Following" : "Follow" }}</Button
    >

    <br>
    <Checkbox type="primary" label="Primary" v-model="following" />

    <br>

    <Icon name="label" box box-color="#3051ff" color="#fff" />

    <Input v-model="statusValue" status="success" message="Success"/>
  </div>
</template>

<script>
import { Button, Checkbox, Icon, Input } from 'equal-vue'
//import Equal from 'equal-vue'
import 'equal-vue/dist/style.css'

export default {

  components: {
    Button, Checkbox, Icon, Input
  },


  data() {
    return {
      following: false,
      statusValue: "",
    }
  },
};
</script>

<style>
</style>
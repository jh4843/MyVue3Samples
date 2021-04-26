<template>
  <div class="myMwlRegisterView">
    <Button
      @click="following = !following"
      :icon="following ? 'done' : 'person'"
      :type="following ? 'primary' : 'neutral'"
      >{{ following ? "Following" : "Follow" }}</Button
    >

    <Button type="success">Button</Button>
    <br />
    <MyPatientTable />
    <br />
    <input type="text" name="patientName" v-model="patientName" />
    <input type="text" name="patientBirthDate" v-model="patientBirthDate" />
    <MyButton msg="Hover me!" />
  </div>
</template>

<script>
import MyPatientTable from "@/components/MyPatientTable.vue";
import MyButton from "@/components/MyCommonButton.vue";

import { Button } from "equal-vue";
import "equal-vue/dist/style.css";
//import VueEasyLightBox from 'vue-easy-lightbox'
//import { mapMutations } from 'vuex'

export default {
  name: "MyMwlRegisterView",

  components: {
    MyPatientTable,
    MyButton,
    Button,
    //    VueEasyLightBox,
  },

  data() {
    return {
      patientName: "",
      patientBirthDate: "",

      toggle: "true",
      options: [
        {
          label: "Yes",
          value: "true",
          data: { name: "John", age: "13" },
        },
        {
          label: "No",
          value: "false",
          data: { name: "Amanda", age: "30" },
        },
      ],

      //
      imgs: "http://via.placeholder.com/350x150", // Img Url , string or Array of string
      visible: true,
      index: 0, // default: 0

      following: true,
    };
  },
};
</script>

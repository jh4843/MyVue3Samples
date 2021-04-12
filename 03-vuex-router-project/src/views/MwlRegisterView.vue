<template>
  <div class="myMwlRegisterView">
    <MyPatientTable/>
    <br>
    <input type='text' name = "patientName" v-model="patientName">
    <input type='text' name = "patientBirthDate" v-model="patientBirthDate">
    <MyButton msg='Hover me!'/>
  </div>
</template>

<script>
import MyPatientTable from '@/components/MyPatientTable.vue'
import MyButton from '@/components/MyCommonButton.vue'

//import { mapMutations } from 'vuex'

export default {
  name: 'MyMwlRegisterView',
  components: {
    MyPatientTable, MyButton
  },

  data() {
    return {
      patientName: '',
      patientBirthDate: ''
    }
  },

  methods: {
    //...mapMutations('addPatientInfo')
  }

}
</script>

<style>

</style>
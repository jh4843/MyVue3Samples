<template>
  <div class="myMwlRegisterView">
    <PatientList/>
    <HoverButton msg='Hover me!'/>
  </div>
</template>

<script>
import PatientList from '@/components/MyPatientList.vue'
import HoverButton from '@/components/MyHoverButton.vue'

export default {
  name: 'MyMwlRegisterView',
  components: {
    PatientList, HoverButton
  },

}
</script>

<style>

</style>
<template>
  <div>
    <vue-good-table
      :columns="columns"
      :rows="getPatientList"
      theme="nocturnal"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueGoodTable from '@/components/vue3-good-table/Table'
//import VueTableLite from 'vue3-table-lite';

export default {
  name: "MyPatientTable",

  components: {
    VueGoodTable
  },

  data() {
    return {

      columns: [
        {
          label: 'Name',
          field: 'name',
          type: 'string',
        },
        {
          label: 'Birth Date',
          field: 'birthDate',
          type: 'date',
          dateInputFormat: 'yyyy-MM-dd',
          dateOutputFormat: 'MM-dd-yyyy',
        },
      ],
    }
  },

  

  computed: {
    //...mapGetters('mwlPatientInfo', ['GET_PATIENT_INFO']),
    ...mapGetters(['GET_PATIENT_INFO']),

    getPatientList() {
      let list = []

      for(let item of this.GET_PATIENT_INFO) {
          list.push(item)
      }

      return list
    }
  },
};
</script>

<style>
</style>
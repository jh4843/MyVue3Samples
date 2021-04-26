<template>
  <div>
    <Toggle
      v-model="showSearch"
      id="example4"
      font-size="15px"
      :width="80"
      :height="30"
      :speed="500"
      :colors="{
        background: {
          on: '#35495e',
        },
      }"
    />

    <vue-good-table
      :columns="columns"
      :rows="getPatientList"
      :search-options="{
        enabled: true,
        trigger: 'enter',
        searchFn: myFunc,
      }"
      @on-search="onSearch"
      theme="nocturnal"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import VueGoodTable from "@/components/vue3-good-table/Table";
import Toggle from "@vueform/toggle";
//import VueTableLite from 'vue3-table-lite';

export default {
  name: "MyPatientTable",

  components: {
    VueGoodTable,
    Toggle,
  },

  data() {
    return {
      // https://xaksis.github.io/vue-good-table/guide/configuration/column-options.html
      showSearch: false,

      columns: [
        {
          label: "Name",
          field: "name",
          type: "string",
          thClass: "vgt-center-align",
          tdClass: "vgt-center-align",
        },
        {
          label: "Study Instance UID",
          field: "studyInstanceUid",
          type: "number",
        },
        {
          label: "Birth Date",
          field: "birthDate",
          type: "date",
          dateInputFormat: "yyyy-MM-dd",
          dateOutputFormat: "MMM do yyyy", // https://date-fns.org/v2.17.0/docs/parse
          //dateOutputFormat: 'MM-dd-yyyy',
        },
        {
          label: "Delete",
          field: "deleteButton",
          html: true,
        },
      ],
    };
  },

  methods: {
    myFunc(row, col, cellValue, searchTerm) {
      console.log(row.id + " , " + searchTerm);

      if (searchTerm === "") return true;

      return cellValue.toString().includes(searchTerm);
    },

    toggleShowSearch: function () {
      this.$emit("toggle", !this.isEnabled);
    },

    onSearch(searchTerm, rowCount) {
      console.log(typeof searchTerm + " , " + rowCount);
    },
  },

  computed: {
    //...mapGetters('mwlPatientInfo', ['GET_PATIENT_INFO']),
    ...mapGetters(["GET_PATIENT_INFO"]),

    getPatientList() {
      let list = [];

      for (let item of this.GET_PATIENT_INFO) {
        list.push(item);
      }

      return list;
    },
  },
};
</script>

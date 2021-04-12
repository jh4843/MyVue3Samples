const mwlPatientInfo = {
  //namespaced: true,
  state: {
    patientInfo: [
      {
        id: 1,
        name: "Kim JH",
        studyInstanceUid: 12301,
        birthDate: "2018-08-12",
      },
      {
        id: 2,
        name: "Lee B",
        studyInstanceUid: 12302,
        birthDate: "2019-03-12",
      },
      {
        id: 3,
        name: "Son U",
        studyInstanceUid: 12303,
        birthDate: "2010-01-11",
      },
      {
        id: 4,
        name: "Ban G",
        studyInstanceUid: 12304,
        birthDate: "2010-01-21",
      },
      {
        id: 5,
        name: "Oh D",
        studyInstanceUid: 12305,
        birthDate: "2010-09-09",
      },
      {
        id: 6,
        name: "Jason",
        studyInstanceUid: 12306,
        birthDate: "2012-08-19",
      }
    ],
  },
  getters: {
    // about Patient
    GET_PATIENT_INFO: state => state.patientInfo,
    GET_PATIENT_COUNT: state => state.patientInfo.length,

  },
  mutations: {
    MUT_ADD_PATIENT_INFO: (state, payload) => {
      state.patientInfo.push(payload)
    }
  },
  actions: {
    ACT_ADD_PATIENT_INFO: ({commit}, payload) => {
      commit('MUT_ADD_PATIENT_INFO', payload)
    }
  },
  modules: {
  },
};

export default mwlPatientInfo
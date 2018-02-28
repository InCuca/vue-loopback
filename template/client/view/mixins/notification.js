/* eslint-disable no-unused-vars */
export default {
  methods: {
    notifySuccess(msg) {
      // TODO: show success message
    },
    notifyError(error) {
      // TODO: show error message
      throw error;
    },
    notifyWhenSuccess(msg) {
      return () => {
        // TODO: show success message
      };
    },
  },
};

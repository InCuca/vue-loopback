module.exports = {
  prompts: {
    name: {
      type: 'string',
      required: true,
      message: 'Project name',
    },
    description: {
      type: 'string',
      required: false,
      message: 'Project description',
      default: 'A Vue.js project',
    },
    author: {
      type: 'string',
      message: 'Author',
    },
    extended: {
      type: 'confirm',
      message: `Add basic Login and Admin views with Vuex,
      Vue-router and Bootstrap-vue?`,
    },
  },
  filters: {
    'client/router.js': 'extended',
    'client/static/main.css': 'extended === false',
    'client/static/images/**/*': 'extended',
    'client/components/**/*': 'extended',
    'client/services/**/*': 'extended',
    'client/store/**/*': 'extended',
    'client/style/**/*': 'extended',
    'client/view/**/*': 'extended',
    'server/boot/add-initial-data.js': 'extended',
    'server/boot/create-admin.js': 'extended',
    'server/initial-data/**/*': 'extended',
    'server/models/**/*': 'extended',
    'test/client/components/**/*': 'extended',
    'test/server/mixins/**/*': 'extended',
    'test/server/account.spec.js': 'extended',
  },
  complete(data, {logger}) {
    logger.log('To get started:');
    logger.log('1. Install dependencies: npm install');
    logger.log('2. Build with: npm run build');
  },
};

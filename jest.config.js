module.exports = {
  "bail": 1,
  "verbose": true,

  transform: {
    "^.+\\.jsx?$": "babel-jest",
    '^.+\\.vue$': '@vue/vue3-jest'
  },

  moduleFileExtensions: [
      'js',
      'json',
      'vue'
    ],

  testEnvironment: "jsdom",

  testEnvironmentOptions: {
      customExportConditions: ["node", "node-addons"],
    },

  

  preset: '@vue/cli-plugin-unit-jest'
};

exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    'test.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:8000/',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 11000,
    showColors: true,
    realtimeFailure: true,
  },

  onPrepare: function() {
  }
};

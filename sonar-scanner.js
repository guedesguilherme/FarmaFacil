const scanner = require('sonarqube-scanner');

scanner(
  {
    serverUrl: 'https://sonarcloud.io',
    token: 'c45a21e2176567b399f71bb2b4198e00af4a516f',
    options: {
      'sonar.projectKey': 'guedesguilherme_FarmaFacil',
      'sonar.organization': 'guedesguilherme',
      'sonar.sources': 'src',
      'sonar.tests': 'test',
    },
  },
  () => process.exit(),
);

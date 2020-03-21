const path = require('path');

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: [path.join(__dirname, 'jest.setup.js')],
};

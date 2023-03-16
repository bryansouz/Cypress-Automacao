const webpack = require('@cypress/webpack-preprocessor')
const allureWriter = require('@shelex/cypress-allure-plugin/writer')
const allureRuntime = require('@shelex/cypress-allure-plugin/runtime')

module.exports = (on, config) => {
  on('file:preprocessor', webpack())
  allureWriter(on, config)
  allureRuntime(on, config)

  return config
}

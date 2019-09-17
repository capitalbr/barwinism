if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  console.log("ENTERED ENVIERMENT VARIABLES CONDITION")
  // module.exports = require('./keys_dev');
  module.exports = {
    azureEndpoint: "testing"
  }
}
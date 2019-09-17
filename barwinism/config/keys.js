if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
  console.log("ENTERED ENVIERMENT VARIABLES CONDITION")
} else {
  module.exports = require('./keys_dev');
}
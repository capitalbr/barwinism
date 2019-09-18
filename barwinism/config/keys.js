if (!require('./keys_dev')) {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}
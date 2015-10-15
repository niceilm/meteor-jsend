JSEND = {
  success: success,
  fail: fail,
  error: error
};

/**
 *
 * @param {Object|Array|String} data
 * @returns {Object}
 */
function success(data) {
  return baseResults("success", data);
}

/**
 *
 * @param {Object|Array|String} data
 * @returns {Object}
 */
function fail(data) {
  return baseResults("fail", data);
}

/**
 *
 * @param {String} message
 * @param {Object|Array|String} data
 * @returns {Object}
 */
function error(message, data) {
  return baseResults("error", data, message);
}

function baseResults(status, data, message) {
  check(status, String);

  var results = {status: status};
  if(data) {
    results.data = data;
  }
  if(message) {
    results.message = message;
  }
  return results;
}
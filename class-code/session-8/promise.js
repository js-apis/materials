function wait(delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      try {
        resolve();
      } catch(e) {
        reject(e);
      }
    }, delay)
  })
}

module.exports = wait;
const bindInstance = function(context, options) {
  if (!options) {
    return options
  }
  if (Object.prototype.toString.call(options) == "[object Array]") {
    for (let index = 0; index < options.length; index++) {
      options[index] = bindInstance(context, options[index])
    }
  }
  if (Object.prototype.toString.call(options) == "[object Object]") {
    for (const key in options) {
      options[key] = bindInstance(context, options[key])
    }
  }
  if (Object.prototype.toString.call(options) == "[object Function]") {
    options = options.bind(context)
  }

  return options
}

export { bindInstance }

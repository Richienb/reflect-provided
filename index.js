"use strict"

module.exports = (...args) => {
    if (args.length <= 1) return args[0]
    else return [...args]
}

const searchDoc = require('./index')
const argument = process.argv.splice(2)[0]
const results = searchDoc(argument)
console.log("Result is ", results)
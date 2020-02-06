var phrase = prompt("Please enter a phrase:")
console.log(`There are ${phrase.length} characters in "${phrase}".`)

var phrase = prompt("Please enter a phrase:")
var phraseWithoutSpaces = phrase.replace(/\s/, '')
var numberOfCharacters = phraseWithoutSpaces.length
console.log(`There are ${numberOfCharacters} characters in "${phrase}".`)

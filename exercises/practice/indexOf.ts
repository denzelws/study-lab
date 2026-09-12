import { myList, myString } from "./data-exercise";
// [1, 2, 3, 4, 5]

// Finding the index of an element in a list or a string
const indexList: number = myList.indexOf(3); // 2 - Index of element '3'
const indexString: number = myString.indexOf('e'); // 1 - Index of character 'e'

console.log(indexList)
console.log(indexString)
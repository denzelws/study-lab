// [1, 2, 3, 4, 5]

import { myList, myString } from "./data-exercise"

const concatenateList: number[] = myList.concat([6,7,8])
const concatenateListSpread: number[] = [...myList, 6,7,8]

const concatenateString: string = `${myString}, world!`; // "Hello, world!"
const concatenateStringPlus: string = myString + ", world!"; // "Hello, world!"


console.log(concatenateList)
console.log(concatenateListSpread)
console.log(concatenateString)
console.log(concatenateStringPlus)
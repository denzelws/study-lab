import { myList } from "./data-exercise"

export const myString: string = "Hello"

const sliceList = myList.slice(2,4)
const sliceString = myString.substring(1,3)

console.log(sliceList)
console.log(sliceString)
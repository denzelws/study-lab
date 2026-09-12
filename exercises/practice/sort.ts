import { myList } from "./data-exercise";
// [1, 2, 3, 4, 5]

const sortedList: number[] = [...myList].sort((a, b) => b - a); // [5, 4, 3, 2, 1]

console.log(sortedList)
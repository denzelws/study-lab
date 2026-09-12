const fruits: string[] = ["banana", "uva", "maca"]

fruits.splice(1,0, "bilberry")

fruits.splice(fruits.indexOf("banana"), 2)

console.log('log', fruits)
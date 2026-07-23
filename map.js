const number = [1, 2, 3, 4, 5]
number.map((item, index, array)=>{
    // console.log(number)
    // console.log(item, index, array)
})


// filter...
const newNums = number.filter((item, index, array)=>{
    return item > 3
})
// console.log(newNums)

// reduce.....
const sum = number.reduce((prev, item)=>{
    return prev + item // some of 1,2,3,4,5,2
}, 2)
// console.log(sum);

const res = number.find((item, index, array)=>{
    return item > 3
})
console.log(res)
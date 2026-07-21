// looping an array
let object = {
    name: "ram",
    age: "23"
}
let arr = ["apple", "banana", "orange", object]

// for(i=0; i< arr.length; i++){
//     // console.log(arr[i])
// }

let i = 0;
while(i< arr.length){
    console.log(arr[i])
    i++
}
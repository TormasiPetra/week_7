let variable = 10
variable = 20

const variable2 = 50
// variable = 100 <--- ilyet nem lehet

let array = [1, 2, 3]
array = [4, 5, 6]
array.push(10)

const array2 = [10, 20, 30]
// array2 = [40, 50, 60] 
array2.push(100)
array2[0] = 11

console.log(array2) 



const arr = ["kiss béla", "nagy józsi", "tóth jános", "márta ricsi", "john doe", "kis macska"]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
} 

 let lettersLength = 0
arr.forEach((value, index) => {
    //console.log("at index: ", index, " is: ", value)
    console.log(`at index: ${index + 1} is: ${value}`) // template literal, ${jsExpression} <- template literal expression
    lettersLength += value.length
})

let mapResult = arr.map((value, index) => {
    console.log(`at index: ${index + 1} is: ${value}`)
    return value.length
})
console.log("lettersLength:", lettersLength)
console.log("mapResult:", mapResult)
for (let i = 0; i < arr[0].length; i++) {
    console.log(arr[0][i])
} 



let obj = {
    key1: "value",
    key3: true,
    key4: ["one", "two", "three", "four"],
    key5: {
        nestedKey1: "nested value",
        nestedKey2: 200,
        nestedKey3: false,
        nestedKey4: ["ein", "zwei", "drei"],
        nestedKey5: { nestedKey: "hello" }
    },
    key2: 100
}

//console.log(obj.key5.nestedKey5.nestedKey)
//console.log(obj["key5"]["nestedKey4"][1])

const objectKeys = Object.keys(obj)

objectKeys.forEach((key) => {
    console.log(key, obj[key])
})

/* console.log(obj.key4)
for (let i = 0; i < obj.key4.length; i++) {
    console.log(obj.key4[i])
}
obj.key4.map((value) => {
    console.log(value)
}) */
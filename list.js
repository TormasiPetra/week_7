const data = [
    {
        name: "Petra",
        age: 28,
        pets: ['Mici', 'Béla', 'Gizi'],
        mostRecentPurchase: {
            price: 15000,
            color: "black"
        }   
    },
    {
        name: "Béla",
        age: 32,
        pets: ['Hami', 'Kokó', 'Bibi'],
        mostRecentPurchase: {
            price: 150000,
            color: "white"
        }
    },
    {
        name: "Mihály",
        age: 29,
        pets: ['Hercegnő', 'Prince', 'Bali'],
        mostRecentPurchase: {
        price: 500000,
        color: "blackish"
        }
    },
    {
        name: "Hedvig",
        age: 12,
        pets: ['Ezerfi', 'Emez', 'Imi'],
        mostRecentPurchase: {
            price: 120,
            color: "red"
        }
    },
    {
        name: "Tamás",
        age: 54,
        pets: ['Bot', 'Nóta', 'Giban'],
        mostRecentPurchase: {
            price: 65000,
            color: "black"
        }
    },
    {
        name: "Péter",
        age: 36,
        pets: ['Hampók', 'Lusti', 'Hampergő'],
        mostRecentPurchase: {
            price: 13500,
            color: "blue"
        }
    },
    {
        name: "Ádám",
        age: 99,
        pets: ['Lajhár', 'Taco', 'Mirci'],
        mostRecentPurchase: {
            price: 50000,
            color: "yellow"
        }
    },
    {
        name: "Károly",
        age: 72,
        pets: ['Kormi', 'Cici', 'Nyunyu'],
        mostRecentPurchase: {
            price: 6200,
            color: "black"
        }
    },
    {
        name: "Lali",
        age: 41,
        pets: ['Bogáncs', 'Illo', 'Pamacs'],
        mostRecentPurchase: {
            price: 16000,
            color: "silver"
        }
    },
    {
        name: "Judit",
        age: 30,
        pets: ['Hair', 'Ankle', 'Knee'],
        mostRecentPurchase: {
            price: 45000,
            color: "pink"
        }
    },
    
]

for(let i = 0; i < data.length; i++){
    if(data[i].age >= 60 && data[i].mostRecentPurchase.price >= 15000){
        console.log(data[i])
    }
}

function addTwoNumbers(num1, num2) {
    let result = num1 + num2

    return result
}

let addTwoNumbersResult = addTwoNumbers(1,2)
console.log("addTwoNumbers: ", addTwoNumbersResult)
console.log("addTwoNumbers: ", addTwoNumbers(1,2))

function concatenateArray(array ) {
    
    /*  
    let result = ""
    array.forEach((string) => {
        console.log(string)
        result +=  string + " "
    }) */

    let result = array.join(" ")
    return result
}

const arrayOfStrings = [ "kismacska", "codecool", "javascript", "exam", "wednesday"]

concatenateArray(arrayOfStrings)
console.log(concatenateArray(arrayOfStrings))


function getOldPeople(arrayOfPeople, minimumAge) {
    let result = []
    arrayOfPeople.map((person) => {
        if(person.age >= minimumAge){
            console.log(person)
            result.push(person.name)
        }
    })
    return result
}
const oldPeople = getOldPeople(data, 50)
console.log(oldPeople)

function getRichPeople (arrayOfPeople, minimumValue) {
   
    result = arrayOfPeople.filter((person) =>person.mostRecentPurchase.price > minimumValue)
    return result
}

console.log(getRichPeople(data, 20000))


/* function goodRecommendation (arrayOfPeople, newOffer) {
    let result = []  
    for(let i = 0; i < arrayOfPeople.length; i++) {
        if(arrayOfPeople[i].mostRecentPurchase.color === newOffer.color && arrayOfPeople[i].mostRecentPurchase.price > newOffer.price){
           result.push(arrayOfPeople[i].name)
        }
    }
    return result
} */
console.log("uccso")
function goodRecommendation (arrayOfPeople, newOffer) {
    
    let result = arrayOfPeople.filter((person) => person.mostRecentPurchase.color === newOffer.color && person.mostRecentPurchase.price > newOffer.price)
    return result
}

const newOffer1 = {
    color: "black",
    price: 8000
}

console.log(goodRecommendation (data, newOffer1))
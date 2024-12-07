// const user = {}
// const name = new Object()

// console.log(user);
// console.log(name);

// let admin = {
//     name: "nuri",
//     age: 16,
// }
// admin.name = "beka"
// admin["age"] = 18;
// admin.student = true

// delete admin.age

// console.log(admin);

// const newArray = new Array()
// console.log(newArray);
// const array = ["nuri", "elita"];
// array[1] = "akylai"

// array.push("tilek")
// array.unshift("nuri")

// array.pop()
// array.shift()

// console.log(array.length);


//  start      check step
// for(let i = 0; i < array. length; i++ ) {
//     console.log(array [i]);
    
// }
// for(let i = 0; i < 2; i++ ) {
//     for(let j = 0; j < 4; j++){
//         console.log("i", i, "j", j);
        
//     }
  
    
// }

// let a = 3;

// a ++ 

// console.log(a);


// let admin = (prompt "кай жактан болосун" ) {
//     name: "nurzada",
//     age: 17,
//     region: "jalal-abaad",
// }

// console.log(admin);


 // 1 тапшырма


const users = [
    { name: "Nurzada", age: 17, region: "jalal-abad" },
    { name: "Bahrom", age: 21, region: "jalal-abad" },
    { name: "Elita", age: 20, region: "Osh" },
    { name: "Tilek", age: 16, region: "Chui" },
    { name: "Bekbolsun", age: 14, region: "Osh" },
    { name: "Yrys", age: 19, region: "osh" },
    { name: "bekmyrza", age: 16, region: "Batken" },
    { name: "Akylai", age: 19, region: "Naryn" },
    { name: "Urmat", age: 18, region: "Yssyk-Kol" },
    { name: "Aitenir", age: 18, region: "Yssyk-Kol" },
    { name: "Bekzat", age: 18, region: "Yssyk-Kol" },
    { name: "Adil", age: 16, region: "Chui" },
];


const userQuery = prompt("что вы хотите у меня спросить");


let filteredUsers;


if (userQuery.endsWith('+')) {
    const age = parseInt(userQuery.slice(0, -1)); 
    filteredUsers = users.filter(user => user.age > age);
} 

else if (userQuery.endsWith('-')) {
    const age = parseInt(userQuery.slice(0, -1)); 
    filteredUsers = users.filter(user => user.age <= age);
} 

else {
    filteredUsers = users.filter(user => user.region.toLowerCase() === userQuery.toLowerCase());
}


if (filteredUsers && filteredUsers.length > 0) {
    console.log(`"${userQuery}":`, filteredUsers);
} else {
    alert(` вы наверное не правильно писали  "${userQuery}".`);
} 




//просто проверяла 


// const weather = prompt("жашын канчада")

// if (weather >=16){
//     alert( "Aichurok bekzat aitenir urmat nuri elita yrys bahrom  ")
// } else if(weather <=16){
//     alert("tilek bekbolsun adil bekmyrza")
// }else{
//     alert("error")
// }






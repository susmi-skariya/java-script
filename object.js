// OBJECT CREATING

// let a={
//     name:"susmi",
//     age:10,
//     arr:[1,3,5,7]
// }

 // console.log(a)
// console.log(a.arr[2]);

// a.age=15      // UPDATION
// console.log(a);

// a.gender="female"  // ADDING NEW VALUE
// console.log(a);


// NESTED OBJECT :

let a={
    name:"susmi",
    age:10,
    arr:[1,3,5,7], 

    address:{
        housename:"abc",
        city:"valanchery",

        guardian:{
            name:"skariya",
            age:50
        }

    }
}

// for(let key in a)  {
//     // console.log(key)  // GIVES KEYS ONLY
//     console.log(key,a[key]);  // GIVES KEY VALUE PAIR
// }

//  console.log(a);
//  console.log(a.address.guardian.name) // TAKING THE SPECIFIC VALUE PAIR




// DESTRUCTRING

let g={name:"susmi",age:10}

// let {name,age}=g
// console.log(name,age)
let {name:n1,age:a1}=g // passing the values as n1 and n2
console.log(n1,a1)

// SPREAD OPERATOR

// let i={
//     ...g,                 // expanding an object
//     place:"valanchery"
// }
// console.log(i)


// let a=["Apple","Bat","Cat","Dog"]
// console.log(a);
// a[1]="Ball" // CHANGE THE FIRST INDEX VALUE TO BALL
// a[3]="cow"
// console.log(a);

// let x=a.length // LENGTH OF ARRAY
// console.log(x);

// for(i=0;i<6;i++){  // PRINT ALL THE ARRAY WITH FOR LOOP
//     console.log(a[i])
// }

// a[3]="fox"
// console.log(a);

// a.pop()  // poping the last element from the array
// console.log(a);

// a.push("A","B","C")  // adding new elements to the last of the array
// console.log(a);



// a.shift()  // SHIFT OR REMOVE THE FIRST ELEMENT
// console.log(a);

// a.unshift('A','B')   // ADD NEW ELEMENTS IN FIRST OF ARRAY
// console.log(a);

// let a=["Apple","Bat","Cat","Dog"] 
// let v=a.slice(0,3)  // EXTRACT THE PORTION OF AN ARRAY WITHOUT AFFECTING THE ORIINAL ARRAY
// console.log(v);
// console.log(a);

// a.splice(1,3,)  // DELETING THE ELEMENTS WHICH ARE STARING FROM INDEX 1 TO INDEX 3 
// a.splice(1,2,'A','B') // DELETING THE ELEMENTS FROM THE ARRAY INDEX 1 AND INDEX 2 AND 'A','B' ELEMENTS INTO THAT PLACE

// console.log(a);

// DESTRUCTURING

let b=[1,2,3,4]
// let [b1,b2,b3,b4]=b
//console.log(b1,b2,b3,b4) // assing to another array

//let [b1,b2,b3]=b
//console.log(b1,b2,b3) // js directly removes the balance element

// let [b1,b2,...b3]=b // makin the balance element in an arra with the before element
// console.log(b1,b2,b3)

let c=["apple","bat",...b] // Expandin the elemnt with the arra b
console.log(c)
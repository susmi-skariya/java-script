

// function student(){        // function passing
//     console.log('hello');
    
// }

// student()  // function calling



// function student(name,age){        // function passing by PARAMETERS
//     console.log(`hello ${name} your age is ${age}`);
    
// }

// student('anu',10)   // function calling by ARGUMENTS
// student('anju',)

// *EXPRESSION* 

// let student1=function(name){
//     console.log(`hello ${name}`);
// }

// student1('susmi')

// *ARROW FUNCTION* //

// let stud= (name,dep) =>{
//     console.log(`Hello my name is ${name} I am from ${dep} department`);

// }
// stud('anu','physics')
// stud('minu',)

// *USING RETURN statement in ARROW FUNCTION* //
// let stud= (name,dep) => console.log(`Hello my name is ${name} I am from ${dep} department`)
// stud('minu',)

// RETURN STATEMENTS : RETURN statements stops the function and gives the return value to the calling function  //
 
// function square(x){
//     return x*x         // PASSING THE VALUE TO THE ABOVE X
//  }
//  let b=square(6)
//  console.log(b)
//  console.log(b+5*3)

// DEFAULT PARAMETER //

// function stud (name,dep='Physics'){  // DEFALUTly giving a department where the dep is not passed 
//    console.log(`Hello my name is ${name} I am from ${dep} department`);

// }
// stud('anu','Physics')
// stud('minu',)

// REST PARAMETER : making it as an ARRAY and collect //
// function num(...a) {
//     return a
// }
// console.log(num(1,2,3,4,5));

// sum of the numbers //
function num(...a) {
   let sum=0
   
   for(i=0;i<a.length;i++){
    sum+=a[i]
}
return sum;

}
console.log(num(1,2,3,4,5));



 
//  console.log(Math.PI)

//  Math.PI = 5
//  console.log(Math.PI)

//  const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")

// //onsole.log(descriptor);


// const chai = {

//   name : 'chai jkali',
//   price:230,
//   isAvailable: true
// }

// console.log( Object.getOwnPropertyDescriptor(chai,"name"));

// Object.defineProperty(chai,'name',{
//   writable: false,
//   enumerable: false
// })


const chai = {
  name: "chai jkali",
  price: 230,
  isAvailable: true,

orderChai: function(){
  console.log("chai nahi bani hai")
}

};

// Step 1: Get the original descriptor
console.log("Original descriptor:", Object.getOwnPropertyDescriptor(chai, "name"));

// Step 2: Modify the descriptor
Object.defineProperty(chai, "name", {
  //writable: false,   // Make 'name' read-only
  enumerable: true, // Hide 'name' from enumeration
});
console.log("Modified descriptor:", Object.getOwnPropertyDescriptor(chai, "name"));

for(let [key, value] of Object.entries(chai)){

  if(typeof value !== 'function'){

    console.log(`${key} : ${value}`);
  }

  
}
    


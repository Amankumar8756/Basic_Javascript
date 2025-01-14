function myName(){
  console.log("A");
  console.log("M");
  console.log("A");
  console.log("M");  console.log("A");
  console.log("M");
}

myName()

function addtwoNum(num1, num2){
  console.log(num1 + num2);

}

addtwoNum(2 ,3)


function addtwo(num1, num2){
  let result = num1 + num2

  return result

}

const result = addtwo( 3,4);
console.log("result",result)


//........................................

// function loginUserMessage(username){
//   return `${username} just logged in thnaku`
// }

// console.log(loginUserMessage("Amankumar"))


function loginUserMessage(username){
  if(username === undefined){
    console.log("please enter your username")
    return
  }

  return `${username} just logged in thnaku`
}

console.log(loginUserMessage("Amankumar"))

// pass objects in to functions

const user ={
  username : "Amankumar",
  price : 199
}


function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

handleObject(user)


// pass array into functions

const myNewarray = [200,440,444,5005]

function getsecondarry(getArray){
  return getArray[2]
}
 console.log(getsecondarry(myNewarray))
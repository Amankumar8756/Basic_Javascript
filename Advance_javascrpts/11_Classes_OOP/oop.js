//object litler

// Concept---	What It Does
// Object Literal ==	Creates simple objects manually.
// Constructor Function ==	Creates objects dynamically with shared structure.
// Prototypes==	Allows shared methods between object instances.
// Classes	== Simplifies object creation and supports inheritance.
// Instances	== Objects created from a class or constructor function using new.

const user = {
  username: "Aman kumkar",
  loginCount: 8,
  signedIn:true,


  getUserDetails: function(){

    //console.log("got user detailse from databawse");

    //console.log(`Username :  ${this.username}`);
    console.log(this)
  }

}

// console.log(user.username);
// console.log(user.loginCount);
// console.log(user.signedIn);


// console.log(user.getUserDetails());

// console.log(this)


//================constructor function

function User(usernmae,loginCount, isLoggedin){
  this.username = usernmae;
  this.loginCount = loginCount;

  this.isLoggedin = isLoggedin


  this.greeting = function(){

    console.log(`Welcome ${this.username}`)
  }

  return this
}

const userOne =  new User("Aman",10 ,true)

const userTwo =  new User("hey Aman",11,false)

console.log(userOne.constructor);
//console.log(userTwo)

// let myName = "Aman     "

// console.log(myName.trueLength)


let myHeros = ["thor", "spiderman"]

let heroPower ={
  thor:"hamer",
  spiderman: "sling",

  getSpiderPower : function(){
    console.log(`spidy powewr is${this.spiderman}`);
  }
}

Object.prototype.aman = function(){
  console.log(`aman is present in all objects`);
}

//heroPower.aman()

//myHeros.aman()

Array.prototype.heyAman = function(){
  console.log(`Aman says hello`)
}

// myHeros.aman()
// myHeros.heyAman()

// heroPower.heyAman()


//------------------------inheritance

const User ={
  name : "chia",
  email: "amana.@gmail.com"

}

const Teacher = {
  makeVideo: false
}

const TeachingSupport ={
  isAvailble:false
}


const TASupport = {

  makeAssignment : 'js assignment',
  fullTime: true,

  __proto__: TeachingSupport
}

Teacher.__proto__ = User


// morden syntax

Object.setPrototypeOf(TASupport,Teacher)


let anothername = "chaiAurCode   "

String.prototype.trueLength = function(){
  console.log(`${this}`);
  // console.log(`${this.name}`);
  console.log(`True length is: ${this.trim().length}`);
}
anothername.trueLength()

"aman".trueLength()
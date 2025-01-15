//ES6

// class User{
//   constructor(uername,email, password){
//     this.uername= uername
//     this.email= email

//     this.password= password
//   }
// encryptPassword(){
//   return `${this.password}ABC`
// }

// chnageUsername(){
//   return `${this.uername.toUpperCase()}`
// }

// }


// const chai = new User("aman","aman@gamil.com","1326")

// console.log(chai.encryptPassword())

// console.log(chai.chnageUsername())


//behind the seen


function User(uername,email, password){
  this.uername= uername;
    this.email= email;

    this.password= password;

}

User.prototype.encryptPassword = function(){
   return `${this.password}ABC`
}

User.prototype.chnageUsername = function(){
  return `${this.uername.toUpperCase()}`
}


const tea = new User("tea", "Aman@gami.com","123")

console.log(tea.encryptPassword());

console.log(tea.chnageUsername());
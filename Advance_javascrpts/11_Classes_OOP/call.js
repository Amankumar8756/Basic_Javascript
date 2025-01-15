function SetUsernamme(username){
  //comlex DB calls
  this.username = username
  console.log("called")
}


function createUser(username,email,password){

  SetUsernamme.call(this,username)

  this.email = email;
  this.password = password
}

const chai = new createUser("chai", "aman@gmail.com","1234")

console.log(chai)
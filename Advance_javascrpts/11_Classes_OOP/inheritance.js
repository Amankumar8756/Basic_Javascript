
class User{
  constructor(username){
    this.username =username
  }

  logMe(){
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User{
    constructor(username,email,password){
      super(username)

      this.email =email
      this.password =password
    }

    addCourse(){
      console.log(`A new course was added by ${this.username}`)
    }
}


const chai =new Teacher("chai", "aman.com","1234")

chai.addCourse()

chai.logMe()
const chaimasala = new User("masalachay de dona ")
chaimasala.logMe()

// console.log(chai === chaimasala)

console.log(chai  instanceof  chaimasala );
class User{
  constructor(username){
    this.username =username
  }

  logMe(){
    console.log(`Username is ${this.username}`);
  }

static  createId(){
    return `123`
  }

}

const aman = new User("Aman")


//console.log(aman.createId())

class Teacher extends User {

  constructor(username,email){
    super(username)

    this.email = email
  }
}

const techno = new  Teacher("techno spark go one" , "amankumar@.com")

techno.logMe()
//console.log(techno.createId())
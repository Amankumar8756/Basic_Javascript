const promiseone =  new Promise(function(resolve, reject){

  // do an async task
  // database calls, cryptography, network


  setTimeout(function(){

    console.log('Async task is complete ');
    resolve();
  },1000)
})

promiseone.then(function(){
  console.log("Promise consumed");
})


// new Promise(function(resolve,reject){

//   setTimeout(function(){
//     console.log("Async ic complete 2");
//     resolve();
//    },1000)


//   }).then(function(){
//   console.log("Async 2 resolved")
// });


// const promiseTwo =  new Promise(function(resolve, reject){

//   setTimeout(function(){
//     resolve({username: "Aman",  email:"amankumar111.gmail.com"})
//   },1000)
// })


// promiseTwo.then(function(user){

//   console.log(user);
// })



//4th
// const promiseFour =  new Promise(function(resolve, reject){

// setTimeout(function(){

//   let error = true
//   if(!error){
//     resolve({username: "Aman kumar",password: "1245"})
//   }else{
//     reject('ERROR: Something went wrong')
//   }
// }, 1000)

// })

// promiseFour.then((user) =>{
//   console.log(user);
//   return user.username
// }).then((username)=>{
//   console.log(username);
// }).catch(function(error){
//   console.log(error);
// }).finally(()=> console.log("The promise is either resolved or rejectded"))


//5th

// const promiseFive = new Promise(function(resolve,reject){
//   setTimeout(function(){

//     let error = true
//     if(!error){
//       resolve({username: "java scrrpt",password: "1245"})
//     }else{
//       reject('ERROR: JS  went wrong')
//     }
//   }, 1000)

// })

// async function consumePromiseFive() {
// try{
//      const response =   await  promiseFive
//     console.log(response) 
//    } catch (error){
//     console.log(error)
// }
  
// }
// consumePromiseFive()


// async function geAllUsers(){
// try{

//   const response = await fetch('https://api.github.com/users/hiteshchoudhary');
//   //console.log(response)
//   const data =  await response.json()
//   console.log(data);
// } catch(error){
//   console.log("E: ", error)
// }
// }
// geAllUsers()

// fetch('https://via.placeholder.com/150')



// .then((response)=>{
//   return response.json()
// })
// .then((data)=>{
//   console.log(data);
// })
// .catch((error)=> console.log(error))


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

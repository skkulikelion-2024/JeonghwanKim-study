'use strict'

//promise is an object for asynchronus operaation

//1.producer
//when new promise is created, the excutor runs automatically
const promise = new Promise((resolve,reject) => {
    console.log("doing something...")
    setTimeout(() => {
        resolve('ellie')
        // reject(new Error('no network'))
    }, 2000);
})

//consumer: then catch finally
promise.then((value)=>{
    console.log(value)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log('finally')
})

//3. promise chaining
const fetchNumber = new Promise((resolve,reject)=>{
    setTimeout(()=>{resolve(1)},1000)
})

fetchNumber
.then(num =>num*2)
.then(num =>num*3)
.then(num =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=> resolve(num-1),1000)
    })
})
.then(num => console.log(num))

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve('🐓'), 1000);
  });
const getEgg = hen =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = egg =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error=>{
    return '빵';
  })
  .then(cook)
  .then(console.log)
  .catch(console.log);
const promise = new Promise(function(resolve, reject){
  resolve('Resolved!')
})

const cows = 9;

const countCows = new Promise(function(resolve, reject){
  if(cows > 10) {
    resolve(`We have ${cows} cows on the farm, enough for the production, Aproved!`)
  } else {
    reject(`We have ${cows} there are not enough for the production, Rejected!`)
  }
});

countCows.then((result) => {
  console.log(result)
}).catch((error) => {
  console.log(error);
})

/* function sum(num1, num2) {
  return num1 + num2;
};

function calc(num1, num2, callback) {
  return callback(num1, num2)
}

console.log(calc(2, 2, sum))

setTimeout(function() {
  console.log('Hola JavaScript!')
}, 5000)

function gretting(name) {
  console.log(`Hola ${name}`);
}

setTimeout(gretting, 2000, 'Armando') */
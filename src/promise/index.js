const promise = new Promise(function (resolve, reject){
  resolve('Resolvido')
});

const cows = 8;
const countCows = new Promise(function(resolve, reject){
  if (cows >= 10){
    resolve(`Hay ${cows} vacas en producción. Hay suficiente leche para la exportación`)
  } else {
    reject(`Hay ${cows} vacas, no es posible cubrir la producción`)
  }
});

countCows.then((result) => {
  console.log(result);
}).catch((error) => {
  console.log(error)
}).finally(() => console.log('Finish'))
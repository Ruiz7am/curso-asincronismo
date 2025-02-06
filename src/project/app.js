function delay (time, message) {
  const sendMessageAfterSpecificTime = new Promise(function(resolve, reject){
    if (!message || message === "") {
      reject(new Error("Debes de escribir un mensaje"));
      return;
    }
    if (!time) {
      reject(new Error("Debes de definir un tiempo"))
    } else if (typeof time !== "number") {
      reject(new Error("El tiempo debe de ser un número"));
    } else if (time < 0) {
      reject(new Error("El tiempo no puede ser negativo"));
    } else {
      setTimeout(() => resolve(message), time);
    }
  });
  sendMessageAfterSpecificTime.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

delay(3000, "Este es mi mensaje");

/* function loadScript(src, callback){
let script = document.createElement('script');
script.src = src;
script.onload = () => callback(script);
document.head.append(script);
};

loadScript('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
  alert(`Cool, the script ${script.src} is loaded`);
  alert(_);
}) */
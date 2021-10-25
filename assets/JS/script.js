// programma che esegua un ciclo da 1 a 100 e a ogni iterazione appenda un elemento html al container con uno stile differente a seconda del valore dell’indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

let el = document.querySelector(".row"); // row inside container

console.log(typeof el);

for (let i = 1; i <= 100; i++) {
  let el2 = document.createElement("div"); // box inside row
  el2.className = "box";
  el2.innerHTML = i; // Box = loop i
  el.append(el2);

  console.log(el2);

  if (!(i % 3) && !(i % 5)) {
    el2.classList.add("multboth");
    el2.innerHTML = "fizzbuzz";
  } else if (!(i % 3)) {
    el2.classList.add("mult3");
    el2.innerHTML = "fizz";
  } else if (!(i % 5)) {
    el2.classList.add("mult5");
    el2.innerHTML = "buzz";
  }
};

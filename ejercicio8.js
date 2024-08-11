const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  stringList.forEach (avengers => {
    Math.max(avengers.lenght)
  })
  return;
}

console.log(findLongestWord(avengers));
// .length mide la longitud de un string o array
// .forEach(avengers) para cada elemento de la cadena del array

/*
Buscar la palabra más larga: Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

Puedes usar este array para probar tu función: */
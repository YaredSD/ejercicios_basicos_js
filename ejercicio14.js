const words = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code'
  ];

  function repeatCounter(list) {
    const total = {};
    list.forEach((word) => {
      if (total [word]) {
        total [word]++;
      } else {
        total [word] = 1;
      } 
      console.log(total);
    });
  }

/*
  function removeDuplicates(list) {
    const once = []
    list.forEach((word) => {
      if (!once.includes(word)) {
        once.push(word);
      }
      return;
    });
    console.log(once)
  }

  console.log(removeDuplicates(duplicates));

Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.

Por ejemplo, que devuelva: code:4, repeat: 1, eat: 1,...

Podéis conformar el formato que queráis para la devolución del resultado siempre y cuando sea claro.

Puedes usar este array para probar tu función:
*/
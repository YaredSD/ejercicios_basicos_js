const mixedElements = [6, 1, 'Marvel', 1, 'hamburguesa', '10', 'Prometeo', 8, 'Hola mundo'];
function averageWord(list) {
  let Total = 0;
  for (let index = 0; index < list.length; index++) {
    if (typeof list[index] === "string") {
      Total = Total + list[index].length;
    } else {
      Total = Total + list[index];
    }
  }
  return Total
}
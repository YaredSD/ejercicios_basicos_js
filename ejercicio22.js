const fruits = ["Strawberry", "Banana", "Orange", "Apple"];

const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

const VeganFoodSchedule = [];
let Fruit = 0;
for (let i = 0; i < foodSchedule.length; i++) {
  const food = foodSchedule[i];
  if (food.isVegan == true) {
    VeganFoodSchedule.push(food);
  } else {
    VeganFoodSchedule.push({name: fruits[Fruit], isVegan: true});
    Fruit++;
  }
}

console.log(VeganFoodSchedule);

/*
Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas.

Recuerda no usar frutas duplicadas.

Finalmente, imprime el array resultante.
*/

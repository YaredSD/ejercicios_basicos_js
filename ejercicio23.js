const movies = [
    { name: "Titan A.E.", durationInMinutes: 130 },
    { name: "Nightmare before Christmas", durationInMinutes: 225 },
    { name: "Inception", durationInMinutes: 165 },
    { name: "The Lord of the Rings", durationInMinutes: 967 },
    { name: "Star Wars: A New Hope", durationInMinutes: 214 },
    { name: "Terminator", durationInMinutes: 140 },
    { name: "Spirited Away", durationInMinutes: 80 },  
    { name: "The Matrix", durationInMinutes: 136 },  
    { name: "Amélie", durationInMinutes: 110 },  
    { name: "Eternal Sunshine of the Spotless Mind", durationInMinutes: 108 },
  ];
  
  const ShortFilms = [];
  const MediumFilms = [];
  const LargeFilms = [];

  for (const film of movies) {
    if (film.durationInMinutes < 100) {
      ShortFilms.push(film)
    } else if (film.durationInMinutes >100 && film.durationInMinutes <200) {
      MediumFilms.push(film);
    } else {
      LargeFilms.push(film)
    }    
  }

console.log("Peliculas pequeñas (<100 min.): " , ShortFilms);
console.log("Películas medianas (100-200 min.): " , MediumFilms);
console.log("películas grandes (>200 min.): " , LargeFilms);


/*
Usa un bucle para crear 3 arrays de películas filtrados por categorías.

Pelicula pequeña -> menos de 100 minutos, película mediana -> más de 100 minutos y menos de 200 y pelicula grande -> más de 200 minutos.

Imprime cada array por consola.
*/
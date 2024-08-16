const names = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function nameFinder(nameList, name) {
    let place = names.indexOf (name);
    if (place !== -1) {
      console.log(true)
      console.log(place)
    } else {
      console.log(false)
    }
    };

  console.log(nameFinder(names, 'Tony'));
  console.log(nameFinder(names, 'Antonio'));
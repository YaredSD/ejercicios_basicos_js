const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];

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
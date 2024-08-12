const avengers = ['Hulk', 'Thor', 'Iron Man', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(stringList) {
  let LongestWord = "";
  stringList.forEach((Word) => {
    if(Word.length > LongestWord.length) {
      LongestWord = Word
    }
  })
  console.log(LongestWord)
  return;
}

findLongestWord(avengers);
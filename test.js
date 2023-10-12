function FirstLetter(str) {
    let words = str.split(' ');
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    return words.join(' ');
  }
  let inputString = "my name is rakesh kumar";
  let capitalizedString = FirstLetter(inputString);
  console.log(capitalizedString);
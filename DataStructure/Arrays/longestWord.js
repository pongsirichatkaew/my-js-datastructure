function LongestWord(sen) {
  var trimmed = sen.replace(/[^\w]/g, ' ');

  const splitSen = trimmed.split(' ');
  let maxItem = splitSen[0];
  splitSen.forEach((element) => {
    if (element.length > maxItem.length) {
      maxItem = element;
    }
  });

  return maxItem;
}

// keep this function call here
console.log(LongestWord(`fun&!! time`));

function reverse(str) {
  if (!str || str.length < 2) {
    return str;
  }
  let newStr = '';
  const totalItems = str.length - 1;
  for (let index = totalItems; index >= 0; index--) {
    newStr = newStr + str[index];
  }
  return newStr;
}

function reverse2(str) {
  return str.split('').reverse().join('');
}

const rev = reverse('a');
console.log('reverse', rev);

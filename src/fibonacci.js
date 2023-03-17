const fibonacci = (n) => {
  const array = [];

  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    let c = a + b;

    a = b;
    b = c;

    array.push(a);
  }

  return array;

}

module.exports = fibonacci;

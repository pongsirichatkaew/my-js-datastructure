const { performance } = require('perf_hooks'); //object destructuring

const nemo = ['nemo'];
const everyone = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', '1', '2'];
const large = new Array(1000000).fill('nemo');
function findNemo(array) {
  let t0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
    //   console.log(`Found Nemo`);
    }
  }
  let t1 = performance.now();
  console.log(`Call to fine Nemo tool ${t1 - t0} ms`);
}

// findNemo(nemo);
findNemo(large);

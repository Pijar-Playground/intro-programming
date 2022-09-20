const carsBrands = ["Honda", "BMW", "Toyota", "Tesla"];

// Instead of writing
console.log(carsBrands[0]);
console.log(carsBrands[1]);
console.log(carsBrands[2]);
console.log(carsBrands[3]);

// 1. FOR LOOP

// You can do this
for (let index = 0; index < carsBrands.length; index++) {
  console.log(index);
  console.log(carsBrands[index]);
}

// 2. WHILE

let index = 0;

while (index < carsBrands.length) {
  console.log(index);
  console.log(carsBrands[index]);

  index++;
}

// 3. DO WHILE

do {
  // code block to be executed
  console.log(index);
  console.log(carsBrands[index]);

  index++;
} while (index < carsBrands.length);
const carBrands = [
  "Honda",
  "BMW",
  "Toyota",
  "Tesla",
  "Daihatsu",
  "Suzuki",
  "Nissan",
  "Ford",
  "Wuling",
  "Suzuki",
  "Jeep",
  "GMC",
  "Shelby"
];

// console.log(carBrands.length);

// Instead of writing
// console.log(carBrands[0]);
// console.log(carBrands[1]);
// console.log(carBrands[2]);
// console.log(carBrands[3]);
// console.log(carBrands[4]);
// console.log(carBrands[5]);
// console.log(carBrands[6]);
// console.log(carBrands[7]);
// console.log(carBrands[8]);
// console.log(carBrands[9]);

// 1. FOR LOOP

// You can do this
// for (let index = 0; index < carBrands.length; index++) {
//   console.log(index);
//   console.log(carBrands[index]);
// }

// 2. WHILE

// let umur = 21;
// let isAlive = true;

// while (isAlive) {
//   // console.log(index);
//   console.log("umur saat ini " + umur);

//   // if (umur == 100) {
//   //   isAlive = false;
//   // }

//   umur++;
// }

// 3. DO WHILE
let index = 1;

do {
  // code block to be executed
  console.log(index);
  console.log(carBrands[index]);

  index++;
} while (index < carBrands.length);

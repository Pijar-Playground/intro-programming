// var anotherStuff = "lorem";

//

// ES 5 DECLARATION
// function sayHello(firstName, lastName = "") {
//   console.log(`Hello ${firstName} ${lastName}`);
// }

// sayHello("Aan aja");

// 1. keyword functionnya
// 2. nama functionnya
// 3. tambahkan ()
// 4. Tambahkan kurung kurawal {}

// AFTER FUNCTION

// const pesanan = "teh";
// const jumlahPesanan = 3;

// function caraBikinKopi() {
//   console.log("1. Ambil satu sached kopi");
//   console.log("2. Panaskan air sampai mendidih");
//   console.log("3. Tuangkan kopi kedalam cangkir");
//   console.log("4. Tuangkan air kedalam cangkir");
//   console.log("5. Lalu aduk dengan merata");
//   console.log("\n");
// }

// function caraBikinTeh() {
//   console.log("1. Ambil satu sached teh");
//   console.log("2. Panaskan air sampai mendidih");
//   console.log("3. Tuangkan teh kedalam cangkir");
//   console.log("4. Tuangkan air kedalam cangkir");
//   console.log("5. Lalu aduk dengan merata");
//   console.log("\n");
// }

// if (pesanan === "kopi") {
//   for (let index = 0; index < jumlahPesanan; index++) {
//     caraBikinKopi();
//   }
// } else if (pesanan === "teh") {
//   for (let index = 0; index < jumlahPesanan; index++) {
//     caraBikinTeh();
//   }
// }

// BEFORE FUNCTION

// console.log("1. Ambil satu sached kopi");
// console.log("2. Panaskan air sampai mendidih");
// console.log("3. Tuangkan kopi kedalam cangkir");
// console.log("4. Tuangkan air kedalam cangkir");
// console.log("5. Lalu aduk dengan merata");

// console.log("\n");

// console.log("1. Ambil satu sached kopi");
// console.log("2. Panaskan air sampai mendidih");
// console.log("3. Tuangkan kopi kedalam cangkir");
// console.log("4. Tuangkan air kedalam cangkir");
// console.log("5. Lalu aduk dengan merata");

// console.log("\n");

// console.log("1. Ambil satu sached kopi");
// console.log("2. Panaskan air sampai mendidih");
// console.log("3. Tuangkan kopi kedalam cangkir");
// console.log("4. Tuangkan air kedalam cangkir");
// console.log("5. Lalu aduk dengan merata");

// ES 5 DECLARATION
// function sayHello(nama, panggilan) {
//   // block function
//   console.log(`Hai ${panggilan} ${nama}`);
//   console.log("selamat pagi");
// }

// const fullName = "Bilkis";
// const panggilan = "Kak";

// sayHello(fullName, panggilan);

// sayHello(); // execute / eksekusi function

// ES 5 DECLARATION
function sayHello(list) {

  return "Hallo"


  console.log('Watch me watch me')
  // for (let index = 0; index < list.length; index++) {
  //   // console.log(`Hello ${list[index]}`);
  //   // document.writeln(`Hello ${list[index]}`);
  // }
}

console.log(sayHello())

// looping(5);

// ES 5 Expression
const sayHello2 = function (nama, panggilan) {
  // block function
  console.log("hai");
  console.log("selamat pagi");
};

// ES 6 ARROW FUNCTION
const sayHello3 = (nama, panggilan) => {
  console.log("hai");
  console.log("selamat pagi");
};

// sayHello()

// modulus = sisa hasil bagi

// self invoking
// (function (firstName, lastName = "Ismail") {
//   console.log(`Hello ${firstName} ${lastName}`);
// })("Bilkis");

// ((firstName, lastName = "Ismail") => {
//   console.log(`Hello ${firstName} ${lastName}`);
// })("Adi", "Nanang");

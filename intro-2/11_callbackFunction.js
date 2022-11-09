// hanya menampilkan hasilnya
// function myDisplayer(result, angkaPertama, angkaKedua) {
//   console.log(`Hasil penjumlahan ${angkaPertama} + ${angkaKedua} = ${result}`);
// }

// // hanya menghitung saja
// function summary(firstNumber, secondNumber) {
//   let sum = firstNumber + secondNumber;

//   return sum;
// }

// function myCalculator(num1, num2, summaryFunc, myDisplayerFunc) {
//   const result = summaryFunc(num1, num2); // ini untuk menghitungnya
//   myDisplayerFunc(result, num1, num2); // ini untuk menampilkannya
// }

// myCalculator(4, 6, summary, myDisplayer);

const fullname = "Nazmi Ainun";

function showFirstName(firstNameFunc) {
  let firstName = firstNameFunc;

  console.log(`Hello ${firstName}`);
}

// function getFirstName() {
//   return fullname.split(" ")[0]; // ["Bilkis", "Ismail"]
// }

// function getLastName() {
//   let splitName = fullname.split(" ");
//   return splitName[splitName.length - 1];
// }

// Execute function
showFirstName();

// SOLID

// PROMISE & ASYNCRONUS

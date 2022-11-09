const nama = "Ean";
const role = "Technical Trainer";
const corporate = "Pijar Camp";
const age = 25;

const greetings = `
Hai nama saya ${nama}, pekerjaan saya sebagai ${role} di ${corporate},
saya sudah bekerja selama 3 tahun,
dan tepat agustus nanti genap menjadi 4 tahun
biasa rekan kerja saya memanggil saya ${age > 30 ? "pak" : "mas"} ${nama}
`; // (``) backtick

const greetings2 =
  "Hai nama saya " +
  nama +
  ", pekerjaan saya sebagai " +
  role +
  " di " +
  corporate +
  "\nsaya sudah bekerja selama 3 tahun, \ndan tepat agustus nanti genap menjadi 4 tahun\nbiasa rekan kerja saya memanggil saya" +
  (age > 30 ? " pak " : " mas ") +
  nama;

console.log(greetings2);
// console.log(`Nama : ${nama}`);

// const bilkisIsmail = {
//   hobbies: ["nyanyi", "mandi", "makan", "tidur", "gamming"],
// };

// hobi 1 adalah nyanyi
// hobi 2 adalah mandi
// hobi 3 adalah makan
// hobi 4 adalah tidur
// hobi 5 adalah gamming

// menampilkan angka ganjil sampai batas akhir yang di masukan pada parameter 10

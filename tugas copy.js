// TUGAS 1
console.log(`
// ----------------------------
// TUGAS 1
// ----------------------------
`);

let namaLengkap = "Kubil Ismail";
let email = "bilkisismail07@gmail.com";
let phoneNumber = "089630080545";
let umur = 20;
const tempatTglLahir = "Tangerang, 10 April 2002";
let alamat = "Komplek Pondok Arum, Karawaci";
let kota = "Tangerang";
let provinsi = "Banten";
let kodePos = "20072";
let programmingExperience = ["Javascript", "HTML", "CSS"];
let riwayatPendidikan = [
  {
    nama: "MTS Daarul Irfand",
    tingkat: "SMP",
    tahunMulai: 2014,
    tahunLulus: 2017,
    isRecomennded: false,
    lokasi: "Tangerang",
    pengajarFavorite: ["Pak Sobari", "Bu Marwiyah"],
    materiFavorite: [
      {
        nama: "Pendidikan Agama Islam",
        date: 2016,
        pengajar: "Pak Sobari",
        alasan: "Banyak jam kosnya :D",
        isHard: false,
      },
    ],
  },
  {
    nama: "SMKN 4 Tangerang",
    tingkat: "SMA",
    tahunMulai: 2017,
    tahunLulus: 2020,
    isRecomennded: false,
    lokasi: "Tangerang",
    pengajarFavorite: ["Bu Fitri"],
    materiFavorite: [
      {
        nama: "Simulasi Digital",
        date: 2016,
        pengajar: "Bu Fitri",
        alasan: "Banyak jam kosnya :D",
        isHard: false,
      },
    ],
  },
];

const golonganDarah = "O";
let hobi = ["Sepeda", "Makan", "Tidur", "Bangun", "Tidur Lagi", "Nyanyi"];
let makananFavorite = [
  { nama: "Karedok", asal: "Jawa Barat/Banten" },
  { nama: "Lotek", asal: "Jawa Barat/Banten" },
];

// TUGAS 2
console.log(`
// ----------------------------
// TUGAS 2
// ----------------------------
`);

let bilkisIsmail = {
  namaLengkap,
  email,
  phoneNumber,
  umur,
  tempatTglLahir,
  alamat,
  kota,
  provinsi,
  kodePos,
  programmingExperience,
  riwayatPendidikan,
  golonganDarah,
  hobi,
  makananFavorite,
  printNama: function () {
    console.log(`Nama Lengkap : ${this.namaLengkap}`);
  },
  printEmail: function () {
    console.log(`Alamat Email : ${this.email}`);
  },
  printPhoneNumber: function () {
    console.log(`Nomor Handphone : ${this.phoneNumber}`);
  },
};

// TUGAS 3
console.log(`
// ----------------------------
// TUGAS 3
// ----------------------------
`);

console.log(`Nama Lengkap : ${bilkisIsmail.namaLengkap}`);
console.log(`Nomor Handphone : ${bilkisIsmail.phoneNumber}`);
console.log(`Programming Experience : ${bilkisIsmail.programmingExperience}`);
console.log(
  `Nama dan asal makanan favorit index pertama : ${bilkisIsmail.makananFavorite[0].nama}, ${bilkisIsmail.makananFavorite[0].asal}`
);
console.log(
  `Hobi index terakhir : ${bilkisIsmail.hobi[bilkisIsmail.hobi.length - 1]}`
);
console.log(
  `Nama materi dan pengajar materi favorit pertama dari sekolah terakhir/paling baru. : ${bilkisIsmail.riwayatPendidikan[0].materiFavorite[0].nama}, ${bilkisIsmail.riwayatPendidikan[0].materiFavorite[0].pengajar}`
);

// TUGAS 4
console.log(`
// ----------------------------
// TUGAS 4
// ----------------------------
`);

function introduceMySelf(bio) {
  console.log(`Nama Lengkap : ${bio.namaLengkap}`);
  console.log(
    `Pernah menempuh pendidikan di ${bio.riwayatPendidikan.length} tempat`
  );
}

// execute
introduceMySelf(bilkisIsmail);

// TUGAS 5
console.log(`
// ----------------------------
// TUGAS 5
// ----------------------------
`);

const generateLooping = function (num) {
  for (let index = 1; index <= num; index++) {
    console.log(`Looping ke ${index}`);
  }
};

generateLooping(10);

// TUGAS 6
console.log(`
// ----------------------------
// TUGAS 6
// ----------------------------
`);

const printHobbies = function (listHobi) {
  for (let index = 0; index < listHobi.length; index++) {
    let position = index + 1;
    console.log(`Hobi ke ${position} adalah ${listHobi[index]}`);
  }
};

printHobbies(bilkisIsmail.hobi);

// TUGAS 7
console.log(`
// ----------------------------
// TUGAS 7
// ----------------------------
`);

const checkPassingGrade = (grade) => {
  if (grade >= 75) {
    return "Selamat, anda lolos!";
  } else {
    return "Anda tidak lolos!";
  }
};

const gradeCheckMessage = checkPassingGrade(80);
console.log(gradeCheckMessage);

// TUGAS 8
console.log(`
// ----------------------------
// TUGAS 8
// ----------------------------
`);

const printOddNumber = (num) => {
  for (let index = 1; index <= num; index++) {
    if (index % 2 == 1) {
      console.log(`ganjil : ${index}`);
    }
  }
};

printOddNumber(15);

// TUGAS 9
console.log(`
// ----------------------------
// TUGAS 9
// ----------------------------
`);

// kalo bisa di bagi 3 tampilin camp = 3,6,9,12,15
// kalo bisa di bagi 5 tampilin pijar = 5,10,15
// kalo bisa di bagi 3 dan 5 tampilin pijar camp = 15

const printPijarCamp = (num) => {
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("Pijar Camp");
    } else if (index % 3 === 0) {
      console.log("Camp");
    } else if (index % 5 === 0) {
      console.log("Pijar");
    } else {
      console.log(index);
    }
  }
};

printPijarCamp(15);

// TUGAS 10
console.log(`
// ----------------------------
// TUGAS 10
// ----------------------------
`);

const combineArray = (first, second) => [...first, ...second];
const combineObject = (first, second) => ({ ...first, ...second });

const newArray = combineArray([1, 2, 3], [4, 5, 6]);
const newObject = combineObject(
  {
    fullname: "Bilkis Ismail",
    age: 20,
  },
  {
    role: "Trainer",
    company: "pijar",
  }
);

console.log(`combineArray : ${newArray}`);
console.log(`combineObject : ${Object.keys(newObject)}`);

// TUGAS 11
console.log(`
// ----------------------------
// TUGAS 11
// ----------------------------
`);

let storedObjects = {};

const addNewObject = (key, value) => {
  storedObjects[key] = value;
};

addNewObject("fullname", "Bilkis");
addNewObject("age", 20);
addNewObject("isMaried", false);

console.log(storedObjects);

// TUGAS 12
console.log(`
// ----------------------------
// TUGAS 12
// ----------------------------
`);

bilkisIsmail.printNama();
bilkisIsmail.printEmail();
bilkisIsmail.printPhoneNumber();

// TUGAS 13
console.log(`
// ----------------------------
// TUGAS 13
// ----------------------------
`);

// Get first Name
const returnFirstName = (fullname) => fullname.split(" ")[0];

// Get time
const returnDay = (clock) => {
  if (clock >= 5 && clock < 12) {
    return "Pagi";
  } else if (clock >= 12 && clock < 15) {
    return "Siang";
  } else if (clock >= 15 && clock < 18) {
    return "Sore";
  } else if ((clock >= 18 && clock < 24) || (clock >= 0 && clock < 5)) {
    return "Malam";
  }
};

const greeting = (showFirstNameFunc, returnDayFunc, fullname, clock) => {
  const firstName = showFirstNameFunc(fullname);
  const currentClock = returnDayFunc(clock);

  console.log(`Selamat ${currentClock}, ${firstName}!`);
};

greeting(returnFirstName, returnDay, "Nadila Drew", 6);

// TUGAS 14
console.log(`
// ----------------------------
// TUGAS 14
// ----------------------------
`);

// baris pertama ulang sebanyak limit parameter = 3

const printSquare = (num) => {
  // for pertama untuk looping barisnya
  for (let index = 0; index < num; index++) {
    let star = "";

    // for kedua itu untuk mengisi baris bintangnya
    for (let nested = 0; nested < num; nested++) {
      star += "* ";
    }
    star += "\n";
    console.log(star);
  }
};

printSquare(5);

// TUGAS 15
console.log(`
// ----------------------------
// TUGAS 15
// ----------------------------
`);

const printTriangleWithNumber = (num) => {
  if (typeof num === "number") {
    // for pertama untuk looping barisnya
    for (let index = num; index > 0; index--) {
      let star = "";

      // for kedua itu untuk mengisi baris bintangnya
      for (let nested = 1; nested <= index; nested++) {
        let currentList = `${nested} `;
        star += currentList;
      }
      star += "\n";
      console.log(star);
    }
  } else {
    console.log("Parameter harus angka!");
  }
};

printTriangleWithNumber(7);

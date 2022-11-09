const fetch = require("node-fetch");

// NOMOR 1 —--------------------------
console.log("// NOMOR 1 —--------------------------");

let namaLengkap = "Bilkis Ismail";
let email = "bilkis@Gmail.com";
let noHandphone = 62896321123322;
let umur = 20;
const ttl = "Tangerang, 7 apri 2002";
let alamat = "Pondok Arum, Nambo Jaya";
let kota = "Kota Tangerang";
let provinsi = "Banten";
let kodePos = 15112;
let programmingExp = ["PHP", "Javascript", "HTML"];
let riwayatPendidikan = [
  {
    nama: "MI Al Husna",
    tingkat: "SD",
    tahunMulai: 2008,
    tahunBerakhir: 2014,
    jurusun: null,
    isRecomended: false,
    lokasi: "Kota Tangerang",
    pengajarFavorite: ["Pak Sobari", "Bu Marwiyah"],
    materiFavorite: [
      {
        nama: "SKI",
        date: 2013,
        pengajar: "Pak Sobari",
        alasan: ["Karna gurunya kiler", "Karna sering jamkos"],
        isHard: false,
      },
    ],
  },
];
const golDarah = "o";
let hobi = ["Touring", "Motoran", "Badminton", "Anime"];
let makananFavorite = [
  {
    name: "Karedok",
    asal: "Jawa Barat",
  },
  {
    name: "Gado Gado",
    asal: "DKI Jakarta",
  },
  {
    name: "Lotek",
    asal: "Jawa Barat",
  },
];

// NOMOR 2 —--------------------------
console.log("// NOMOR 2 —--------------------------");

let bilkisIsmail = {
  namaLengkap,
  email,
  noHandphone,
  umur,
  ttl,
  alamat,
  kota,
  provinsi,
  kodePos,
  programmingExp,
  riwayatPendidikan,
  golDarah,
  hobi,
  makananFavorite,
};

// NOMOR 3 —--------------------------
console.log("// NOMOR 3 —--------------------------");

const makananFavoritePertama = bilkisIsmail.makananFavorite[0];
const materiFavoritePertama =
  bilkisIsmail.riwayatPendidikan[0].materiFavorite[0];

console.log(`
Nama Lengkap : ${bilkisIsmail.namaLengkap}
Nomor handphone : ${bilkisIsmail.noHandphone}
Programming Experience : ${bilkisIsmail.programmingExp}
Nama dan asal makanan favorit index pertama : ${makananFavoritePertama.name}, ${makananFavoritePertama.asal}
Hobi index terakhir : ${bilkisIsmail.hobi[2]}
Nama materi dan pengajar materi favorit pertama : ${materiFavoritePertama.nama}, ${materiFavoritePertama.pengajar}
`);

// NOMOR 4 —--------------------------
console.log("// NOMOR 4 —--------------------------");

function showBiodata(bio) {
  console.log(`Nama Lengkap : ${bio.namaLengkap}`);
  console.log(
    `Pernah menempuh pendidikan di ${bio.riwayatPendidikan.length} tempat`
  );
}

showBiodata(bilkisIsmail);

// NOMOR 5 —--------------------------
console.log("// NOMOR 5 —--------------------------");

const looping = function (num) {
  for (let index = 1; index <= num; index++) {
    console.log(`Looping ke ${index}`);
  }
};

looping(2);

// NOMOR 6 —--------------------------
console.log("// NOMOR 6 —--------------------------");

const printHobbies = function (listHobies) {
  let urutan = 1;
  for (let index = 0; index < listHobies.length; index++) {
    console.log(`Hobi ke ${urutan} adalah ${listHobies[index]}`);
    urutan++;
  }
};

// execute
printHobbies(hobi);

// NOMOR 7 —--------------------------
console.log("// NOMOR 7 —--------------------------");

const checkPassingGrade = (grade) => {
  if (grade > 75) {
    return "Selamat, anda lolos!";
  } else {
    return "Anda tidak lolos!";
  }
};

const gradeCheckMessage = checkPassingGrade(80); // "Anda tidak lolos!"
console.log(gradeCheckMessage);

// NOMOR 8 —--------------------------
console.log("// NOMOR 8 —--------------------------");

const printOddNumber = (num) => {
  // modulus => sisa hasil bagi
  for (let index = 1; index <= num; index++) {
    if (index % 2 !== 0) {
      console.log(index);
    }
  }
};

printOddNumber(8); // 1 3 5

// NOMOR 9 —--------------------------
console.log("// NOMOR 9 —--------------------------");

const printPijarCamp = (num) => {
  // || (or) = yang penting salah satu sudah memenuhi
  // && (and) = harus semuanya memenuhi

  // modulus => sisa hasil bagi
  for (let index = 1; index <= num; index++) {
    if (index % 3 === 0 && index % 5 === 0) {
      console.log("Pijar Camp");
    } else if (index % 3 === 0) {
      console.log("Pijar");
    } else if (index % 5 === 0) {
      console.log("Camp");
    } else {
      console.log(index);
    }
  }
};

printPijarCamp(15); // 1 3 5

// NOMOR 10 —--------------------------
console.log("// NOMOR 10 —--------------------------");

const combineArray = (array1, array2) => {
  return [...array1, ...array2];
};

const combineObjects = (object1, object2) => {
  return { ...object1, ...object2 };
};

const combinedArray = combineArray([1, 2, 3], [4, 5, 6]);
const combinedObjects = combineObjects(
  {
    name: "Bilkis",
    umur: 20,
  },
  {
    job: "Trainer",
    company: "Pijar",
  }
);

console.log(combinedArray);
console.log(combinedObjects);

// NOMOR 11 —--------------------------
console.log("// NOMOR 11 —--------------------------");

let storeData = {};

const storedObjects = (key, value) => {
  storeData[key] = value;
};

storedObjects("name", "Bilkis Ismail");
storedObjects("umur", 20);
storedObjects("job", "Trainer");

console.log(storeData);

// NOMOR 12 —--------------------------
console.log("// NOMOR 12 —--------------------------");

bilkisIsmail = {
  ...bilkisIsmail,
  printNama: function () {
    console.log(this.namaLengkap);
  },
  printEmail: function () {
    console.log(this.email);
  },
  printPhoneNumber: function () {
    console.log(this.noHandphone);
  },
};

bilkisIsmail.printNama();
bilkisIsmail.printEmail();
bilkisIsmail.printPhoneNumber();

// NOMOR 13 —--------------------------
console.log("// NOMOR 13 —--------------------------");

const returnFirstName = (fullname) => fullname.split(" ")[0];

const returnDay = (clock) => {
  if (clock >= 5 && clock <= 12) {
    return "Pagi";
  } else if (clock >= 13 && clock <= 15) {
    return "Siang";
  } else if (clock >= 16 && clock <= 18) {
    return "Sore";
  } else if ((clock >= 19 && clock <= 24) || (clock >= 0 && clock <= 4)) {
    return "Malam";
  }
};

const greeting = (getFirstNameFunc, getDayFunc, fullname, clock) => {
  console.log(`Selamat ${getDayFunc(clock)}, ${getFirstNameFunc(fullname)}`);
};

greeting(returnFirstName, returnDay, "Bilkis Ismail", 13);

// NOMOR 14 —--------------------------
console.log("// NOMOR 14 —--------------------------");

const printSquare = (num) => {
  let star = "";

  for (let row = 0; row < num; row++) {
    for (let column = 0; column < num; column++) {
      // Menambahkan bintang
      star += "*   ";
    }
    // menambahkan baris
    star += "\n\n";
  }
  console.log(star);
};

printSquare(5);

// NOMOR 15 —--------------------------
console.log("// NOMOR 15 —--------------------------");

const printTriangleWithNumber = (num) => {
  if (typeof num !== "number") {
    return console.log("Parameter harus angka!");
  }

  let star = "";

  for (let row = num; row > 0; row--) {
    for (let column = 1; column <= row; column++) {
      // Menambahkan bintang
      star += `${column}   `;
    }
    // menambahkan baris
    star += "\n\n";
  }
  console.log(star);
};

printTriangleWithNumber("angka satu");

// NOMOR 16 —--------------------------
console.log("// NOMOR 16 —--------------------------");

const requestFromApi = fetch("https://jsonplaceholder.typicode.com/todos");

requestFromApi
  .then((res) => res.json())
  .then((res) => {
    res
      .map((item) =>
        console.log(
          `Todo ID ke ${item?.id} ${
            item?.completed ? "Berhasil" : "Belum"
          } di kerjakan`
        )
      );

    // console.log(res.filter((res) => res.completed)?.length);
  })
  .catch((err) => console.log("Get api gagal"));

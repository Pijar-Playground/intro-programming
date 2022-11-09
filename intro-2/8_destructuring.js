const biodata = {
  firstName: "Bilkis",
  lastName: "Ismail",
  role: "Trainer",
  "nama-lengkap": "BILKIS ISMAIL",
  // favoriteBand: ["tulus", "sol7", "noah", "GNR"],
  detail: {
    hoby: "touring",
    artistFavorite: "GNR",
    favoritePlace: "Bandung",
  },
};

// alias

const {
  firstName: namaDepan,
  lastName: namaBelakang,
  role: pekerjaan,
  "nama-lengkap": namaLengkap,
  detail: { hoby: hobi },
} = biodata;

// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(pekerjaan);
// console.log(namaLengkap);

// const {
//   firstName: namaDepan,
//   lastName: namaBelakang,
//   role: pekerjaan,
//   favoriteBand: [, , , theBestBand],
//   detail: { hoby: hobiTerfavorite, artistFavorite },
//   "nama-lengkap": namaLengkap,
// } = biodata;

// console.log(namaDepan);
// console.log(namaBelakang);
// console.log(pekerjaan);
// console.log(theBestBand);
// console.log(hobiTerfavorite);
// console.log(artistFavorite);
// console.log(namaLengkap);

// const {
//   detail: { favoritePlace },
//   favoriteBand: [, , , thirthBandFavorite],
// } = biodata;

// // CARA PERTAMA
// const { firstName, lastName, role } = biodata;

// // CARA KE DUA
// biodata.firstName;
// biodata.lastName;
// biodata.role;

// const {
//   role,
//   firstName: namaDepan,
//   lastName,
//   "nama-lengkap": namaLengkap,
// } = biodata;

// const {
//   firstName,
//   lastName,
//   role: jabatan,
//   "nama-lengkap": namaLengkap,
// } = biodata;

// console.log(firstName);
// console.log(lastName);
// console.log(jabatan);
// console.log(namaLengkap);

const trainer = ["Ean", "risano", "setiawan", "tama", "Alam"];
const [, , , trainerYangDipilih] = trainer;

console.log(trainerYangDipilih);
// console.log(trainerKedua);

// const [, trainerKeDua, , trainerKeempat] = trainer;

// console.log(trainerKeDua);
// console.log(trainerKeempat);

// console.log(lastTrainer);

// const [, , , trainer4] = trainer;

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const [angka1, angka2, ...others] = numbers;

// // const findNumber = numbers.find((res) => res === 9);
// const findNumberIndex = trainer.findIndex((res) => res === "setiawan");

// console.log(findNumberIndex);
// console.log(trainer[findNumberIndex]);

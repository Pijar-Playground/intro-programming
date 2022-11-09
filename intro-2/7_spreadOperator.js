// 1
let rgb = ["red", "green", "blue"];
let cmyk = ["cyan", "magenta", "yellow", "key", ...rgb];

// 2
// let numbers_1 = [1, 2, 3];
// let numbers_2 = [4, 5, 6];
// let numbers_3 = [...numbers_1, ...numbers_2];

// const angkaFavorite = [1, 2, 3];

// angkaFavorite = [5, 4, 6];

// const copiedBiodata = { ...biodata };
// biodata.firstName = "Nadila";

// const copiedBiodata2 = { ...copiedBiodata };
// copiedBiodata2.firstName = "Nanang";
// copiedBiodata2.lastName = "Komarudin";

// console.log(biodata);
// console.log(copiedBiodata);
// console.log(copiedBiodata2);

const biodata = {
  firstName: "Bilkis",
  lastName: "Ismail",
};

const jobDesc = {
  firstName: "Ahmad",
  role: "Talent",
  corporate: "Pijar Camp",
};

const address = {
  city: "Tangerang",
  zipCode: "21002",
};

const profile = { ...param1, ...param2, ...address };

let data = {
  nama: "Pratama",
  umur: 25,
};

// storedObjects("nama", "Pratama");
// storedObjects("umur", 25);

console.log(data);

console.log(profile);

// let storedObjects = {};

// functionNambahObject("fullname", "Bilkis ismail")

// const jobDescCopied = { ...jobDesc };

// jobDescCopied.firstName = "Test";

// console.log(jobDesc);
// console.log(jobDescCopied);

// console.log(biodata);
// console.log(copiedBiodata);
// console.log(copiedBiodata2);

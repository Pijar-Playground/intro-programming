// 1. IF - ELSE
const nilai = 70;

// IF (JIKA)
// ELSE IF (SELAIN ITU)
// ELSE (JIKA DIATAS SALAH SEMUA)

if (nilai > 90) {
  console.log("NILAI A");
} else if (nilai > 80) {
  console.log("NILAI B");
} else {
  console.log("NILAI C");
}

// 2. SWITCH CASE
switch (nilai) {
  case "SENIN":
    console.log("MASUK RUANG A");
    break;
  case "SELASA":
    console.log("MASUK RUANG B");
    break; // JUMP OVER
  case "RABU":
    console.log("MASUK RUANG B");
    break;
  case "KAMIS":
    console.log("MASUK RUANG B");
    break;
  default:
    console.log("MASUK RUANG C");
}

// 3. Ternary Operators / Short-Circuit Logic
console.log(nilai > 90 ? "NILAI A" : "NILAI B");
console.log(nilai > 90 ? "NILAI A" : nilai > 80 ? "NILAI B" : "NILAI C");

// 1. Hoisting is JavaScript's default behavior of moving declarations to the top.
greetings = "Hai Hallo";
var greetings;

// 2. Global Scope

var suv = "Mitshubishi Pajero"; // Global Scope
let mpv = "Mitshubishi Xpander"; // Global Scope
const hatchback = "Honda City"; // Global Scope

(function showAllCars() {
  console.log(suv);
})();


// 3. Block Scope
{
  var firstName = "Muhammad";
  let middleName = "Risano";
  const lastName = "Akbar";
}

// 4. Function Scope

function showAllCars() {
  var suv = "Mitshubishi Pajero"; // Function Scope
  let mpv = "Mitshubishi Xpander"; // Function Scope
  const hatchback = "Honda City"; // Function Scope
}


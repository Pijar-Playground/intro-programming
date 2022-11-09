// const firstName = "Bilkis";

const biodata = {
  firstName: "ridho", // Property
  lastName: "mujizat", // Property
  age: 19,
  getFirstName: function () {
    // console.log("Hallo aku adalah sebuah method");
    // console.log(this.firstName); // tampilkan parent

    return this.firstName;
  },
  getFullName: function () {
    this.firstName = "Anne";

    return `${this.firstName} ${this.lastName}`;
  },
  getLastName: () => {
    console.log("Hallo aku adalah sebuah method");
    console.log(this);
  },
  // getFirstName: function () {
  //   console.log(this.firstName);
  // },
  // getLastName: function () {
  //   console.log(this.lastName);
  // },
  // getFulltName: function () {
  //   console.log(
  //     `${this.age > 20 ? "Mas" : "Kak"} ${this.firstName} ${this.lastName}`
  //   );
  // },
};

const data = [5, 4, 1, 2, 3]; // 1,2,3,4,5

// biodata.getFullName();

// console.log(biodata)

// console.log(biodata.getFullName());

// const getFullName = biodata.getFullName();

// console.log(getFullName);
// biodata.getLastName();

// biodata.getFirstName();
// biodata.getLastName();
// biodata.getFulltName();

// printTriangleWithNumber("3");

// console.log(`ini looping ke-${index}`)
// biodata.sayHello();

// biodata.getFullName(); // Bilkis Ismail

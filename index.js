let person = {
    name: "erfan",
    address: "bogor",
    age: 28,
    hobbies: ["Gaming", "Traveling"],
    pets: ["bobom", "popom"],
    occupation: "drug dealer"
};

let people = [
    {
        name: "erfan",
        address: "bogor",
        age: 28,
        hobbies: ["Gaming", "Traveling"],
        pets: ["bobom", "popom"],
        occupation: "drug dealer"
    },
    {
        name: "adam",
        address: "bekasi",
        age: 35,
        hobbies: ["Reading", "Eating"],
        pets: [],
        occupation: "pns"
    },
    {
        name: "angga",
        address: "Tangerang",
        age: 21,
        hobbies: ["Writing", "Swimming"],
        pets: ["Dul"],
        occupation: "translator"
    }
];

// local storage

localStorage.setItem("person", JSON.stringify(person)); // set local storage
localStorage.setItem("isLogin", true);

let getPersonFromLocalStorage = JSON.parse(localStorage.getItem("person")); // get local storage
let nameLocalStorage = localStorage.getItem("name");

console.log(getPersonFromLocalStorage, "Local Storage");
console.log(nameLocalStorage, "name");

// localStorage.removeItem("name"); // delete local storage by key name
// localStorage.clear(); // delete all local storage

// session storage

sessionStorage.setItem("person", JSON.stringify(person)); // set session storage

console.log(getPersonFromLocalStorage.name, "get Person Name");

// interaction on browser

let isSignup = confirm("Do you want to signup ?");

if (isSignup === true) {
    let name = prompt("Write your name here");
    let age = prompt("Inset your age here");

    if (name === getPersonFromLocalStorage.name) {
        alert(`Hello ${name}`);
    } else {
        alert(`You are not ${name}`);
    }
}

// destructuring, rest, spread operator

// spread untuk mengeluarkan semua nilai yang ada
// destructuring fungsinya untuk mempersingkat pemanggilan data sebuah object
// rest fungsinya untuk menampilkan sisa data dari destructuring

let { name, address, ...sisa } = person;

console.log(...people);

people.forEach(({ name }) => {
    console.log(name, "name from people");
});

console.log(sisa, "rest");
console.log(name, "name");
console.log(address, "address");
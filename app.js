const person = {
  name: "Grace Hopper",
  age: 85,
  computerScientist: true,
  education: ["vassar college", "Yale College"],
};

console.log(person);
console.log(person.name);
console.log(person.age);
console.log(person.education);
console.log(person.education[0]);
console.log(person.education[1]);

const person2 = {
  name: "Brad Pitt",
  age: 55,
  actor: true,
  education: ["City College Norwich", "School of Acting"],
  walk: function () {
    console.log("I am Walking");
  },
};

person2.walk();

const person3 = {
  name: "Ben White",
  age: 25,
  footballer: true,
  education: ["Costessey High Scool", "Arsenal Football Academy"],
  running: function () {
    console.log(`${this.name} is running`);
  },
};

person3.running();

const person4 = {
  name: "Ian Wright",
  age: 60,
  footballer: false,
  education: ["Costessey High Scool", "Arsenal Football Academy"],
  running: function () {
    console.log(this.name + " is training at " + this.footballClub + " training ground.");
  },
  birthplace: {
    date: "November 3rd 1963",
    location: "New York City, USA",
  },
};

console.log(person4.birthplace.date);
person4.footballClub = "Arsenal";
person4.running();
console.log(person4);

console.log(person4["age"]);
console.log(person4["birthplace"]["date"]);

// const parent = document.getElementById("parentElement");
//const child = document.createElement("p");
//child.textContent = "We love you Arsenal, we do....";
//parent.appendChild(child);

const myArray = ["Bob", "Peter", "Roger"];

// function render() {
//   const parent = document.getElementById("parentElement");
//   for (let i = 0; i < myArray.length; i++) {
//     const newTag = document.createElement("li");
//     newTag.textContent = myArray[i];
//     parent.appendChild(newTag);
//   }
// }

// render();

const person5 = {
  name: "Ian Wright",
  age: 60,
  footballer: false,
  eduction: ["Costessey High Scool", "Arsenal Football Academy"],
  running: function () {
    console.log(this.name + " is training at " + this.footballClub + " training ground.");
  },
  birthplace: {
    date: "November 3rd 1963",
    location: "New York City, USA",
  },
  render: function () {
    const parent = document.getElementById("parentElement");
    for (let i = 0; i < myArray.length; i++) {
      const newTag = document.createElement("li");
      newTag.textContent = myArray[i];
      parent.appendChild(newTag);
    }
  },
};

person5.render();

console.log(`${person3.name} is running`);

console.log(person3.name + " is running");

let human = `${person3.name} is ${person3.age} and he studied at ${person3.education[0]}`;
console.log(human);

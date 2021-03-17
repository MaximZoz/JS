const people = [
  {
    name: "Владилен",
    age: 25,
    budget: 40000,
  },
  {
    name: "Елена",
    age: 17,
    budget: 3400,
  },
  {
    name: "Игорь",
    age: 49,
    budget: 50000,
  },
  {
    name: "Михаил",
    age: 15,
    budget: 1800,
  },
  {
    name: "Василиса",
    age: 24,
    budget: 25000,
  },
  {
    name: "Виктория",
    age: 38,
    budget: 2300,
  },
];

for (let i = 0; i < people.length; i++) {
  //   console.log(people[i]);
}

for (let person of people) {
  //   console.log(person);
}

// *                                                          forEach
// ?    нужно перебрать массив по именам
people.forEach((person) => {
  // console.log(person.name);
});

// *                                                          map
// ?    нужно создать новый массив из возраста * 2

const newPeople = people.map((person, index) => {
  // return `${index + 1}: ${person.name} (${person.age})`;
  return person.age * 2;
});

// console.log(newPeople);

// *                                                          filter

// ?    нужно отфильтровать массив и оставить только имена людей, чей возраст 18+

const adults = people
  .filter((person) => person.age >= 18)
  .map((person) => person.name);
// console.log(adults);

// *                                                          reduce

// ?    нужно просуммировать бюджет у всех людей
const amount = people.reduce((total, person) => total + person.budget, 0);
// console.log("amount:", amount);

// *                                                          Find

// ?    нужно найти элемент в массиве по условию
const vika = people.find((person) => person.name === "Виктория");
// console.log("Виктория:", vika);

// *                                                          FindIndex

// ?    нужно найти индекс элемента в массиве по условию
const vikaIndex = people.findIndex((person) => person.name === "Виктория");
// console.log("Виктория:", vikaIndex);

// *                                                          сочетание методов (чейн) - желательно выводить на новой строчке

// ?    нужно отфильтровать массив по тем людям, чей бюджет больше 30000 и создать новый массив из объектов типа info: "name (age)", budget: number
const newPeopleBudget = people
  .filter((person) => person.budget > 30000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    };
  });
// console.log("newPeople:", newPeopleBudget);

// ?    нужно посчитать деньги людей, чей бюджет больше 30000
const newPeopleBudgetQuantity = people
  .filter((person) => person.budget > 30000)
  .map((person) => {
    return {
      info: `${person.name} (${person.age})`,
      budget: person.budget,
    };
  })
  .reduce((total, person) => total + person.budget, 0);
// console.log("newPeopleBudgetQuantity:", newPeopleBudgetQuantity);
// *                                                          Метод split(";") разбивает объект String на массив строк ["1", " 2", " 3", " 3", " 4"] по разделителю
// *                                                          Метод indexOf(item) позволяет возвратить индекс искомого элемента в массиве при первом совпадении, или -1 если элемент не найден
// *                                                          Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.

// ?    нужно избавиться от повторяющихся символов в строке
let emailAddress = "1; 2; 3; 3; 4";

if (emailAddress.indexOf(";")) {
  emailAddress = emailAddress
    .split(";")
    .reduce((acc, item) => {
      if (acc.indexOf(item) === -1) {
        acc.push(item);
      }

      return acc;
    }, [])
    .join(";");
}

// console.log("emailAddress: ", emailAddress);

// ?    нужно избавиться от повторяющихся элементов в массиве
const arrays = ["ade", "kemi", "bose", "esther", "felele", "ade"];

const uniqueArray = arrays.filter(
  (array, index) => arrays.indexOf(array) === index
);
// console.log("uniqueArray: ", uniqueArray);

// * статья про удаление дубликатов массива     https://www.codementor.io/@sunnyedogbo/remove-array-duplicates-in-javascript-12yi1u1gdh

const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, num) => {
  return acc + num;
}, 0);
console.log("🚀total: ", total);

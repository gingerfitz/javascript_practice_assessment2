// "use strict";
// we are declaring a variable named test equal to an array of letters
let test = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

// to access an element of an array we need to use square bracket notation
test[3]; //
const printEverOther = (array) => {
  for (let i = 0; i < array.length; i += 2) {
    console.log(array[i]);
  }
};
printEverOther(test);

const printTens = () => {
  for (let i = 10; i <= 100; i += 10) {
    console.log(i);
  }
};
printTens();

const countUntilTen = (step) => {
  let counter = step;
  while (true) {
    if (counter % 10 !== 0) {
      console.log(counter);
      counter += step;
    } else {
      console.log(counter);
      break;
    }
  }
};
countUntilTen(4);

// const printTens = () => {
//   for (let i = 10; i <= 100; i += 10) {
//     console.log(i);
//   }
// };
// printTens();

// const countUntilTens = (step) => {
//   let unit = step;
//   while (true) {
//     if (unit % 10 === 0) {
//       console.log(unit);
//       break;
//     } else {
//       console.log(unit);
//       unit += step;
//     }
//   }
// };
// countUntilTens(9);

// const hasVowels = (word) => {
//   for (let i = 0; i < word.lenght; i++) {
//     if (
//       word[i === "a"] ||
//       word[i === "e"] ||
//       word[i === "i"] ||
//       word[i === "o"] ||
//       word[i === "u"]
//     ) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasVowels("ggg"));

const hasVowels = (word) => {
  const vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < word.length; i++) {
    for (let j = 0; j < vowels.length; j++) {
      if (word[i] === vowels[j]) {
        return true;
      }
    }
  }
  return false;
};
console.log(hasVowels("ggog"));

const dealership = [
  { make: "Toyota", model: "Prius", year: 2020, hybrid: true },
  { make: "Toyota", model: "Prius", year: 2021, hybrid: true },
  { make: "Ford", model: "F-150", year: 2015, hybrid: false },
  { make: "Ferrari", model: "Enzo", year: 2004, hybrid: false },
];
const findCars = (arrayOfCars, model) => {
  let found = arrayOfCars.filter((car) => {
    return car.model === model;
  });
  return found;
};
console.log(findCars(dealership, "Prius"));

const addCar = (arrayOfCars, make, model, hybrid) => {
  let newCar = {
    make: make,
    model: model,
    year: 2021,
    hybrid: hybrid,
  };
  arrayOfCars.push(newCar);
};
addCar(dealership, "Audi", "A4", false);
console.log(dealership);

const areThereAnyHybridsForSale = (arrayOfCars) => {
  let yesorno = arrayOfCars.some((car) => {
    return car.hybrid === true;
  });
  return yesorno;
};
console.log(areThereAnyHybridsForSale(dealership));
// const testTemperature = (desiredTemp, actualTemp) => {
//   if (actualTemp < desiredTemp) {
//     console.log("Run Heat");
//   } else if (actualTemp > desiredTemp) {
//     console.log("Run A/C");
//   } else {
//     console.log("Standby");
//   }
// };
// testTemperature(72, 88);

// const cars = [
//   { make: "Toyota", model: "Prius", year: 2020, hybrid: true },
//   { make: "Toyota", model: "Prius", year: 2021, hybrid: true },
//   { make: "Ford", model: "F-150", year: 2015, hybrid: false },
//   { make: "Ferrari", model: "Enzo", year: 2004, hybrid: false },
// ];

// const dealership = (arrayOfCars, model) => {
//   let found = arrayOfCars.filter((car) => {
//     if (car.model === model) return car;
//   });
//   return found;
// };
// console.log(dealership(cars, "Prius"));

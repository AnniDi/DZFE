// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).
// For example,
// [true,  true,  true,  false,
//     true,  true,  true,  true ,
//     true,  false, true,  false,
//     true,  false, false, true ,
//     true,  true,  true,  true ,
//     false, false, true,  true]
//   The correct answer would be 17.
//   Hint: Don't forget to check for bad values like null/undefined
function countSheep(arr) {
  // Инициализируем переменную для подсчета овец
  let sheepCount = 0;

  // Проходимся по всем элементам массива
  for (let i = 0; i < arr.length; i++) {
    // Проверяем, является ли элемент true (присутствие овцы)
    if (arr[i] === true) {
      // Увеличиваем счетчик
      sheepCount++;
    }
  }

  // Возвращаем общее количество овец
  return sheepCount;
}

// Пример использования функции
const sheepArray = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
const numberOfSheep = countSheep(sheepArray);
console.log(numberOfSheep); // Выведет 17

// 2. Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
  // Проверяем, является ли x строкой
  if (typeof x === "string") {
    // Если x - строка, возвращаем "Error"
    return "Error";
  } else {
    // Если x - не строка, выполняем вычисления
    const result = x * 50 + 6;
    return result;
  }
}

// Примеры использования функции
console.log(problem(5)); // Выведет 256 (5 * 50 + 6)
console.log(problem("Hello")); // Выведет "Error", так как "Hello" - строка

//   3.Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
function problem(x) {
  // Проверяем, является ли x строкой
  if (typeof x === "string") {
    // Если x - строка, возвращаем "Error"
    return "Error";
  } else {
    // Если x - не строка, выполняем вычисления
    const result = x * 50 + 6;
    return result;
  }
}

// 4.Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.
function shortcut(inputString) {
  // Используем метод replace() с регулярным выражением, чтобы удалить строчные гласные
  const result = inputString.replace(/[aeiou]/g, "");

  // Возвращаем измененную строку
  return result;
}

// Пример использования функции
const input = "Hello, World!";
const output = shortcut(input);
console.log(output); // Выведет "Hll, Wrld!"

// 5.This code does not execute properly. Try to figure out why.

function multiply(a, b) {
  return a * b; //  оператор return для возврата результата умножения
}

// Пример использования функции
const result = multiply(5, 10); // Результат умножения 5 на 10 будет возвращен и сохранен в переменной result
console.log(result); // Выведет 50

//   6.Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.
function boolToWord(bool) {
  // Проверяем значение bool
  if (bool === true) {
    return "Yes"; // Возвращаем "Yes", если bool равен true
  } else {
    return "No"; // Возвращаем "No", если bool равен false
  }
}

// Примеры использования функции
console.log(boolToWord(true)); // Выведет "Yes"
console.log(boolToWord(false)); // Выведет "No"

//   7.Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)
function summation(num) {
  // Инициализируем переменную для хранения суммы
  let sum = 0;

  // Используем цикл для суммирования чисел от 1 до num
  for (let i = 1; i <= num; i++) {
    sum += i;
  }

  // Возвращаем сумму
  return sum;
}

// Примеры использования функции
console.log(summation(2)); // Выведет 3 (1 + 2)
console.log(summation(8)); // Выведет 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

//   8.I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
// P.S. Each array includes only integer numbers. Output is a number too.
function sumArrays(array1, array2) {
  // Инициализируем переменную для хранения суммы
  let sum = 0;

  // Проходимся по элементам первого массива и добавляем их к сумме
  for (let i = 0; i < array1.length; i++) {
    sum += array1[i];
  }

  // Проходимся по элементам второго массива и добавляем их к сумме
  for (let i = 0; i < array2.length; i++) {
    sum += array2[i];
  }

  // Возвращаем общую сумму
  return sum;
}

// Примеры использования функции
const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const result = sumArrays(array1, array2);
console.log(result); // Выведет 21 (1 + 2 + 3 + 4 + 5 + 6)

//   9.Our football team has finished the championship.

// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:

// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
function points(games) {
  // Инициализируем переменную для хранения общего количества очков
  let totalPoints = 0;

  // Проходимся по каждому результату матча в массиве
  for (let i = 0; i < games.length; i++) {
    // Разбиваем результат матча на части (счет вашей команды и счет соперника)
    const matchResult = games[i].split(":");
    const yourScore = parseInt(matchResult[0]);
    const opponentScore = parseInt(matchResult[1]);

    // Вычисляем очки в соответствии с правилами
    if (yourScore > opponentScore) {
      totalPoints += 3; // В случае победы добавляем 3 очка
    } else if (yourScore === opponentScore) {
      totalPoints += 1; // В случае ничьи добавляем 1 очко
    }
    // В случае поражения не добавляем очков (оставляем как есть)
  }

  // Возвращаем общее количество набранных очков
  return totalPoints;
}

// Пример использования функции
const matchResults = [
  "3:1",
  "2:2",
  "0:1",
  "4:0",
  "1:2",
  "2:1",
  "1:1",
  "3:3",
  "0:0",
  "2:0",
];
const teamPoints = points(matchResults);
console.log(teamPoints); // Выведет 14

//   10.Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

// For example:

// time = 3 ----> litres = 1

// time = 6.7---> litres = 3

// time = 11.8--> litres = 5
function litres(time) {
  // Умножаем количество часов на 0.5 и округляем до наименьшего целого
  return Math.floor(time * 0.5);
}

// Примеры использования функции
console.log(litres(3)); // Выведет 1
console.log(litres(6.7)); // Выведет 3
console.log(litres(11.8)); // Выведет 5

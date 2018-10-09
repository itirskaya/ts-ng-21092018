/*  Написать функцию isInArray(), которая начиная со второго принимает переменное количество аргументов.
Возвращает true, если все аргументы, кроме первого входят в первый.
Первым всегда должен быть массив.*/

function isInArray<T>(arr: T[], ...values: T[]): boolean {
  if (values.length <= 1) return true;

  for (var i = 1; i < values.length; i++)
    if (arr.indexOf(values[i]) < 0) return false;
  return true;
}

console.log("isInArray");
var test = [1, 2, 3, 4, 5];

console.log(isInArray(test, 3, 5, 2));
console.log(isInArray(test, 3, 7, 2));

var test2 = ["1", "2", "3", "4", "5"];

console.log(isInArray(test2, "3", "5", "2"));
console.log(isInArray(test2, "3", "7", "2"));

function isString(a: number | string): a is string {
  return typeof a === "string";
}

/*summator(), которая сумирует переданые ей аргументы.
 Аргументы могут быть либо строкового либо числового типа. Количество их не ограничено*/

type T = number | string;

function summator<T>(...values: T[]): number | string {
  let sum: number | string;

  sum = typeof values[0] === "string" ? "" : 0;

  for (var i = 0; i < values.length; i++) {
    if (typeof sum === "string" /* && typeof values[i] === "string"*/) {
      sum = sum + values[i];
    }
    if (typeof sum === "number" /*&& typeof values[i] === "number"*/) {
      sum = sum + +values[i];
    }
  }

  return sum;
}

console.log(summator("3", "5", "2"));
console.log(summator(3, 5, 2));

/*Написать функцию getUnique(arr), которая принимает аргументом неограниченое число аргументов,
  и возвращает массив уникальных элементов. Аргумент не должен изменяться.
  Порядок элементов результирующего массива должен совпадать с порядком,
  в котором они встречаются в оригинальной структуре.*/

function getUnique<T>(...values: T[]): T[] {
  var result = [];

  for (var i = 0; i < values.length; i++)
    if (result.indexOf(values[i]) < 0) result.push(values[i]);

  return result;
}
console.log("getUnique");
console.log(getUnique(3, 5, 2));
console.log(getUnique(3, 5, 3, 5, 2));

/* Дописать функцию toMatrix(data, rowSize), которая принимает аргументом массив и число,
 возвращает новый массив. Число показывает количество элементов в подмассивах,
 элементы подмассивов беруться из массива data.
 Оригинальный массив не должен быть изменен.*/

function toMatrix<T>(data: T[][], rowSize: number): T[][] {
  var result = [];

  for (var i = 0; i < data.length; i++) {
    let res = [];
    for (var j = 0; j < data[i].length && j < rowSize; j++)
      res.push(data[i][j]);
    result.push(res);
  }
  return result;
}

console.log("toMatrix");
console.log(toMatrix([[1, 2, 3, 4, 5, 6], [1, "2", 3, 4, 5], [1, 2, 3]], 3)); //[[1, 2, 3 ], [1, '2', 3 ], [1, 2, 3]]

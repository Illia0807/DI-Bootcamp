function makeAllCaps(arr) {
  return new Promise((resolve, reject) => {
    const allStr = arr.every((element) => typeof element === "string");
    if (allStr) {
      resolve(arr.map((word) => word.toUpperCase()));
    } else {
      reject("not all words str");
    }
  });
}

function sortWords(arr) {
        return new Promise((resolve, reject) =>{
        if (arr.length > 4) {
                resolve(arr.sort());  // Возвращаем отсортированный массив, если длина больше 4
              } else {
                reject("Array length is not sufficient");  // Отклоняем, если длина меньше или равна 4
              }
});
}

makeAllCaps([1, "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
  .then((arr) => sortWords(arr))
  .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
  .catch((error) => console.log(error));

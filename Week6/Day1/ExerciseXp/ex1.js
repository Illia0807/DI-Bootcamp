function compareToTen(num) {
  return new Promise((resolve, reject) => {
    if (num <= 10) {
      resolve("num<=10");
    } else {
      reject("num>10");
    }
  });
}
compareToTen(15)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

compareToTen(8)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

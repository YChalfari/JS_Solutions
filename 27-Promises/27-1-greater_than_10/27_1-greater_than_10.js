const isGreaterThan10 = function (num) {
  return new Promise((resolve, reject) => {
    if (num > 10) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};

isGreaterThan10(9)
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

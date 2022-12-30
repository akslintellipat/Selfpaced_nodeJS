const fakePromise = (data, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        let result = JSON.parse(data);
        if (result === null) reject("Invalid string");
        else resolve(result);
      } catch (error) {
        reject("Invalid string");
      }
    }, time);
  });
};

let data = { abc: 1, xyz: [2, 3, 5] };
let wrongData = null;

fakePromise(JSON.stringify(data), 5000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

fakePromise(JSON.stringify(wrongData), 5000)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

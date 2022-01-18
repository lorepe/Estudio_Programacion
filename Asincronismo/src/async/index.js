const doSometimeAsync = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => {
          resolve("Do Something Async");
        }, 3000)
      : reject(new Error("TextError"));
  });
};

const doSomething = async () => {
  const something = await doSomething();
  console.log(something);
};
console.log("Before");
doSomething();
console.log("After");

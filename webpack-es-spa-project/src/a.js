new Promise((resolve, reject) => {
  resolve("333");
});

async function name() {
  console.log("async 啥呀");
}

name();
console.log("123");

function doubleAfter2Seconds(x) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(x * 2)
    }, 2000)
  })
}

doubleAfter2Seconds(10).then((r) => {
  console.log(r)
})

// issue here since it doesn't wait for the promises to resolve
// to fix this, we can set up a promise chain..
let sum =   doubleAfter2Seconds(10)
          + doubleAfter2Seconds(20)
          + doubleAfter2Seconds(30)
console.log(sum)

// use async/await
async function addAsync(x) {
  const a = await doubleAfter2Seconds(10)
  const b = await doubleAfter2Seconds(20)
  const c = await doubleAfter2Seconds(30)
  return x + a + b + c
}

addAsync(10).then((sum) => {
  console.log(sum)
})

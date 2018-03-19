
// async function hah(a) {
//   console.log('哈哈哈' + a)
// }
;
async function main() {
  try {
    console.log('222')
  }
  catch (err) {
    console.error(err);
  }
};


console.log(100)
// setTimeout(function() {
//   console.log('200')
// },100)
const result = await main()

console.log(300)
console.log(400)



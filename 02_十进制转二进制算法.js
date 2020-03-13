/* 
  decimal to binary with stack 
*/
console.log(101%2);
console.log(50%2);
console.log(25%2);
console.log(12%2);
console.log(6%2);
console.log(3%2);
console.log(1%2);


function decToBin(decNum) {
  let arr = []
  while(decNum >= 1) {
    arr.push(decNum % 2)
    decNum = Math.floor(decNum / 2)
  }
  let bin = arr.reverse().join(' ')
  return bin
}
console.log(decToBin(101));
/*
n >= 0
x >= 0
y >= 0
tf, x >=2
tf, if n > 0, the highest value of x is Math.log2(n+4)
x-2y = sqrtn
*/

function solequa(n) {
let s = []
for (let x = Math.round((n/2)+2); x>=0; x--) {
  let x2 = Math.pow(x,2)
let x2MinusN = x2 - n;
  let y = Math.sqrt((x2MinusN)/4)
  if (Number.isInteger(y)) {s.push([x,y])}
}
return s
}

console.log(solequa(90005))
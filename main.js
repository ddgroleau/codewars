function countingValleys(steps, path) {
  // Write your code here
let valleys = 0;
let arr = path.split("").map(i => {
  return i === "D" ? -1 : 1
})
let seaLevel = 0;
for (let i in arr) {
  seaLevel+=arr[i]
  if (arr[i]===1 && seaLevel === 0) { valleys+=1 }
}
return valleys;
}

console.log(countingValleys(8,'UDDDUDUU'))
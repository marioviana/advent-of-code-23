import { readFileSync } from "fs";

const numbers = { zero: 0, one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9 }

const calibration = readFileSync("input.txt", { encoding: "utf-8" })
  .split('\n')
  .map(line => { 
    const firstMatch = line.match(new RegExp(`(${Object.keys(numbers).join('|')}|\\d)`, 'i'))[0];
    const lastMatch = line.match(new RegExp(`(?=.*(${Object.keys(numbers).join('|')}|\\d))`, 'i'))[1];
    return parseInt(`${numbers[firstMatch] || firstMatch}${numbers[lastMatch] || lastMatch}`)
  })
  .reduce((a, b) => a+b);

console.log("RESULT: ", calibration);
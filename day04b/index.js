import { readFileSync } from "fs";

const input = readFileSync("input.txt", { encoding: "utf-8" }).split('\n')

const matchingNumbers = ([l, r]) => l.reduce((a, n) => r.some(nu => nu === n) ? a + 1 : a , 0)

const sum = Object.values(
    input
    .map(l => l.split(/:| \| /) .slice(1).map(set => (set.trim().split(/\s+/).map(Number))))
    .map((l, i) => ({ i, mn: matchingNumbers(l) }))
    .reduce((a, { i, mn }) => {
      a[i] = a[i] || 1;
      Array.from({ length: mn }, (_, idx) => i + idx + 1).forEach(ai => {a[ai] = (a[ai] || 1) + (a[i] || 1)})
      return a;
    } , {})
  ).reduce((a,b) => a+b)

console.log("RESULT: ", sum);
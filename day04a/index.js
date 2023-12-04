import { readFileSync } from "fs";

const sum = readFileSync("input.txt", { encoding: "utf-8" })
  .split('\n')
  .map(l => l.split(/:| \| /) .slice(1).map(set => (set.trim().split(/\s+/).map(Number))))
  .map(l => l[1].reduce((a, n) => l[0].some(nu => nu === n) ? a + 1 : a , 0))
  .reduce((a,b) => a + (b > 0 ? 2 ** (b - 1) : 0), 0)

console.log("RESULT: ", sum);
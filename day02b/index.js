import { readFileSync } from "fs";

const possibleCubes = readFileSync("input.txt", { encoding: "utf-8" })
  .split(/Game \d+: |\n/)
  .filter(line => line !== "")
  .map(line => line.split("; ").map(s => s.split(", ").reduce((a, b) => ({ ...a, [b.split(" ")[1]]: Number(b.split(" ")[0]) }), {}))
  .reduce((a, b) => { Object.keys(b).forEach(c => { a[c] = Math.max(a[c] || 0, b[c]) }); return a; }, {}))
  .reduce((a,b) => a + Object.values(b).reduce((c,d) => c*d, 1), 0);

console.log("RESULT: ", possibleCubes);
import { readFileSync } from "fs";

const max = {
  red: 12,
  green: 13,
  blue: 14,
}

const possibleCubes = readFileSync("input.txt", { encoding: "utf-8" })
  .split(/Game \d+: |\n/)
  .filter(line => line !== "")
  .map(line => line.split("; ").map(s => s.split(", ").map(sc => max[sc.split(" ")[1]] >= sc.split(" ")[0])))
  .map((result, game) => result.flat().every(Boolean) ? game + 1 : 0)
  .reduce((a, b) => a+b)

console.log("RESULT: ", possibleCubes);
import { readFileSync } from "fs";

const max = {
  red: 12,
  green: 13,
  blue: 14,
}

const possibleCubes = readFileSync("input.txt", { encoding: "utf-8" })
  .split(/Game \d+: |\n/)
  .filter(line => line !== "")
  .map(line => {
    const cubes = {red: 0, green: 0, blue: 0};
    line.split("; ").map(s => s.split(", ").map(sc => cubes[sc.split(" ")[1]] = Math.max(cubes[sc.split(" ")[1]], parseInt(sc.split(" ")[0]))));
    return cubes.red * cubes.green * cubes.blue;
  })
  .reduce((a, b) => a+b)

console.log("RESULT: ", possibleCubes);
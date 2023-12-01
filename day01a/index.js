import { readFileSync } from "fs";

const calibration = readFileSync("input.txt", { encoding: "utf-8" })
  .split('\n')
  .map(line => parseInt(`${line.match(/\d/)[0]}${line.match(/\d(?=[^\d]*$)/)[0]}`))
  .reduce((a, b) => a+b);

console.log("RESULT: ", calibration);
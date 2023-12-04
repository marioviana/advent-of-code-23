import { readFileSync } from "fs";

const input = readFileSync("input.txt", { encoding: "utf-8" }).split('\n');

const numbers = input.map((l, i) => ([...l.matchAll(/[0-9]+/g)] || []).map(y => ({ value: y[0], nCol: y.index, nLine: i }) )).flat();
const symbols = input.map((l, i) => ([...l.matchAll(/[^0-9,\.]/g)] || []).map(y => ({ sCol: y.index, sLine: i }) )).flat();

const sum = symbols.reduce((a, { sCol, sLine }) => {
  const gears = numbers.filter(({ value, nCol, nLine }) =>
    sCol >= nCol - 1 && sCol <= nCol + value.length && [nLine - 1, nLine, nLine + 1].some(l => l === sLine)
  ).map(nl => nl.value);
  return gears.length === 2 ? a + gears.reduce((c, v) => Number(c) * Number(v), 1) : a;
}, 0)

console.log("RESULT: ", sum);
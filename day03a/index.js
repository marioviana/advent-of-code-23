import { readFileSync } from "fs";

const input = readFileSync("input.txt", { encoding: "utf-8" }).split('\n');

const numbers = input.map((l, i) => ([...l.matchAll(/[0-9]+/g)] || []).map(y => ({ value: y[0], nCol: y.index, nLine: i }) )).flat();
const symbols = input.map((l, i) => ([...l.matchAll(/[^0-9,\.]/g)] || []).map(y => ({ sCol: y.index, sLine: i }) )).flat();

const sum = numbers.reduce((a, { value, nCol, nLine }) =>
  symbols.find(({ sCol, sLine }) =>
    sCol >= nCol - 1 && sCol <= nCol + value.length && [nLine - 1, nLine, nLine + 1].some(l => l === sLine)
  ) ? a + Number(value) : a, 0)

console.log("RESULT: ", sum);
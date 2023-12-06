import { readFileSync } from "fs";

const input = readFileSync("input.txt", { encoding: "utf-8" })
  .split('\n');

const { maps } = input
  .reduce((a, l) => {
    if (l === "" || l.includes("seeds:")) return a;
    if (l.includes("map:")) return { ...a, curr: l.split(" ")[0], maps: { ...a.maps, [l.split(" ")[0]]: [] } };
    else {
      const [dr, sr, ln] = l.split(" ").map(Number);
      return { ...a, maps: { ...a.maps, [a.curr]: [...a.maps[a.curr], { dr, sr, ln }] }}
    }
  }, { maps: {}, curr: null})

const lowerLocation = Math.min(...input[0].split(" ").slice(1).map(Number).map(seed => Object.values(maps).reduce((number, map) => {
  const mp = map.find(({ _dr, sr, ln }) => number >= sr && number <= sr + ln)
  return mp ? number + mp.dr - mp.sr : number;
}, seed)));

console.log("RESULT: ", lowerLocation);
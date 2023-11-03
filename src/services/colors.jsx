const blue = "#A6C7EA";
const blueDark = "#81b3e9";
const pink = "#fd9dc2";
const pinkDark= "#f17aac";
const green = "#BBDCAD";
const greenDark = "#97db7a";
const yellow = "#F9F08D";
const yellowDark= "#f9ed67";
const orange = "#FEBD7D";
const orangeDark= "#faa957";
const plum = "#dda0dd";
const plumDark = "#db7adb";

export const colorsData = [
    {id:0, hex:yellow, hexDark:yellowDark},
    {id:1, hex:orange, hexDark:orangeDark},
    {id:2, hex:blue, hexDark:blueDark},
    {id:3, hex:green, hexDark:greenDark},
    {id:4, hex:pink, hexDark:pinkDark},
    {id:5, hex:plum, hexDark:plumDark}
]

export function getColorById(id) {
    return {"bg": colorsData[id].hex, "head": colorsData[id].hexDark}
} 
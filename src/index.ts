function getRGBPrime(h: number, x: number, c: number): [number, number, number] {
  switch (Math.floor(h)) {
    case 0:
      return [c, x, 0];
    case 1:
      return [x, c, 0];
    case 2:
      return [0, c, x];
    case 3:
      return [0, x, c];
    case 4:
      return [x, 0, c];
    default:
      return [c, 0, x];
    }
}

function getColor(i: number, l: number, c: number, m: number, shift: number): [number, number, number] {
  const h = (6 * i + shift) / l;
  const x = Math.ceil(c * (1 - Math.abs((h % 2) - 1)));

  return getRGBPrime(h % 6, x, c)
    .map((chan) => (chan + m)*255) as [number, number, number];
}

export function getColors(n: number, { shift = 0, s = 1, v = 1 } = {}) {
  const c = v * s;
  const m = v - c;
  shift %= 2 * Math.PI / n;
  shift *= 3 / Math.PI;

  return Array.from({ length: n }, (_, i) => {
    const [ r, g, b ] = getColor(i, n, c, m, shift).map((chan) => {
      const x = Math.round(chan).toString(16);
      return x.length > 1 ? x : '0' + x;
    });

    return `#${r}${g}${b}`;
  });
}

export default getColors;
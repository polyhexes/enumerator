import { Coord } from "./util/coord";

export function flipX(input: Coord[]): Coord[] {
  return input.map(flipXCoord);
}

function flipXCoord([x, y]: Coord): Coord {
  const x0Mul2 = y - 1;
  return [-x + x0Mul2, y];
}

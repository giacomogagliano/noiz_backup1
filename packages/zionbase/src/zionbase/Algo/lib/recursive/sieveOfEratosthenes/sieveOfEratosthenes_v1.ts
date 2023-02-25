export interface IsieveOfEratosthenes_v1 {
  (n: number): number[];
}

export function sieveOfEratosthenes_v1(n: number) {
  let a = [];
  let p = 2;
  for (let i = p; i <= n; i++) {
    a.push(i);
  }
  return compose(p, a, n);
}

function compose(
  p: number,
  a: number[],
  n: number
): number[] {
  if (p * p > n) {
    return a;
  }
  a = a
    .map(m => (m !== p && m % p === 0 ? 0 : m))
    .filter(m => (m === 0 ? false : true));
  p = a.find(m => m !== 0 && m > p)!;
  return compose(p, a, n);
}

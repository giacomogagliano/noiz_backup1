function foo(a: number): string;
function foo(a: number): string {
  if (typeof a === "number")
    return new String(a).valueOf();
  return a;
}

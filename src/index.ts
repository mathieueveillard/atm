export function atm(n: number): number[] {
  const bills = [500, 200, 100, 50, 20, 10];
  const { result } = bills.reduce(
    ({ rest, result }, bill) => {
      const r = rest % bill;
      const q = (rest - r) / bill;
      return {
        rest: r,
        result: [...result, q],
      };
    },
    { rest: n, result: [] }
  );
  return result;
}

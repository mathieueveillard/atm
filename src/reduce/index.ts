import { descending } from "../util/sort";

export function atm(bills: number[]) {
  const sortedBills = [...bills].sort(descending);

  return function (n: number): Record<number, number> {
    const { rest, result } = sortedBills.reduce(
      ({ rest, result }, bill) => {
        const r = rest % bill;
        const q = (rest - r) / bill;
        return {
          rest: r,
          result: { ...result, [bill]: q || undefined },
        };
      },
      { rest: n, result: {} }
    );

    if (rest > 0) {
      throw Error("This amount can't be served.");
    }

    return result;
  };
}

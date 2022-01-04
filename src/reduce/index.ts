import { descending } from "../util/sort";

export type Bill = 10 | 20 | 50 | 100 | 200 | 500;

type Withdrawal = Partial<Record<Bill, number>>;

export function atm(bills: Bill[]) {
  const sortedBills = [...bills].sort(descending);

  return function (n: number): Withdrawal {
    const { rest, result } = sortedBills.reduce(
      ({ rest, result }, bill) => {
        const r = rest % bill;
        const q = (rest - r) / bill;
        return {
          rest: r,
          result: { ...result, [bill]: q || undefined },
        };
      },
      { rest: n, result: {} as Withdrawal }
    );

    if (rest > 0) {
      throw Error("This amount can't be served.");
    }

    return result;
  };
}

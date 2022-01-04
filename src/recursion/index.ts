import { descending } from "../util/sort";

export type Bill = 10 | 20 | 50 | 100 | 200 | 500;

type Withdrawal = Partial<Record<Bill, number>>;

export function atm(bills: Bill[]) {
  const sortedBills = [...bills].sort(descending);

  return function (n: number): Withdrawal {
    if (sortedBills.length > 0) {
      const [bill, ...remainingBills] = sortedBills;
      const r = n % bill;
      const q = (n - r) / bill;
      return {
        [bill]: q || undefined,
        ...atm(remainingBills)(r),
      };
    }

    if (n > 0) {
      throw Error("This amount can't be served.");
    }

    return {};
  };
}

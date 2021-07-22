import { descending } from "../util/sort";

export function atm(bills: number[]) {
  const sortedBills = [...bills].sort(descending);

  return function (n: number): Record<number, number> {
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

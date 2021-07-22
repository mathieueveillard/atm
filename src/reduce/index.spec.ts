import { atm } from ".";

const bills = [500, 200, 100, 50, 20, 10];

it("When the requested amount equals the value of one bill, it should return this bill", function () {
  expect(atm(bills)(20)).toEqual({
    20: 1,
  });
});

it("When the requested amount is a multiple of the value of one bill, it should return n times this bill", function () {
  expect(atm(bills)(40)).toEqual({
    20: 2,
  });
});

it("When the requested amount is NOT a multiple of the value of one bill, it should deliver the lowest quantity of bills", function () {
  expect(atm(bills)(30)).toEqual({
    20: 1,
    10: 1,
  });
});

it("It should handle unsorted bills definition as well", function () {
  const bills = [200, 500, 100, 10, 20, 50];
  expect(atm(bills)(30)).toEqual({
    20: 1,
    10: 1,
  });
});

it("[control] 190 = 1 x 100 + 1 x 50 + 2 x 20", function () {
  expect(atm(bills)(190)).toEqual({
    100: 1,
    50: 1,
    20: 2,
  });
});

it("[control] 50 = 2 x 20 + 1 x 10", function () {
  const bills = [500, 200, 100, 20, 10];
  expect(atm(bills)(50)).toEqual({
    20: 2,
    10: 1,
  });
});

it("[control] When the requested amount is 0, it should return no bill", function () {
  expect(atm(bills)(0)).toEqual({});
});

it("It should throw an exception if the requested amount can't be served", function () {
  expect(() => atm(bills)(31)).toThrowError("This amount can't be served.");
});

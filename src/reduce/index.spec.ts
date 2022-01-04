import { atm, Bill } from ".";

test("When the requested amount equals the value of one bill, it should return this bill", function () {
  const bills: Bill[] = [20];
  expect(atm(bills)(20)).toEqual({ 20: 1 });
});

test("[Triangulation] When the requested amount equals the value of one bill, it should return this bill", function () {
  const bills: Bill[] = [50];
  expect(atm(bills)(50)).toEqual({ 50: 1 });
});

test("When the requested amount is a multiple of the value of one bill, it should return this bill n times", function () {
  const bills: Bill[] = [20];
  expect(atm(bills)(40)).toEqual({ 20: 2 });
});

test.skip("[Obsolete] => allows to introduce the euclidian division (no iteration yet)", function () {
  const bills: Bill[] = [20];
  expect(atm(bills)(30)).toEqual({ 20: 1 });
});

test("When the requested amount is NOT a multiple of the value of one bill, it should deliver the lowest quantity of bills", function () {
  const bills: Bill[] = [20, 10];
  expect(atm(bills)(30)).toEqual({ 20: 1, 10: 1 });
});

test("It should handle unsorted bills definition as well", function () {
  const bills: Bill[] = [10, 20];
  expect(atm(bills)(30)).toEqual({ 20: 1, 10: 1 });
});

it("[Control] 190 = 1 x 100 + 1 x 50 + 2 x 20", function () {
  const bills: Bill[] = [500, 200, 100, 50, 20, 10];
  expect(atm(bills)(190)).toEqual({ 100: 1, 50: 1, 20: 2 });
});

it("[Control] When the requested amount is 0, it should return no bill", function () {
  const bills: Bill[] = [500, 200, 100, 50, 20, 10];
  expect(atm(bills)(0)).toEqual({});
});

it("It should throw an exception if the requested amount can't be served", function () {
  const bills: Bill[] = [500, 200, 100, 50, 20, 10];
  expect(() => atm(bills)(31)).toThrowError("This amount can't be served.");
});

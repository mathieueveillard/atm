import { atm } from ".";

it("Should pass", function () {
  expect(atm(200)).toEqual([0, 1, 0, 0, 0, 0]);
});

it("Should pass", function () {
  expect(atm(400)).toEqual([0, 2, 0, 0, 0, 0]);
});

it("Should pass", function () {
  expect(atm(450)).toEqual([0, 2, 0, 1, 0, 0]);
});

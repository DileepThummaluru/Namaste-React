import { sum } from "../sum";

test("sum fuction should calculate the sum of two numbers", () => {
  const result = sum(5, 6);
  expect(result).toBe(11);
});

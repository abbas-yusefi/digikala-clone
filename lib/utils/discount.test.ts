import { describe, it, expect } from "vitest";
import { calculateDiscountedPrice } from "./discount";

describe("calculateDiscountedPrice", () => {
  it("should calculate the correct discount price", () => {
    const price = 1000;
    const discount = 20;
    const rounded = false;

    const result = calculateDiscountedPrice(price, discount, rounded);
    const expectedResult = 800;
    expect(result).toBe(expectedResult);
  });

  it("should return 0 if discount was 100%", () => {
    const price = 1000;
    const discount = 100;
    const rounded = false;

    const result = calculateDiscountedPrice(price, discount, rounded);
    expect(result).toBe(0);
  });

  it("should return the entry price if discount was null", () => {
    const price = 1000;
    const discount = null;
    const rounded = false;

    const result = calculateDiscountedPrice(price, discount, rounded);

    expect(result).toBe(price);
  });

  it("should return rounded by 10000 if rounded was true", () => {
    const price = 14728;
    const discount = null;
    const rounded = true;

    const result = calculateDiscountedPrice(price, discount, rounded);
    const expectedResult = 10000;

    expect(result).toBe(expectedResult);
  });

  it("should throw an error if discount was larger than 100 or smaller than 0", () => {
    const price = 10000;
    const discount = -10;
    const rounded = false;

    const resultFN = () => {
      calculateDiscountedPrice(price, discount, rounded);
    };

    const expectedResult = `Discount must be between 0 and 100 or null, Received ${discount}`;

    expect(resultFN).toThrow(expectedResult);
  });
  it("should throw an error when price was 0", () => {
    const price = 0;
    const discount = 10;
    const rounded = false;

    const resultFN = () => {
      calculateDiscountedPrice(price, discount, rounded);
    };

    expect(resultFN).toThrow(
      `expected price to be more than 0, Recieved ${price}`,
    );
  });
});

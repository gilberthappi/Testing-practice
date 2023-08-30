class Calculator {
    add(a, b) {
      return a + b;
    }
  
    subtract(a, b) {
      return a - b;
    }
  
    divide(a, b) {
      if (b === 0) {
        throw new Error("Cannot divide by zero");
      }
      return a / b;
    }
  
    multiply(a, b) {
      return a * b;
    }
  }
  
  describe("Calculator", () => {
    let calculator;
  
    beforeEach(() => {
      calculator = new Calculator();
    });
  
    describe("add method", () => {
      test("adds two numbers correctly", () => {
        expect(calculator.add(2, 3)).toBe(5);
      });
  
      test("handles negative numbers", () => {
        expect(calculator.add(-2, 3)).toBe(1);
      });
  
      test("handles decimal numbers", () => {
        expect(calculator.add(1.5, 2.5)).toBe(4);
      });
    });
  
    describe("subtract method", () => {
      // Write similar tests for subtract method
    });
  
    describe("divide method", () => {
      // Write similar tests for divide method
    });
  
    describe("multiply method", () => {
      // Write similar tests for multiply method
    });
  });
  
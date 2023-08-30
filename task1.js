// Function to calculate the length of a string
function stringLength(string) {
    return string.length;
  }
  
  // Test for the initial function
  test("stringLength function calculates length correctly", () => {
    expect(stringLength("Hello")).toBe(5);
  });
  
  // Updated function to check string length constraints and throw errors
  function stringLength(string) {
    if (string.length < 1 || string.length > 10) {
      throw new Error("String length must be between 1 and 10 characters");
    }
    return string.length;
  }
  
  // Tests for the updated function
  test("stringLength throws error for empty string", () => {
    expect(() => stringLength("")).toThrow("String length must be between 1 and 10 characters");
  });
  
  test("stringLength throws error for string longer than 10 characters", () => {
    expect(() => stringLength("ThisIsTooLong")).toThrow("String length must be between 1 and 10 characters");
  });
  
// Function to reverse a string
function reverseString(string) {
    return string.split("").reverse().join("");
  }
  
  // Test for the reverseString function
  test("reverseString function reverses the string", () => {
    expect(reverseString("Hello")).toBe("olleH");
  });
  
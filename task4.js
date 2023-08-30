// Test for capitalize function (should fail initially)
test("capitalize function capitalizes the first character", () => {
    expect(capitalize("hello")).toBe("Hello");
  });
  
  // Implement capitalize function
  function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
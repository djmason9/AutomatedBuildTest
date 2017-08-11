describe("A suite", function() {
  it("contains spec with an expectation", function() {
    expect(true).toBe(true);
  });
  
  it("and so is a spec 2", function() {
    a = true;

    expect(a).toBe(true);
  });
  
  it("and so is a spec 3", function() {
    a = true;

    expect(a).toBe(false);
  });
});

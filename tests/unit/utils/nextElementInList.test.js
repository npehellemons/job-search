import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("Locates the next element in a list", () => {
    const list = ["a", "b", "c", "d", "e"];
    const value = "c";
    const result = nextElementInList(list, value);
    expect(result).toBe("d");
  });

  describe("When element is at the end of the list", () => {
    it("Locates the next element at the start of a list", () => {
      const list = ["a", "b", "c", "d", "e"];
      const value = "e";
      const result = nextElementInList(list, value);
      expect(result).toBe("a");
    });
  });
});

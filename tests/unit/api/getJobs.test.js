import axios from "axios";
import getJobs from "@/api/getJobs";
jest.mock("axios");

describe("getJobs", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue({ data: [{ id: 1, title: "test-title" }] });
  });

  it("should return jobs", async () => {
    await getJobs();
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("should return jobs", async () => {
    const data = await getJobs();
    expect(data).toEqual([{ id: 1, title: "test-title" }]);
  });
});

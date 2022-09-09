import { shallowMount, flushPromises } from "@vue/test-utils";
import axios from "axios";
jest.mock("axios");

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings.vue", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "1",
      ...queryParams,
    },
  });
  const createConfig = ($route) => ({
    global: {
      mocks: {
        $route,
      },
    },
  });

  it("Makes the correct API call", () => {
    axios.get.mockResolvedValue({ data: [] });
    shallowMount(JobListings, createConfig(createRoute()));
    expect(axios.get).toHaveBeenCalledWith("http://localhost:3000/jobs");
  });

  it("Creates a job listing for a max of 10 jobs", async () => {
    axios.get.mockResolvedValue({ data: Array(15).fill({}) });
    const wrapper = shallowMount(JobListings, createConfig(createRoute()));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });
});

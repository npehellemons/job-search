import { shallowMount, flushPromises, RouterLinkStub } from "@vue/test-utils";

import JobListings from "@/components/JobResults/JobListings.vue";

describe("JobListings.vue", () => {
  const createRoute = (queryParams = {}) => ({
    query: {
      page: "1",
      ...queryParams,
    },
  });

  const createStore = (config = {}) => ({
    state: {
      jobs: Array(15).fill({}),
    },
    dispatch: jest.fn(),
    ...config,
  });

  const createConfig = ($route, $store) => ({
    global: {
      mocks: {
        $route,
        $store,
      },
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  describe("when component mounts", () => {
    it("makes call to fetch jobs from API", () => {
      const $route = createRoute();
      const dispatch = jest.fn();
      const $store = createStore({ dispatch });
      const config = createConfig($route, $store);
      shallowMount(JobListings, config);
      expect(dispatch).toHaveBeenCalledWith("FETCH_JOBS");
    });
  });

  it("Creates a job listing for a max of 10 jobs", async () => {
    const queryParams = { page: "1" };
    const $route = createRoute(queryParams);
    const $store = createStore({
      state: {
        jobs: Array(15).fill({}),
      },
    });
    const wrapper = shallowMount(JobListings, createConfig($route, $store));
    await flushPromises();
    const jobListings = wrapper.findAll("[data-test='job-listing']");
    expect(jobListings).toHaveLength(10);
  });

  describe("When query params exclude page number", () => {
    it("displays page number 1", () => {
      const queryParams = { page: undefined };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      expect(wrapper.text()).toMatch("Page 1");
    });
  });

  describe("When query params include page number", () => {
    it("displays page number", () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      expect(wrapper.text()).toMatch("Page 2");
    });
  });

  describe("When user is on first page of job results", () => {
    it("does not show link to previous page", () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(false);
    });

    it("shows link to next page", async () => {
      const queryParams = { page: "1" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      await flushPromises();

      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(true);
    });
  });

  describe("When user is on last page of job results", () => {
    it("does not show link to next page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      await flushPromises();
      const nextPage = wrapper.find("[data-test='next-page-link']");
      expect(nextPage.exists()).toBe(false);
    });

    it("shows link to previous page", async () => {
      const queryParams = { page: "2" };
      const $route = createRoute(queryParams);
      const wrapper = shallowMount(
        JobListings,
        createConfig($route, createStore())
      );
      await flushPromises();
      const previousPage = wrapper.find("[data-test='previous-page-link']");
      expect(previousPage.exists()).toBe(true);
    });
  });
});

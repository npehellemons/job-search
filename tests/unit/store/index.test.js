import { state, mutations, actions } from "@/store/index.js";
import getJobs from "@/api/getJobs";
jest.mock("@/api/getJobs");

describe("state", () => {
  it("keeps track whether user is logged in", () => {
    const startingState = state();
    expect(startingState.isLoggedIn).toBe(false);
  });

  it("stores job listings", () => {
    const startingState = state();
    expect(startingState.jobs).toEqual([]);
  });
});

describe("mutations", () => {
  describe("LOGIN_USER", () => {
    it("logs the user in", () => {
      const state = { isLoggedIn: false };
      mutations.LOGIN_USER(state);
      expect(state).toEqual({ isLoggedIn: true });
    });
  });

  describe("RECEIVE_JOBS", () => {
    it("receives jobs from api response", () => {
      const state = { jobs: [] };
      mutations.RECEIVE_JOBS(state, ["a", "b", "c"]);
      expect(state).toEqual({ jobs: ["a", "b", "c"] });
    });
  });

  describe("actions", () => {
    describe("FETCH_JOBS", () => {
      beforeEach(() => {
        getJobs.mockResolvedValue([{ id: 1, title: "Software Developer" }]);
      });

      it("makes request to fetch jobs", async () => {
        const context = { commit: jest.fn() };
        await actions.FETCH_JOBS(context);
        expect(getJobs).toHaveBeenCalled();
      });

      it("sends message to save received jobs in store", async () => {
        const commit = jest.fn();
        const context = { commit };
        await actions.FETCH_JOBS(context);
        expect(commit).toHaveBeenCalledWith("RECEIVE_JOBS", [
          { id: 1, title: "Software Developer" },
        ]);
      });
    });
  });
});

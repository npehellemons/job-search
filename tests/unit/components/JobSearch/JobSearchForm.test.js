import { mount } from "@vue/test-utils";
import JobSearchForm from "@/components/JobSearch/JobSearchForm.vue";

describe("JobSearchForm.vue", () => {
  describe("When the user submits the form", () => {
    it("Directs user to job result page with user's search parameters", async () => {
      const push = jest.fn();
      const $router = { push };
      const wrapper = mount(JobSearchForm, {
        attachTo: document.body,
        global: {
          mocks: {
            $router,
          },
          stubs: {
            FontAwesomeIcon: true,
          },
        },
      });
      const roleInput = wrapper.find("[data-test='role-input']");
      await roleInput.setValue("Software Developer");

      const locationInput = wrapper.find("[data-test='location-input']");
      await locationInput.setValue("Breda");

      const submitButton = wrapper.find("[data-test='submit-button']");
      await submitButton.trigger("click");

      expect(push).toHaveBeenCalledWith({
        name: "JobResults",
        query: {
          role: "Software Developer",
          location: "Breda",
        },
      });
    });
  });
});

import { shallowMount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav.vue", () => {
  it("displays company name", () => {
    const wrapper = shallowMount(MainNav);
    expect(wrapper.text()).toMatch("Cloud Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav);
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Locations",
      "Benefits",
      "Jobs",
      "Students",
    ]);
  });

  describe("when user is logged out", () => {
    it("prompts user to sign in", () => {
      const wrapper = shallowMount(MainNav);
      const loginButton = wrapper.find("[data-test='login-button']");
      expect(loginButton.exists()).toBe(true);
    });
  });

  describe("when user is logged in", () => {
    it("displays profile image", async () => {
      const wrapper = shallowMount(MainNav);
      let profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      profileImage = wrapper.find("[data-test='profile-image']");
      expect(profileImage.exists()).toBe(true);
    });
    it("displays subnavigation menu with additional information", async () => {
      const wrapper = shallowMount(MainNav);
      let subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(false);

      const loginButton = wrapper.find("[data-test='login-button']");
      await loginButton.trigger("click");

      subnav = wrapper.find("[data-test='subnav']");
      expect(subnav.exists()).toBe(true);
    });
  });
});

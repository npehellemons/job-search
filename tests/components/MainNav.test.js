import { mount } from "@vue/test-utils";
import MainNav from "@/components/MainNav.vue";

describe("MainNav.vue", () => {
    it("displays company name", () => {
        const wrapper = mount(MainNav);
        expect(wrapper.text()).toMatch("Cloud Careers");
    });
});
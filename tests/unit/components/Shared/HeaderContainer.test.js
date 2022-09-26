import { mount } from "@vue/test-utils";
import HeaderContainer from "@/components/Shared/HeaderContainer.vue";

describe("HeaderContainer.vue", () => {
  it("allows parent component to provide title content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        title: "My Title",
      },
    });
    expect(wrapper.text()).toMatch("My Title");
  });

  it("allows parent component to provide subtitle content", () => {
    const wrapper = mount(HeaderContainer, {
      slots: {
        subtitle: "My Subtitle",
      },
    });
    expect(wrapper.text()).toMatch("My Subtitle");
  });
});

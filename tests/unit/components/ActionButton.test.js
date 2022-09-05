import { mount } from "@vue/test-utils";
import ActionButton from "@/components/ActionButton.vue";

describe("ActionButton.vue", () => {
  it("renders text", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Hello World",
        type: "primary",
      },
    });
    expect(wrapper.text()).toMatch("Hello World");
  });
  it("applies the right class", () => {
    const wrapper = mount(ActionButton, {
      props: {
        text: "Hello World",
        type: "primary",
      },
    });
    const button = wrapper.find("button");
    expect(button.classes("primary")).toBe(true);
  });
});

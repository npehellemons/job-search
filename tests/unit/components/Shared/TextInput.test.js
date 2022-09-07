import { mount } from "@vue/test-utils";

import TextInput from "@/components/Shared/TextInput.vue";

describe("TextInput.vue", () => {
  it("communicates that user has entered character", () => {
    const wrapper = mount(TextInput, {
      props: {
        modelValue: "",
      },
    });
    const input = wrapper.find("input");
    input.setValue("a"); // simulate user typing "a"
    input.setValue("ab"); // simulate user typing "b"
    input.setValue("abc"); // simulate user typing "c"
    const messages = wrapper.emitted()["update:modelValue"];
    expect(messages).toEqual([["a"], ["ab"], ["abc"]]);
  });
});

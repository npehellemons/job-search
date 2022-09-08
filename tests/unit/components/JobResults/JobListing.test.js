import { mount, RouterLinkStub } from "@vue/test-utils";
import JobListing from "@/components/JobResults/JobListing.vue";

describe("JobListing.vue", () => {
  const createJobsProps = (jobProps = {}) => ({
    title: "Vue Developer",
    organization: "Netflix",
    locations: ["Remote"],
    minimumQualifications: ["React", "Java"],
    ...jobProps,
  });

  const createConfig = (jobProps) => ({
    props: {
      job: {
        ...jobProps,
      },
    },
    global: {
      stubs: {
        "router-link": RouterLinkStub,
      },
    },
  });

  it("Renders job title", () => {
    const jobProps = createJobsProps({
      title: "Test Job",
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Test Job");
  });

  it("Renders job organization", () => {
    const jobProps = createJobsProps({
      organization: "Test organization",
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Test organization");
  });

  it("Renders job locations", () => {
    const jobProps = createJobsProps({
      locations: ["Orlando", "San Francisco"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Orlando");
    expect(wrapper.text()).toMatch("San Francisco");
  });

  it("Renders job qualifications", () => {
    const jobProps = createJobsProps({
      minimumQualifications: ["Vue", "JavaScript"],
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    expect(wrapper.text()).toMatch("Vue");
    expect(wrapper.text()).toMatch("JavaScript");
  });

  it("Links to individual job's page", () => {
    const jobProps = createJobsProps({
      id: "15",
    });
    const wrapper = mount(JobListing, createConfig(jobProps));
    const jobPageLink = wrapper.findComponent(RouterLinkStub);
    const toProp = jobPageLink.props("to");
    expect(toProp).toBe("/jobs/results/15");
  });
});

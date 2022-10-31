import { Story, Meta } from "@storybook/html";
import { createSearch } from "./Search";

export default {
  title: "Components/Search",
} as Meta;

const Template: Story = () => {
  return createSearch();
};

export const Search =  Template.bind({});
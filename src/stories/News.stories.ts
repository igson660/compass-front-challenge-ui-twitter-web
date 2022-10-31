import { Story, Meta } from "@storybook/html";
import { createNews } from "./News";

export default {
  title: "Components/News",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story = () => {
  return createNews();
};

export const News =  Template.bind({});
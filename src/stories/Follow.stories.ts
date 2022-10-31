import { Story, Meta } from "@storybook/html";
import { createFollow } from "./Follow";

export default {
  title: "Components/Follow",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story = () => {
  return createFollow();
};

export const Follow =  Template.bind({});
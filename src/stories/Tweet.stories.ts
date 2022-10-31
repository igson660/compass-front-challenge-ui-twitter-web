import { Story, Meta } from "@storybook/html";
import { createTweet } from "./Tweet";

export default {
  title: "Components/Tweet",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story = () => {
  return createTweet();
};

export const Tweet =  Template.bind({});
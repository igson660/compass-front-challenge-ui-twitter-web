import { Story, Meta } from "@storybook/html";
import { createPost } from "./Post";

export default {
  title: "Components/Post",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story = () => {
  return createPost();
};

export const Post =  Template.bind({});

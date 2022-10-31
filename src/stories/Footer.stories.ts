import { Story, Meta } from "@storybook/html";
import { createFooter } from "./Footer";

export default {
  title: "Components/Footer",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story = () => {
  return createFooter();
};

export const Footer = Template.bind({});

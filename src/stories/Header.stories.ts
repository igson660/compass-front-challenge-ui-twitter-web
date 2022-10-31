import { Story, Meta } from "@storybook/html";
import { HeaderProps, createHeader } from "./Header";

export default {
  title: "Components/Header",
  argTypes: {
    label: { control: "text" },
  },
} as Meta;

const Template: Story<HeaderProps> = (args) => {
  return createHeader(args);
};

export const Header =  Template.bind({});
Header.args = {
  label: "Home",
};
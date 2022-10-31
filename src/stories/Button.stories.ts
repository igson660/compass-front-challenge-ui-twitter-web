import { Story, Meta } from '@storybook/html';
import { createButton, ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  argTypes: {
    backgroundColor: { control: 'color' },
    label: { control: 'text' },
    onClick: { action: 'onClick' },
    primary: { control: 'boolean' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
    },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => {
  return createButton(args);
};

export const Primary = Template.bind({});
Primary.args = {
  // primary: true,
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button2',
};

export const Large = Template.bind({});
Large.args = {
  // size: 'large',
  label: 'Button3',
};

export const Small = Template.bind({});
Small.args = {
  // size: 'small',
  label: 'Button4',
};

import { Meta, StoryObj } from "@storybook/react";
import Divider from "./Divider";
import React from "react";

type DividerProps = React.ComponentProps<typeof Divider>;

const meta: Meta<DividerProps> = {
  component: Divider,
  title: "Chapter/Divider",
  argTypes: {
    expresion: {
      control: {
        type: "text",
      },
      description: "The expresion to show",
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<DividerProps>;

export const DividerBox: Story = {
  name: "Divider",
  args: {
    expresion: "/",
  },
  render: (args) => <Divider {...args} />,
};

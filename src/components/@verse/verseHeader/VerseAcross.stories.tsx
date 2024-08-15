import type { Meta, StoryObj } from "@storybook/react";

import VerseAcross from "./VerseAcross";

type VerseAcrossProps = React.ComponentProps<typeof VerseAcross>;

const meta: Meta<VerseAcrossProps> = {
  component: VerseAcross,
  title: "Verse/Verse Header/VerseAcross",
  argTypes: {
    listType: {
      control: {
        type: "select",
        options: [
          "lower-alpha",
          "lower-roman",
          "upper-alpha",
          "upper-roman",
          "none",
          "disc",
          "circle",
          "square",
        ],
      },
      description: "Style of list",
    },
  },
};

export default meta;

type Story = StoryObj<VerseAcrossProps>;

export const VerseAcrossBox: Story = {
  name: "Verse Across",
  args: {
    listType: "lower-alpha",
  },
  render: (args) => <VerseAcross {...args} />,
};

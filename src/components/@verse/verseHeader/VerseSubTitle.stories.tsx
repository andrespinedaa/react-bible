import type { Meta, StoryObj } from "@storybook/react";

import VerseSubTitle from "./VerseSubTitle";

type VerseSubTitleProps = React.ComponentProps<typeof VerseSubTitle>;

const meta: Meta<VerseSubTitleProps> = {
  component: VerseSubTitle,
  title: "Verse/Verse Header/VerseSubTitle",
  argTypes: {
    subTitleType: {
      control: "select",
      options: ["h4", "h5", "h6"],
      description: "Type of subtitle",
    },
    subTitle: {
      control: "text",
      description: "Subtitle of the verse",
    },
    subTitleFormat: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "none"],
      description: "Format of the subtitle",
    },
  },
};

export default meta;

type Story = StoryObj<VerseSubTitleProps>;

export const VerseSubTitleBox: Story = {
  name: "Verse Subtitle",
  args: {
    subTitleType: "h4",
    subTitle: "Hello there!",
    subTitleFormat: "none",
  },
  render: (args) => <VerseSubTitle {...args} />,
};

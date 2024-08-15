import type { Meta, StoryObj } from "@storybook/react";
import VerseTitle from "./VerseTitle";
import { VerseBody } from "../verseBody";

type VerseTitleProps = React.ComponentProps<typeof VerseTitle>;

const meta: Meta<VerseTitleProps> = {
  component: VerseTitle,
  title: "Verse/Verse Header/VerseTitle",
  argTypes: {
    titleType: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3"],
      },
      description: "Type of headgraph",
    },
    title: {
      control: "text",
      description: "Title of the verse",
    },
    titleFormat: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<VerseTitleProps>;

export const VerseTitleBox: Story = {
  name: "Verse Title",
  args: {
    titleType: "h3",
    titleFormat: "none",
    title: "",
  },
  render: (args) => (
    <VerseBody>
      <VerseTitle {...args} />
    </VerseBody>
  ),
};

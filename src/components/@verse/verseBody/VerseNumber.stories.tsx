import type { Meta, StoryObj } from "@storybook/react";
import VerseNumber from "./VerseNumber";
import VerseBody from "./VerseBody";

type VerseNumberProps = React.ComponentProps<typeof VerseNumber>;

const meta: Meta<VerseNumberProps> = {
  component: VerseNumber,
  title: "Verse/Verse Body/VerseNumber",
  argTypes: {
    number: {
      control: "number",
      description: "The number of the verse",
    },
    numberType: {
      control: "radio",
      options: ["sub", "sup", "span"],
      description: "The position of the number relative to the text",
    },
    numberStyle: {
      control: "radio",
      options: ["bold", "italic", "boldAndItalic", "normal"],
      description: "The style of the number",
    },
    numberBig: {
      control: "boolean",
      description:
        "Whether to make the number big only if the number is the first (1) in the paragraph",
    },
  },
};

export default meta;

type Story = StoryObj<VerseNumberProps>;

export const VerseNumberBox: Story = {
  name: "Verse Number",
  args: {
    numberType: "span",
    numberStyle: "normal",
    numberBig: false,
    number: 1,
  },
  render: (args) => <VerseNumber {...args} />,
};

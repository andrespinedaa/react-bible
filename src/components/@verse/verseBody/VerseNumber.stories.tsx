import type { Meta, StoryObj } from "@storybook/react";
import VerseNumber from "./VerseNumber";
import VerseBody from "./VerseBody";
import Verses from "../Verses";
import Verse from "../Verse";
import VerseText from "./VerseText";

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
    firstNumberBig: {
      control: "boolean",
      description: "If the first number should be bigger",
    },
    children: {
      control: {
        disable: true,
      },
      description: "The children of the component",
    },
  },
};

export default meta;

type Story = StoryObj<VerseNumberProps>;

export const VerseNumberIsolated: Story = {
  name: "VerseNumber Isolated",
  args: {
    numberType: "span",
    numberStyle: "normal",
    firstNumberBig: true,
    number: 1,
  },
  render: (args) => <VerseNumber {...args} />,
};

export const VerseNumberIntegreated: Story = {
  name: "VerseNumber Integrated",
  args: {
    numberType: "span",
    numberStyle: "normal",
    firstNumberBig: true,
    number: undefined,
  },
  render: (args) => (
    <Verses>
      <Verse>
        <VerseBody>
          <VerseNumber {...args}/>
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

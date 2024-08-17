import type { Meta, StoryObj } from "@storybook/react";
import VerseReference from "./VerseReference";
import { VerseBody, VerseNumber, VerseText } from "../verseBody";
import { VersesBox } from "../Verses.stories";
import Verses from "../Verses";

type VerseReferenceProps = React.ComponentProps<typeof VerseReference>;

const meta: Meta<VerseReferenceProps> = {
  component: VerseReference,
  title: "Verse/Verse Reference/VerseReference",
  argTypes: {
    referenceFormat: {
      control: "inline-radio",
      options: ["uppercase", "lowercase"],
      description: "Reference format",
    },
    referenceType: {
      control: "inline-radio",
      options: ["letter", "number", "romanNumber"],
      description: "Reference type",
    },
    hookTagsType: {
      control: "inline-radio",
      options: ["parenthesis", "brackets", "none"],
      description: "Hook tags type",
    },
    hookType: {
      control: "inline-radio",
      options: ["span", "sup", "sub"],
      description: "Hook type",
    },
  },
};

export default meta;

type Story = StoryObj<VerseReferenceProps>;

export const VerseReferenceBox: Story = {
  args: {
    referenceFormat: "uppercase",
    referenceType: "letter",
    hookTagsType: "parenthesis",
    hookType: "span",
  },
  render: (args) => (
    <Verses {...VersesBox.args}>
      <VerseBody>
        <VerseNumber />
        <VerseText>
          <VerseReference {...args} />
        </VerseText>
      </VerseBody>
    </Verses>
  ),
};

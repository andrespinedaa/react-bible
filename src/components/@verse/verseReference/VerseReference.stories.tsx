import type { Meta, StoryObj } from "@storybook/react";
import VerseReference from "./VerseReference";
import { VerseBody, VerseNumber, VerseText } from "../verseBody";
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
      options: ["letter", "number"],
      description: "Reference type",
    },
    referenceStyle: {
      control: "inline-radio",
      options: ["none", "bold", "italic", "boldAndItalic"],
      description: "Reference style",
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
  name: "Verse Reference",
  args: {
    referenceFormat: "uppercase",
    referenceStyle: "none",
    referenceType: "letter",
    hookTagsType: "parenthesis",
    hookType: "span",
  },
  render: (args) => (
    <Verses
      verses={[
        {
          verses: [
            {
              text: `Estaba entonces enfermo uno llamado Lázaro, de Betania, la aldea de María y de Marta su hermana.@`,
              number: 1,
            },
            {
              text: "(María, cuyo hermano Lázaro estaba enfermo, fue la que ungió al Señor con perfume, y le enjugó los pies con sus cabellos.@)",
              number: 2,
            },
          ],
        },
      ]}
    >
      <VerseBody>
        <VerseNumber />
        <VerseText>
          <VerseReference {...args} />
        </VerseText>
      </VerseBody>
    </Verses>
  ),
};

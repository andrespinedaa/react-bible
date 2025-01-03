import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import {
  VerseBody,
  VerseNumber,
  VerseText,
  VerseReference,
  Verses,
  Verse,
} from ".";

type VerseReferenceProps = React.ComponentProps<typeof VerseReference>;

const meta: Meta<VerseReferenceProps> = {
  component: VerseReference,
  title: "Verse/Verse Reference/VerseReference",
  argTypes: {
    referenceFormat: {
      control: "text",
      description: "Reference format",
    },
    referenceType: {
      control: "inline-radio",
      options: ["letter", "number"],
      description: "Reference type",
    },
    referenceWeight: {
      control: "text",
      description: "Weight of the reference",
    },
    referenceStyle: {
      control: "text",
      description: "Reference style",
    },
    closingTag: {
      control: "text",
      description: "tags enclosing the reference.",
    },
    openingTag: {
      control: "text",
      description: "tags enclosing the reference.",
    },
    inlineLevel: {
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
    referenceWeight: "normal",
    referenceFormat: "none",
    referenceStyle: "none",
    referenceType: "number",
    inlineLevel: "span",
    openingTag: "[",
    closingTag: "]",
  },
  render: (args) => (
    <Verses
      paragraphs={[
        {
          verses: [
            {
              text: `Estaba entonces enfermo uno llamado Lázaro, de Betania, la aldea de María y de Marta su hermana.@`,
              number: 1,
              references: 1,
            },
            {
              text: "(María, cuyo hermano Lázaro estaba enfermo, fue la que ungió al Señor con perfume, y le enjugó los pies con sus cabellos.@)",
              number: 2,
              references: 2,
            },
          ],
        },
      ]}
    >
      <Verse>
        <VerseBody>
          <VerseNumber />
          <VerseText>
            <VerseReference {...args} />
          </VerseText>
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

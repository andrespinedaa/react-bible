import type { Meta, StoryObj } from "@storybook/react";
import Verse from "./Verse";
import { VerseBody, VerseNumber, VerseText } from "./verseBody";
import { VerseHeader, VerseSubTitle, VerseTitle } from "./verseHeader";
import { VerseReference } from "./verseReference";
import Verses from "./Verses";

type VersesProps = React.ComponentProps<typeof Verses>;

const meta: Meta<VersesProps> = {
  title: "Verse/Verses",
  component: Verses,
  argTypes: {
    alignText: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Align text",
    },
    separateVerses: {
      control: "boolean",
      description: "Separate verses",
    },
    separateParagraphs: {
      control: "boolean",
      description: "Separate paragraphs",
    },
    paragraphs: {
      control: "object",
      description: "Paragraph list",
    },
    psalmStyle: {
      control: "boolean",
      description: "Use psalm style",
    },
    children: {
      control: {
        disable: true,
      },
      description: "Children",
    },
  },
};

export default meta;

type Story = StoryObj<VersesProps>;

export const VersesNormal: Story = {
  name: "Verses Normal",
  args: {
    alignText: "left",
    separateParagraphs: true,
    separateVerses: false,
    psalmStyle: true,
  },
  render: (args) => (
    <Verses {...args}>
      <Verse>
        <VerseHeader>
          <VerseTitle />
          <VerseSubTitle />
        </VerseHeader>
        <VerseBody>
          <VerseNumber />
          <VerseText>
            <VerseReference />
          </VerseText>
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

export const VersesPsalm: Story = {
  name: "Verses Psalm",
  args: {
    alignText: "left",
    separateParagraphs: true,
    separateVerses: true,
    psalmStyle: true,
    paragraphs: [
      {
        title: "El justo y los pecadores",
        verses: [
          {
            number: 1,
            text: "Bienaventurado el varón que no anduvo en consejo de malos,\nNi estuvo en camino de pecadores,\nNi en silla de escarnecedores se ha sentado;",
          },
          {
            number: 2,
            text: "Sino que en la ley de Jehová está su delicia,\nY en su ley medita de día y de noche.",
          },
          {
            number: 3,
            text: "Será como árbol plantado junto a corrientes de aguas,\nQue da su fruto en su tiempo,\nY su hoja no cae;\nY todo lo que hace, prosperará.",
          },
        ],
      },
      {
        verses: [
          {
            number: 4,
            text: "No así los malos,\nQue son como el tamo que arrebata el viento.",
          },
          {
            number: 5,
            text: "Por tanto, no se levantarán los malos en el juicio,\nNi los pecadores en la congregación de los justos.",
          },
          {
            number: 6,
            text: "Porque Jehová conoce el camino de los justos;\nMas la senda de los malos perecerá.",
          },
        ],
      },
    ],
  },
  render: (args) => (
    <Verses {...args}>
      <Verse>
        <VerseHeader>
          <VerseTitle />
          <VerseSubTitle />
        </VerseHeader>
        <VerseBody>
          <VerseNumber />
          <VerseText>
            <VerseReference />
          </VerseText>
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

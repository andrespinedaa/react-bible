import type { Meta, StoryObj } from "@storybook/react";
import { VerseBody, VerseNumber, VerseText } from "./verseBody";
import { VerseHeader, VerseSubTitle, VerseTitle } from "./verseHeader";
import Verses from "./Verses";

type VersesProps = React.ComponentProps<typeof Verses>;

const meta: Meta<VersesProps> = {
  title: "Verse/Verses",
  component: Verses,
  argTypes: {
    firstNumber: {
      control: "select",
      options: ["chapter", "verse", "chapterAndVerse"],
      description: "Number to display, verse, chapter, or both",
    },
    alignText: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Align text",
    },
    firstNumberBig: {
      control: "boolean",
      description: "Make the first number big",
    },
    separateVerses: {
      control: "boolean",
      description: "Separate verses",
    },
    verses: {
      control: "object",
      description: "Paragraph list",
    },
    children: {
      control: {
        disable: true,
      },
      description: "Children",
    },
    psalmStyle: {
      control: "boolean",
      description: "Use psalm style",
    },
  },
};

export default meta;

type Story = StoryObj<VersesProps>;

export const VersesBox: Story = {
  name: "Verses",
  args: {
    alignText: "left",
    firstNumber: "chapter",
    firstNumberBig: true,
    separateVerses: true,
    psalmStyle: true,
    verses: [
      {
        title: "El justo y los pecadores",
        verses: [
          {
            number: 1,
            text: "Bienaventurado el varón que no anduvo en \@ consejo de malos,\nNi estuvo en camino de pecadores,\nNi en silla de escarnecedores se ha sentado;",
          },
          {
            number: 2,
            text: "Sino que en la ley de Jehová está su delicia,\nY en su ley medita de día y de noche.\n",
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
      <VerseHeader>
        <VerseTitle />
        <VerseSubTitle />
      </VerseHeader>
      <VerseBody>
        <VerseNumber />
        <VerseText />
      </VerseBody>
    </Verses>
  ),
};

/* 

1 Bienaventurado el varón que no anduvo en consejo de malos,
Ni estuvo en camino de pecadores,
Ni en silla de escarnecedores se ha sentado;
2 Sino que en la ley de Jehová está su delicia,
Y en su ley medita de día y de noche.
3 Será como árbol plantado junto a corrientes de aguas,(A)
Que da su fruto en su tiempo,
Y su hoja no cae;
Y todo lo que hace, prosperará.

4 No así los malos,
Que son como el tamo que arrebata el viento.
5 Por tanto, no se levantarán los malos en el juicio,
Ni los pecadores en la congregación de los justos.
6 Porque Jehová conoce el camino de los justos;
Mas la senda de los malos perecerá.

*/

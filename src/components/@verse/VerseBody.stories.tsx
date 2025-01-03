import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";
import {
  VerseReference,
  Verses,
  VerseNumber,
  VerseBody,
  VerseText,
  Verse,
} from ".";

type VerseBodyProps = React.ComponentProps<typeof VerseBody>;

const meta: Meta<VerseBodyProps> = {
  component: VerseBody,
  subcomponents: {
    "Verse Text": VerseText as ComponentType<unknown>,
    "Verse Number": VerseNumber as ComponentType<unknown>,
  },
  title: "Verse/Verse body/Verse Body",
  argTypes: {
    children: {
      control: {
        disable: true,
      },
      description: "The children of the verse body",
    },
  },
};

export default meta;

type Story = StoryObj<VerseBodyProps>;

export const VerseBodyNormal: Story = {
  name: "Verse normal",
  render: () => (
    <Verses>
      <Verse>
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

export const VerseBodyProphecy: Story = {
  name: "Verse prophecy",
  render: () => (
    <Verses
      paragraphs={[
        {
          verses: [
            {
              text: " y diciendo: Arrepentíos, porque el reino de los cielos@ se ha acercado.@",
              number: 2,
              references: {
                multipleRef: [1, 2],
              },
            },
            {
              text: "Pues este es aquel de quien habló el profeta Isaías, cuando dijo: Voz del que clama en el desierto: Preparad el camino del Señor, Enderezad sus sendas.@",
              number: 3,
              prophecy: true,
              references: 3,
            },
          ],
        },
      ]}
    >
      <Verse>
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

import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import VerseText from "./VerseText";
import Verses from "../Verses";
import Verse from "../Verse";
import VerseBody from "./VerseBody";

type VerseTextProps = ComponentProps<typeof VerseText>;

const meta: Meta<VerseTextProps> = {
  component: VerseText,
  title: "Verse/Verse Body/VerseText",
  argTypes: {
    text: {
      control: "text",
      description: "The text of the verse",
    },
  },
};

export default meta;

type Story = StoryObj<VerseTextProps>;

export const VerseTextIsolated: Story = {
  name: "VerseText Isolated",
  args: {
    text: "Bienaventurado el varón que no anduvo en consejo de malos,\nni estuvo en camino de pecadores,\nni en silla de escarnecedores se ha sentado;",
  },
  render: (args) => <VerseText {...args} />,
};

export const VerseTextIntegreated: Story = {
  name: "VerseText Integrated",
  render: () => (
    <Verses>
      <Verse>
        <VerseBody>
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

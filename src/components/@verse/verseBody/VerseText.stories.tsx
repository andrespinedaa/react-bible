import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import VerseText from "./VerseText";

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

export const VerseTextBox: Story = {
  name: "Verse Text",
  args: {
    text: "Bienaventurado el jvarón que no anduvo en consejo de malos,\nni estuvo en j camino de pecadores,\nni en silla de escarnecedores se ha sentado;",
  },
  render: (args) => <VerseText {...args} />,
};

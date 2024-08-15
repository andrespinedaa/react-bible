import type { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";

import Verses from "../Verses";
import VerseBody from "./VerseBody";
import VerseNumber from "./VerseNumber";
import VerseText from "./VerseText";

type VerseBodyProps = React.ComponentProps<typeof VerseBody>;

const meta: Meta<VerseBodyProps> = {
  component: VerseBody,

  subcomponents: {
    "Verse Text": VerseText as ComponentType<unknown>,
    "Verse Number": VerseNumber as ComponentType<unknown>,
  },
  title: "Verse/Verse body/Verse Body",
  argTypes: {
    verseSeparate: {
      control: "boolean",
      description: "Separate the verse number from the verse text",
    },
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

export const VerseBodyBox: Story = {
  name: "Verse Body",
  args: {
    verseSeparate: false,
  },
  render: (args) => (
    <Verses>
      <VerseBody {...args}>
        <VerseNumber />
        <VerseText />
      </VerseBody>
    </Verses>
  ),
};

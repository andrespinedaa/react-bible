import type { Meta, StoryObj } from "@storybook/react";
import VerseTitle from "./VerseTitle";
import { VerseBody, VerseNumber, VerseText } from "../verseBody";
import Verses from "../Verses";
import Verse from "../Verse";
import VerseHeader from "./VerseHeader";

type VerseTitleProps = React.ComponentProps<typeof VerseTitle>;

const meta: Meta<VerseTitleProps> = {
  component: VerseTitle,
  title: "Verse/Verse Header/VerseTitle",
  argTypes: {
    titleType: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3"],
      },
      description: "Type of headgraph",
    },
    title: {
      control: "text",
      description: "Title of the verse",
    },
    titleFormat: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "none"],
    },
  },
};

export default meta;

type Story = StoryObj<VerseTitleProps>;

export const VerseTitleIsolated: Story = {
  name: "VerseTitle Isolated",
  args: {
    titleType: "h3",
    titleFormat: "none",
    title: "Title of the verse",
  },
  render: (args) => <VerseTitle {...args} />,
};

export const VerseTitleIntegrated: Story = {
  name: "VerseTitle Integrated",
  args: {
    titleType: "h3",
    titleFormat: "none",
  },
  render: (args) => (
    <Verses
      paragraphs={[
        {
          title: "La creación",
          verses: [
            {
              number: 1,
              text: "En el principio creó Dios los cielos y la tierra. ",
            },
          ],
        },
      ]}
    >
      <Verse>
        <VerseHeader>
          <VerseTitle {...args} />
        </VerseHeader>
        <VerseBody>
          <VerseNumber />
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

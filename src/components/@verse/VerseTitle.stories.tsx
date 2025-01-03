import type { Meta, StoryObj } from "@storybook/react";
import {
  VerseBody,
  VerseNumber,
  VerseText,
  VerseTitle,
  Verses,
  Verse,
  VerseHeader,
} from ".";

type VerseTitleProps = React.ComponentProps<typeof VerseTitle>;

const meta: Meta<VerseTitleProps> = {
  component: VerseTitle,
  title: "Verse/Verse Header/VerseTitle",
  argTypes: {
    headingLevel: {
      control: {
        type: "select",
        options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      },
      description: "Type of headgraph",
    },
    title: {
      control: "text",
      description: "Title of the verse",
    },
    titleFormat: {
      control: "text",
      description: "Property text-transform"
    },
  },
};

export default meta;

type Story = StoryObj<VerseTitleProps>;

export const VerseTitleIsolated: Story = {
  name: "VerseTitle Isolated",
  args: {
    headingLevel: "h3",
    titleFormat: "none",
    title: "Title of the verse",
  },
  render: (args) => <VerseTitle {...args} />,
};

export const VerseTitleIntegrated: Story = {
  name: "VerseTitle Integrated",
  args: {
    headingLevel: "h3",
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

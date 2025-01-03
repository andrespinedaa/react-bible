import type { Meta, StoryObj } from "@storybook/react";
import {
  VerseBody,
  VerseNumber,
  VerseText,
  Verses,
  Verse,
  VerseHeader,
  VerseSubTitle,
} from ".";

type VerseSubTitleProps = React.ComponentProps<typeof VerseSubTitle>;

const meta: Meta<VerseSubTitleProps> = {
  component: VerseSubTitle,
  title: "Verse/Verse Header/VerseSubTitle",
  argTypes: {
    headingLevel: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "Type of subtitle",
    },
    subTitle: {
      control: "text",
      description: "Subtitle of the verse",
    },
    subTitleFormat: {
      control: "text",
      description: "Format of the subtitle",
    },
  },
};

export default meta;

type Story = StoryObj<VerseSubTitleProps>;

export const VerseSubTitleIsolated: Story = {
  name: "VerseSubtitle Isolated",
  args: {
    headingLevel: "h4",
    subTitle: "This is a subtitle",
    subTitleFormat: "capitalize",
  },
  render: (args) => <VerseSubTitle {...args} />,
};
export const VerseSubTitleIntegrated: Story = {
  name: "VerseSubtitle Integrated",
  args: {
    headingLevel: "h4",
    subTitleFormat: "none",
  },
  render: (args) => (
    <Verses
      paragraphs={[
        {
          subTitle: "La creacion",
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
          <VerseSubTitle {...args} />
        </VerseHeader>
        <VerseBody>
          <VerseNumber />
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

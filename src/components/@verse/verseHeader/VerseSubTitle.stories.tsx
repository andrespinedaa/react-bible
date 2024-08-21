import type { Meta, StoryObj } from "@storybook/react";

import VerseSubTitle from "./VerseSubTitle";
import Verses from "../Verses";
import Verse from "../Verse";
import VerseHeader from "./VerseHeader";
import { VerseBody, VerseNumber, VerseText } from "../verseBody";

type VerseSubTitleProps = React.ComponentProps<typeof VerseSubTitle>;

const meta: Meta<VerseSubTitleProps> = {
  component: VerseSubTitle,
  title: "Verse/Verse Header/VerseSubTitle",
  argTypes: {
    subTitleType: {
      control: "select",
      options: ["h4", "h5", "h6"],
      description: "Type of subtitle",
    },
    subTitle: {
      control: "text",
      description: "Subtitle of the verse",
    },
    subTitleFormat: {
      control: "select",
      options: ["uppercase", "lowercase", "capitalize", "none"],
      description: "Format of the subtitle",
    },
  },
};

export default meta;

type Story = StoryObj<VerseSubTitleProps>;

export const VerseSubTitleIsolated: Story = {
  name: "VerseSubtitle Isolated",
  args: {
    subTitleType: "h4",
    subTitle: "Hello there!",
    subTitleFormat: "none",
  },
  render: (args) => <VerseSubTitle {...args} />,
};
export const VerseSubTitleIntegrated: Story = {
  name: "VerseSubtitle Integrated",
  args: {
    subTitleType: "h4",
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

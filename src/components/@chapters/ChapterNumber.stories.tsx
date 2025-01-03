import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { Verse, VerseBody, VerseNumber, Verses, VerseText } from "../@verse";
import ChapterNumber from "./ChapterNumber";

type ChapterNumberProps = React.ComponentProps<typeof ChapterNumber>;

const meta: Meta<ChapterNumberProps> = {
  component: ChapterNumber,
  title: "Chapter/ChapterNumber",
  argTypes: {
    chapterNumber: {
      control: {
        type: "number",
      },
      description: "Number of the chapter",
    },
  },
};

export default meta;

type Story = StoryObj<ChapterNumberProps>;

export const ChapterNumberBox: Story = {
  name: "Chapter Number",
  args: {
    chapterNumber: 1,
  },
  render: (args) => (
    <Verses>
      <Verse>
        <VerseBody>
          <VerseNumber>
            <ChapterNumber {...args} />
          </VerseNumber>
          <VerseText />
        </VerseBody>
      </Verse>
    </Verses>
  ),
};

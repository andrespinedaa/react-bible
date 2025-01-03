import { Meta, StoryObj } from "@storybook/react";
import React from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { BibleBody, BibleHeader } from "../@bible";
import {
  Verse,
  VerseBody,
  VerseHeader,
  VerseNumber,
  Verses,
  VerseSubTitle,
  VerseText,
  VerseTitle,
} from "../@verse";
import ChapterButtons from "./ChapterButtons";
import { useBibleContext } from "../@contexts";

type ChapterButtonsProps = React.ComponentProps<typeof ChapterButtons>;

const meta: Meta<ChapterButtonsProps> = {
  component: ChapterButtons,
  title: "Chapter/ChapterButtons",
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ChapterButtonsProps>;

export const ChapterButtonsBox: Story = {
  name: "ChapterButtons Arrows",
  args: {
    step: "NEXT_CHAPTER",
  },
  render: (args) => (
    <BibleBody>
      <ChapterButtons step="PREV_CHAPTER">
        <MdNavigateBefore />
      </ChapterButtons>
      <Verses>
        <Verse>
          <VerseHeader>
            <VerseTitle />
            <VerseSubTitle />
          </VerseHeader>
          <VerseBody>
            <VerseText />
            <VerseNumber />
          </VerseBody>
        </Verse>
      </Verses>
      <ChapterButtons {...args}>
        <MdNavigateNext />
      </ChapterButtons>
    </BibleBody>
  ),
};

export const ChapterButtonsMultiple: Story = {
  name: "ChapterButtons Multiple",
  args: {
    step: "NAVI_CHAPTER",
    chapterNum: 1,
  },
  render: (args) => {
    const { bible } = useBibleContext();

    return (
      <>
        <BibleHeader>
          {bible.book.chapters.map((chapter) => {
            return (
              <ChapterButtons
                {...args}
                key={bible.book.name + chapter.number}
                chapterNum={chapter.number}
              >
                {chapter.number}
              </ChapterButtons>
            );
          })}
        </BibleHeader>
        <BibleBody>
          <Verses>
            <Verse>
              <VerseHeader>
                <VerseTitle />
                <VerseSubTitle />
              </VerseHeader>
              <VerseBody>
                <VerseText />
                <VerseNumber />
              </VerseBody>
            </Verse>
          </Verses>
        </BibleBody>
      </>
    );
  },
};

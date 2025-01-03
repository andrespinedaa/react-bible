import type { Meta, StoryObj } from "@storybook/react";
import { bibleMock } from "../../utilities/";
import {
  VerseBody,
  VerseHeader,
  VerseNumber,
  VerseReference,
  VerseSubTitle,
  VerseText,
  VerseTitle,
  Verse,
  Verses,
  Divider,
  CrossReferences,
} from "../@verse";
import Bible from "./Bible";
import ChapterNumber from "../@chapters/ChapterNumber";
import VerseTo from "../@verse/VerseTo";
import { BookName } from "../@book";
import { ChapterButtons } from "../@chapters";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import LinkReference from "../@verse/LinkReference";
import ShareStories from "../@verse/ShareStories";

type BibleProps = React.ComponentProps<typeof Bible>;

const meta: Meta<BibleProps> = {
  component: Bible,
  subcomponents: {
    "Bible Header": Bible.BibleHeader as React.ComponentType<unknown>,
    "Bible Body": Bible.BibleBody as React.ComponentType<unknown>,
    "Bible Footer": Bible.BibleFooter as React.ComponentType<unknown>,
  },
  title: "Bible/Bible",
  argTypes: {
    bible: {
      description: "The bible object to be used",
      control: {
        type: "object",
      },
    },
    children: {
      description: "The children to be rendered",
      control: {
        disable: true,
      },
    },
    size: {
      description: "The size of the bible",
      control: "select",
      options: ["small", "medium", "portrait", "large", "xlarge"],
    },
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<BibleProps>;

export const BibleBox: Story = {
  name: "Bible",
  args: {
    bible: bibleMock,
  },
  render: (args) => (
    <Bible {...args}>
      <Bible.BibleHeader>
        <BookName />
        <ChapterNumber />
        <VerseTo />
      </Bible.BibleHeader>
      <Bible.BibleBody>
        <ChapterButtons step="PREV_CHAPTER">
          <MdNavigateBefore size={"30px"} />
        </ChapterButtons>
        <Verses>
          <Verse>
            <VerseHeader>
              <VerseTitle />
              <ShareStories />
              <VerseSubTitle />
            </VerseHeader>
            <VerseBody>
              <VerseNumber />
              <VerseText>
                <Divider expresion="(" />
                <VerseReference />
                <Divider expresion=")" />
              </VerseText>
            </VerseBody>
          </Verse>
        </Verses>
        <ChapterButtons step={"NEXT_CHAPTER"}>
          <MdNavigateNext size={"30px"} />
        </ChapterButtons>
      </Bible.BibleBody>
      <Bible.BibleFooter>
        <CrossReferences>
          <LinkReference />
        </CrossReferences>
      </Bible.BibleFooter>
    </Bible>
  ),
};

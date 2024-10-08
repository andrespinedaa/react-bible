import type { Meta, StoryObj } from "@storybook/react";
import { bibleMock } from "../../utilities/constaints";
import {
  VerseBody,
  VerseHeader,
  VerseNumber,
  VerseReference,
  VerseSubTitle,
  VerseText,
  VerseTitle,
} from "../@verse";
import Verse from "../@verse/Verse";
import Verses from "../@verse/Verses";
import Bible from "./Bible";
import ChapterNumber from "../@chapters/ChapterNumber";

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
      <Bible.BibleHeader />
      <Bible.BibleBody>
        <Verses>
          <Verse>
            <VerseHeader>
              <VerseTitle />
              <VerseSubTitle />
            </VerseHeader>
            <VerseBody>
              <VerseNumber>
                <ChapterNumber />
              </VerseNumber>
              <VerseText>
                <VerseReference />
              </VerseText>
            </VerseBody>
          </Verse>
        </Verses>
      </Bible.BibleBody>
      <Bible.BibleFooter />
    </Bible>
  ),
};

import { Meta, StoryObj } from "@storybook/react";
import { ComponentType } from "react";
import {
  Verse,
  VerseBody,
  VerseHeader,
  VerseNumber,
  VerseReference,
  VerseSubTitle,
  VerseText,
  VerseTitle,
} from "../@verse";
import Verses from "../@verse/Verses";
import BibleBody from "./BibleBody";

type BibleBodyProps = React.ComponentProps<typeof BibleBody>;

const meta: Meta<BibleBodyProps> = {
  component: BibleBody,
  subcomponents: { Verses: Verses as ComponentType<unknown> },
  title: "Bible/Bible Body/BibleBody",
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<BibleBodyProps>;

export const BibleBodyBox: Story = {
  name: "Bible Body",
  render: () => (
    <BibleBody>
      <Verses>
        <Verse>
          <VerseHeader>
            <VerseTitle />
            <VerseSubTitle />
          </VerseHeader>
          <VerseBody>
            <VerseNumber />
            <VerseText>
              <VerseReference />
            </VerseText>
          </VerseBody>
        </Verse>
      </Verses>
    </BibleBody>
  ),
};

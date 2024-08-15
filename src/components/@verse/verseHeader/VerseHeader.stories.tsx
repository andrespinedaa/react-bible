import type { Meta, StoryObj } from "@storybook/react";

import VerseHeader from "./VerseHeader";
import { ComponentProps, ComponentType } from "react";
import VerseTitle from "./VerseTitle";
import VerseAcross from "./VerseAcross";
import VerseSubTitle from "./VerseSubTitle";
import { VerseBody } from "../verseBody";

type VerseHeaderProps = ComponentProps<typeof VerseHeader>;

const meta: Meta<VerseHeaderProps> = {
  component: VerseHeader,
  subcomponents: {
    "Verse Title": VerseTitle as ComponentType<unknown>,
    "Verse Subtitle": VerseTitle as ComponentType<unknown>,
    "Verse Across": VerseAcross as ComponentType<unknown>,
  },
  title: "Verse/Verse Header/VerseHeader",
  argTypes: {
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<VerseHeaderProps>;

export const VerseHeaderBox: Story = {
  name: "Verse Header",
  render: () => (
    <VerseBody>
      <VerseHeader>
        <VerseTitle />
        <VerseSubTitle />
      </VerseHeader>
    </VerseBody>
  ),
};

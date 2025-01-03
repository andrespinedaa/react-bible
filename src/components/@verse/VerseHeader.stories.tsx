import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps, ComponentType } from "react";
import { Verse, VerseHeader, Verses, VerseSubTitle, VerseTitle } from ".";

type VerseHeaderProps = ComponentProps<typeof VerseHeader>;

const meta: Meta<VerseHeaderProps> = {
  component: VerseHeader,
  subcomponents: {
    "Verse Title": VerseTitle as ComponentType<unknown>,
    "Verse Subtitle": VerseTitle as ComponentType<unknown>,
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
    <Verses>
      <Verse>
        <VerseHeader>
          <VerseTitle />
          <VerseSubTitle />
        </VerseHeader>
      </Verse>
    </Verses>
  ),
};

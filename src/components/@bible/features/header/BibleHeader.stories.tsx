import type { Meta, StoryObj } from "@storybook/react";

import BibleHeader from "./BibleHeader";
import BibleSubHeader from "./BibleSubHeader";
import BookName from "../../../@book/BookName";
import ChapterNumber from "../../../@chapters/ChapterNumber";

type BibleHeaderProps = React.ComponentProps<typeof BibleHeader>;

const meta: Meta<BibleHeaderProps> = {
  component: BibleHeader,
  subcomponents: {
    "Bible SubHeader": BibleSubHeader as React.ComponentType<unknown>,
  },
  title: "Bible/Bible Header/BibleHeader",
  argTypes: {
    children: {
      description: "The children to be rendered",
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<BibleHeaderProps>;

export const BibleHeaderBox: Story = {
  name: "Bible Header",
  render: () => (
    <BibleHeader>
      <BookName />
      <ChapterNumber />
    </BibleHeader>
  ),
};

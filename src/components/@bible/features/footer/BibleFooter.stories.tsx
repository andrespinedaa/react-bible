import type { Meta, StoryObj } from "@storybook/react";

import BibleFooter from "./BibleFooter";
import VerseAcross from "../../../@verse/verseHeader/VerseAcross";
import { ComponentType } from "react";

type BibleFooterProps = React.ComponentProps<typeof BibleFooter>;

const meta: Meta<BibleFooterProps> = {
  component: BibleFooter,
  subcomponents: {
    "Verses Across": VerseAcross as ComponentType<unknown>,
  },
  title: "Bible/Bible Footer/BibleFooter",
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

type Story = StoryObj<BibleFooterProps>;

export const BibleFooterBox: Story = {
  name: "Bible Footer",
  render: () => <BibleFooter />,
};

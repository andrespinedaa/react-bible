import type { Meta, StoryObj } from "@storybook/react";

import BibleSubHeader from "./BibleSubHeader";

type BibleSubHeaderProps = React.ComponentProps<typeof BibleSubHeader>;

const meta: Meta<BibleSubHeaderProps> = {
  component: BibleSubHeader,
  title: "Bible/Bible Header/BibleSubHeader",
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

type Story = StoryObj<BibleSubHeaderProps>;

export const BibleSubHeaderBox: Story = {
  name: "Bible Sub Header",
  render: () => <BibleSubHeader />,
};
import type { Meta, StoryObj } from "@storybook/react";
import { BibleBody } from "../@bible";
import CrossReferences from "./CrossReferences";
import LinkReference from "./LinkReference";

type CrossReferencesProps = React.ComponentProps<typeof CrossReferences>;

const meta: Meta<CrossReferencesProps> = {
  component: CrossReferences,
  title: "Reference/Cross References",
  argTypes: {
    listType: {
      control: {
        type: "select",
        options: [
          "lower-alpha",
          "lower-roman",
          "upper-alpha",
          "upper-roman",
          "none",
          "disc",
          "circle",
          "square",
        ],
      },
      description: "Style of list",
    },
    crossReferences: {
      control: {
        type: "object"
      }
    },
    maxColumns: {
      control: {
        type: "number",
      },
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<CrossReferencesProps>;

export const CrossReferencesBox: Story = {
  name: "Verse Across",
  args: {
    listType: "lower-alpha",
    maxColumns: 3,

  },
  render: (args) => (
    <BibleBody>
      <CrossReferences {...args}>
        <LinkReference />
      </CrossReferences>
    </BibleBody>
  ),
};

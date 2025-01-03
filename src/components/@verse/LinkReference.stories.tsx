import { Meta, StoryObj } from "@storybook/react";
import LinkReference from "./LinkReference";
import React from "react";

type LinkReferenceProps = React.ComponentProps<typeof LinkReference>;

const meta: Meta<LinkReferenceProps> = {
  component: LinkReference,
  title: "Reference/LinkReference",
  argTypes: {
    nameOrAbrev: {
      control: {
        type: "radio",
        options: ["name", "abrev"],
      },
    },
    linkType: {
      control: {
        type: "text",
      }
    }
  },
};

export default meta;

type Story = StoryObj<LinkReferenceProps>;

export const LinkReferenceBox: Story = {
  name: "LinkReference",
  args: {
    nameOrAbrev: "abrev",
    linkType: "upper-alpha",
    linkVerse: {
      bookName: "Mateo",
      abrevBookName: "Mt",
      chapterNumber: 1,
      verseNumberStart: 1,
      verseNumberFinish: 3
    }
  },
  render: (args) => <LinkReference {...args} />,
};

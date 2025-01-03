import { Meta, StoryObj } from "@storybook/react";
import ShareStories from "./ShareStories";
import React from "react";
import Verse from "./Verse";
import VerseHeader from "./VerseHeader";
import VerseTitle from "./VerseTitle";

type ShareStoriesProps = React.ComponentProps<typeof ShareStories>;

const meta: Meta<ShareStoriesProps> = {
  component: ShareStories,
  title: "Reference/ShareStories",
  argTypes: {
    sharedStories: {
      control: "object",
    },
    children: {
      control: {
        disable: true,
      },
    },
  },
};

export default meta;

type Story = StoryObj<ShareStoriesProps>;

export const ShareStoriesBox: Story = {
  name: "ShareStories",
  args: {},
  render: (args) => (
    <Verse>
      <VerseHeader>
        <VerseTitle />
        <ShareStories {...args} />
      </VerseHeader>
    </Verse>
  ),
};

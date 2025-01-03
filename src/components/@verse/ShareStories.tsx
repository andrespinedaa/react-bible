import React from "react";
import styled from "styled-components";
import { linkedVerses } from "../../utilities";
import { useVerseContext } from "../@contexts";
import LinkReference from "./LinkReference";

interface ShareStoriesProps extends React.ComponentPropsWithRef<"div"> {
  children?: React.ReactNode;
  sharedStories?: linkedVerses[];
}
const StyledShareStories = styled.div``;

function ShareStories({
  sharedStories = undefined,
  children,
  ...restProps
}: ShareStoriesProps) {
  const extSharedStories = useVerseContext();
  const innerSharedStories = sharedStories ?? extSharedStories.sharedStories;

  if (!innerSharedStories) return null;

  return (
    <StyledShareStories {...restProps}>
      {innerSharedStories.map((shareStory) => {
        return <LinkReference linkVerse={shareStory} />;
      })}
    </StyledShareStories>
  );
}

export default ShareStories;

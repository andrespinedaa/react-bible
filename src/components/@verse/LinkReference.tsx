import React from "react";
import styled from "styled-components";
import { linkedVerses } from "../../utilities";
import { useOptioncalCrossRefCtx } from "./CrossReferences";
import Divider from "./Divider";

interface LinkReferenceProps extends React.ComponentPropsWithRef<"a"> {
  linkVerse?: linkedVerses;
  linkType?: React.CSSProperties["listStyleType"];
  nameOrAbrev?: "name" | "abrev";
}

const StyledLink = styled.a`
  text-decoration: none;
`;

function LinkReference({
  linkVerse = undefined,
  nameOrAbrev = "abrev",
  linkType = "upper-alpha",
  ...restProps
}: LinkReferenceProps) {
  const extLinkVerse = useOptioncalCrossRefCtx();
  const innerLinkVerse = linkVerse ?? extLinkVerse ?? ({} as linkedVerses);

  return (
    <StyledLink {...restProps}>
      {nameOrAbrev === "name"
        ? innerLinkVerse.bookName
        : innerLinkVerse.abrevBookName}
      <>
        <Divider expresion=" " /> {innerLinkVerse.chapterNumber}
        <Divider expresion=":" /> {innerLinkVerse.verseNumberStart}
        {innerLinkVerse.verseNumberFinish && (
          <>
            <Divider expresion="-" />
            {innerLinkVerse.verseNumberFinish}
          </>
        )}
      </>
    </StyledLink>
  );
}

export default LinkReference;

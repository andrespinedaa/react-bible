import React from "react";
import styled from "styled-components";
import { bible } from "../../utilities";
import { BibleProvider } from "../@contexts";
import { sizes } from "../@theme";
import { BibleBody, BibleFooter, BibleHeader } from "./features";

export interface BibleProps extends React.ComponentPropsWithRef<"div"> {
  bible: bible;
  children: React.ReactNode;
  size?: sizes;
}

const StyledBible = styled.div<{ $size?: sizes }>`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  box-shadow: 0 10px 15px 3px rgba(0, 0, 0, 0.3);
  padding: 16px;
  width: ${(props) =>
    props.theme.bibleSizes.bibleWidth[
      props.$size ? props.$size : props.theme.defaultSize
    ]};
  height: ${(props) =>
    props.theme.bibleSizes.bibleHeight[
      props.$size ? props.$size : props.theme.defaultSize
    ]};
  font-family: ${(props) => props.theme.bibleFonts.primary};
`;

function Bible({
  bible,
  children,
  size = undefined,
  ...restProps
}: BibleProps) {
  return (
    <BibleProvider value={{ bible }}>
      <StyledBible $size={`${size}`} {...restProps}>
        {children}
      </StyledBible>
    </BibleProvider>
  );
}

export default Object.assign(Bible, {
  BibleHeader: BibleHeader,
  BibleBody: BibleBody,
  BibleFooter: BibleFooter,
});

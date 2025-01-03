import React from "react";
import styled from "styled-components";
import { useCreateSafeContext } from "../../hooks";
import { linkedVerses } from "../../utilities";
import { useBibleContext } from "../@contexts";

interface CrossReferencesProps extends React.ComponentPropsWithRef<"ul"> {
  children?: React.ReactNode;
  listType?: React.CSSProperties["listStyleType"];
  crossReferences?: (linkedVerses | linkedVerses[])[];
  direction?: "horizontal" | "vertical";
  maxColumns?: number;
}

const StyledCrossReferences = styled.ul<{
  $listType: React.CSSProperties["listStyleType"];
  $direction: "horizontal" | "vertical";
  $maxColumns: number;
}>`
  list-style-type: ${(props) => props.$listType};

  /* display: grid;
  grid-template-columns: ${(props) =>
    props.$direction === "horizontal"
      ? `repeat(${props.$maxColumns}, 1fr)`
      : "1fr"};
  grid-auto-rows: auto;
  text-align: center;
  gap: 0px; */
`;

const StyledSubCrossReferences = styled.ul`
  list-style: none; /* Por defecto, sin marcador */

  li:not(:first-child) {
    list-style: circle; /* Agrega marcador solo a los elementos que no sean el primero */
  }
`;

const StyledReference = styled.li<{
  $linkType?: React.CSSProperties["listStyleType"];
}>``;

export const [
  CrossReferencesProvider,
  useCrossReferencesCtx,
  useOptioncalCrossRefCtx,
] = useCreateSafeContext<linkedVerses>("CrossReferences is not safe");

function CrossReferences({
  crossReferences = undefined,
  listType = "upper-alpha",
  direction = "horizontal",
  maxColumns = 3,
  children,
  ...restProps
}: CrossReferencesProps) {
  const { bible } = useBibleContext();
  const innerCrossReferences = crossReferences ?? bible.crossReferences;

  return (
    <StyledCrossReferences
      $listType={listType}
      $direction={direction}
      $maxColumns={maxColumns}
      {...restProps}
    >
      {innerCrossReferences.map((linkedVerse, index) => {
        if (Array.isArray(linkedVerse)) {
          return (
            <StyledReference>
              <StyledSubCrossReferences key={`group-${index}`}>
                {linkedVerse.map((linkList, subIndex) => (
                  <StyledReference>
                    <CrossReferencesProvider
                      key={`${index}-${subIndex}`}
                      value={linkList}
                    >
                      {children}
                    </CrossReferencesProvider>
                  </StyledReference>
                ))}
              </StyledSubCrossReferences>
            </StyledReference>
          );
        } else {
          return (
            <StyledReference>
              <CrossReferencesProvider key={index} value={linkedVerse}>
                {children}
              </CrossReferencesProvider>
            </StyledReference>
          );
        }
      })}
    </StyledCrossReferences>
  );
}

export default CrossReferences;

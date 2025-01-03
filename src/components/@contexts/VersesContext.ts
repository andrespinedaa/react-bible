import React from "react";
import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { paragraph } from "../../utilities";

type VersesContextProps = {
  textAlign?: React.CSSProperties["textAlign"];
  psalmStyle?: boolean;
  separateVerses?: boolean;
  paragraphs: paragraph[];
};

export const [VersesProvider, useVersesContext, useOptionalVersesContext] =
  useCreateSafeContext<VersesContextProps>("Verses context !!NOT FOUND!!");

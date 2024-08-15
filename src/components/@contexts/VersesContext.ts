import useCreateSafeContext from "../../hooks/useCreateSafeContext";

type VersesContextProps = {
  firstNumberBig: boolean;
  firstNumber: "chapter" | "verse" | "chapterAndVerse";
  alignText?: "center" | "left" | "right";
  psalmStyle?: boolean;
};

export const [VersesProvider, useVersesContext] =
  useCreateSafeContext<VersesContextProps>("Verses context !!NOT FOUND!!");

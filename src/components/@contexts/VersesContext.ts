import useCreateSafeContext from "../../hooks/useCreateSafeContext";

type VersesContextProps = {
  firstNumberBig: boolean;
  alignText?: "center" | "left" | "right";
  psalmStyle?: boolean;
  separateVerses?: boolean;
};

export const [VersesProvider, useVersesContext] =
  useCreateSafeContext<VersesContextProps>("Verses context !!NOT FOUND!!");

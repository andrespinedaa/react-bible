import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { paragraph } from "../../utilities";

type VersesContextProps = {
  alignText?: "center" | "left" | "right";
  psalmStyle?: boolean;
  separateVerses?: boolean;
  paragraphs: paragraph[];
};

export const [VersesProvider, useVersesContext] =
  useCreateSafeContext<VersesContextProps>("Verses context !!NOT FOUND!!");

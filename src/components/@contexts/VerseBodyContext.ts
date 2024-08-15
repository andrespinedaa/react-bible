import { useCreateSafeContext } from "../../hooks";
import { verse } from "../../utilities";

type VerseBodyContextType = {
  verse: verse;
};

export const [VerseBodyProvider, useVerseBodyContext] =
  useCreateSafeContext<VerseBodyContextType>("VerseBodyContext not !!FOUND!!");

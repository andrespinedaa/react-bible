import { useCreateSafeContext } from "../../hooks";
import { verse } from "../../utilities";

type VerseBodyContextType = {
  verse: verse;
};

export const [VerseBodyProvider, useVerseBodyContext, useOptionalVerseBodyContext] =
  useCreateSafeContext<VerseBodyContextType>("VerseBodyContext not !!FOUND!!");

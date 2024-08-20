import { useCreateSafeContext } from "../../hooks";
import { verse } from "../../utilities";

type VerseBodyContextType = {
  verse: verse;
  refAt: React.MutableRefObject<number>;
};

export const [VerseBodyProvider, useVerseBodyContext] =
  useCreateSafeContext<VerseBodyContextType>("VerseBodyContext not !!FOUND!!");

import { useCreateSafeContext } from "../../hooks";
import { verse } from "../../utilities";

type VerseBodyContextType = {
  verse: verse;
  refAt: React.MutableRefObject<number | undefined>;
};

export const [VerseBodyProvider, useVerseBodyContext] =
  useCreateSafeContext<VerseBodyContextType>("VerseBodyContext not !!FOUND!!");

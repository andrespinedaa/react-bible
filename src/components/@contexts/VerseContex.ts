import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { paragraph } from "../../utilities";

type VerseContextProps = {
  title?: string;
  subTitle?: string;
  paragraph: paragraph;
  refAt: React.MutableRefObject<number | undefined>;
};

export const [VerseProvider, useVerseContext, useOptionalVerseContext] =
  useCreateSafeContext<VerseContextProps>("Verse context !!NOT FOUND!!");

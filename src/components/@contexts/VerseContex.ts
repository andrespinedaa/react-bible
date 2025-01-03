import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { linkedVerses, paragraph } from "../../utilities";

type VerseContextProps = {
  title?: string;
  subTitle?: string;
  paragraph: paragraph;
  sharedStories?: linkedVerses[];
};

export const [VerseProvider, useVerseContext, useOptionalVerseContext] =
  useCreateSafeContext<VerseContextProps>("Verse context !!NOT FOUND!!");

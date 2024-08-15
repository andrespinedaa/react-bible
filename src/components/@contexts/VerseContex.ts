import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { paragraph } from "../../utilities";

type VerseContextProps = {
  title?: string;
  subTitle?: string;
  paragraph: paragraph;
};

export const [VerseProvider, useVerseContext] =
  useCreateSafeContext<VerseContextProps>("Verse context !!NOT FOUND!!");

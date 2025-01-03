import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { BIBLE_ACTIONS, BIBLE_STATE } from "./BibleDispatch";

interface BibleContext {
  bible: BIBLE_STATE;
  bibleDispatch: React.Dispatch<BIBLE_ACTIONS>
}

export const [BibleProvider, useBibleContext] =
  useCreateSafeContext<BibleContext>("Bible Context !!NOT FOUND!!");

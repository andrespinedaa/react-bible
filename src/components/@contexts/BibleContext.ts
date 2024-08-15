import useCreateSafeContext from "../../hooks/useCreateSafeContext";
import { bible } from "../../utilities";

interface BibleContext {
  bible: bible;
}

export const [BibleProvider, useBibleContext] =
  useCreateSafeContext<BibleContext>("Bible Context !!NOT FOUND!!");

import useCreateSafeContext from "../../hooks/useCreateSafeContext";

interface BibleBodyContextProps {}

export const [BodyProvider, useBodyContext] =
  useCreateSafeContext<BibleBodyContextProps>("Body Context !!NOT FOUND!!");

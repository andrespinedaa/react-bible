import type {
  all,
  bible,
  both,
  lang,
  lenguages,
  testamentsAbrevs,
} from "../utilities";
import {
  englishVersionsAbrevs,
  spanishVersionsAbrevs,
} from "../utilities/versions";

type setVersions = {
  [L in lang]?: L extends "es"
    ? spanishVersionsAbrevs[]
    : L extends "en"
      ? englishVersionsAbrevs[]
      : never;
};

type setTestaments = {
  [L in lang]?: both | testamentsAbrevs;
};

export type useGetBibleProps = {
  lenguages: all | lenguages;
  versions: all | setVersions;
  testaments: both | testamentsAbrevs | setTestaments;
};

export declare function useGetBible({ lenguages, versions }: useGetBibleProps): bible;

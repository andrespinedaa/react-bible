type FilterIntrinsicTags<T extends keyof JSX.IntrinsicElements> = {
  [K in keyof JSX.IntrinsicElements]: K extends T ? K : never;
}[keyof JSX.IntrinsicElements];

export type HeadingTags = FilterIntrinsicTags<`h${1 | 2 | 3 | 4 | 5 | 6 }`>;

export type InlineTags = FilterIntrinsicTags<"span" | "sub" | "sup">;

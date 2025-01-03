import type { Preview } from "@storybook/react";
import React from "react";
import { BibleProvider, BibleTheme } from "../src/components/@contexts";
import { useBible } from "../src/hooks";
import { bibleMock, themeMock } from "../src/utilities/constaints";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"],

  decorators: [
    (Story) => {
      const { bibleDispatch, bibleGlobal } = useBible({ bible: bibleMock });

      return (
        <BibleTheme value={themeMock}>
          <BibleProvider value={{ bible: bibleGlobal, bibleDispatch }}>
            <Story />
          </BibleProvider>
        </BibleTheme>
      );
    },
  ],
};

export default preview;

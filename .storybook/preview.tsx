import type { Preview } from "@storybook/react";
import React from "react";
import {
  BibleProvider,
  BibleTheme,
  VerseProvider,
  VersesProvider,
} from "../src/components/@contexts";
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
      return (
        <BibleTheme value={themeMock}>
          <BibleProvider value={{ bible: bibleMock }}>
            <Story />
          </BibleProvider>
        </BibleTheme>
      );
    },
    (Story) => {
      return (
        <VersesProvider
          value={{
            alignText: "left",
            firstNumber: "chapter",
            firstNumberBig: true,
          }}
        >
          <VerseProvider
            value={{
              paragraph: {
                title: "",
                subTitle: "",
                verses: [],
              },
              subTitle: "",
              title: "",
            }}
          >
            <Story />
          </VerseProvider>
        </VersesProvider>
      );
    },
  ],
};

export default preview;

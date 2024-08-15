import React from "react";

export const useSafeId = (id?: string): string => {
  const usedId = React.useId();
  if (id) {
    return id;
  }
  return usedId;
};

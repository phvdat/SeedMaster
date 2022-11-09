import { css, Theme } from '@emotion/react';

export const HomeStyle = {
  self: ({ colors }: Theme) =>
    css({
      backgroundColor: colors?.secondary?.[700],
      height: 1500,
    }),
};

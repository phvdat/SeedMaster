import { css, Theme } from '@emotion/react';
export const RightbarStyle = {
  self: ({ borderRadius, colors, spacing }: Theme) =>
    css({
      width: '326px',
      height: '582px',
      borderRadius: borderRadius?.sm,
      backgroundColor: colors?.secondary[700],
      color: colors?.primary?.[400],
      marginLeft: spacing?.[5],
    }),
};

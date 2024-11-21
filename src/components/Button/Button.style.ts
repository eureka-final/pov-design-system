import { css } from '@emotion/react';

import { themes } from '../../styles/Theme';

import type { ButtonProps } from './Button';

export const getVariantStyling = (variant: Required<ButtonProps>['variant']) => {
  const style = {
    primary: css({
      backgroundColor: themes.dark.color.purple400,

      color: themes.dark.color.white,

      '&:hover:enabled': {
        backgroundColor: themes.dark.color.purple500,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${themes.dark.color.purple500}`,
      },
    }),
    secondary: css({
      backgroundColor: themes.dark.color.purple200,

      color: themes.dark.color.purple500,

      '&:hover:enabled': {
        backgroundColor: themes.dark.color.purple300,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${themes.dark.color.purple300}`,
      },
    }),
    default: css({
      backgroundColor: themes.dark.color.gray200,

      color: themes.dark.color.gray700,

      '&:hover:enabled': {
        backgroundColor: `${themes.dark.color.gray300}`,
      },

      '&:focus': {
        boxShadow: `0 0 0 3px ${themes.dark.color.gray300}`,
      },
    }),
  };

  return style[variant];
};

export const getSizeStyling = (size: Required<ButtonProps>['size']) => {
  const style = {
    large: css({
      width: '320px',
      height: '56px',
      fontSize: themes.dark.typography.h5.fontSize,
      lineHeight: themes.dark.typography.h5.lineHeight,
    }),
    medium: css({
      width: '200px',
      height: '56px',
      fontSize: themes.dark.typography.h5.fontSize,
      lineHeight: themes.dark.typography.h5.lineHeight,
    }),
    small: css({
      width: '120px',
      height: '48px', 
      fontSize: themes.dark.typography.h5.fontSize,
      lineHeight: themes.dark.typography.h5.lineHeight,
    }),
  };

  return style[size];
};

export const buttonStyling = css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  border: 'none',
  borderRadius: `${themes.dark.borderRadius.medium}`,
  outline: `0 solid ${themes.dark.color.white}`,

  backgroundColor: themes.dark.color.white,

  fontWeight: 500,

  transition: 'all .2s ease-in',

  cursor: 'pointer',

  '&:focus': {
    outlineWidth: '1px',
  },

  '&:disabled': {
    opacity: '.4',
  },
});

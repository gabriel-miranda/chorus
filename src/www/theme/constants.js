const WHITE = '#fff';
const LIGHT_GREY = '#e6e6e6';
const BLACK_ALPHA_01 = 'rgba(0,0,0,.1)';

export const colors = {
  header_bg: WHITE,
  header_border: LIGHT_GREY,
  header_shadow: BLACK_ALPHA_01,
};

export const borders = {
  light_grey: `1px solid ${colors.header_border}`,
};

export const sizes = {
  header_width: '100%',
  header_height: '50px',
  main_width: '970px',
  main_padding: '20px',
  post_padding: '15px',
  post_radius: '3px',
  post_margin: '20px',
};

export const shadows = {
  header_shadow: `0 0 10px ${colors.header_shadow}`,
};

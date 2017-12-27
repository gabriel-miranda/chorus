const WHITE = '#fff';
const LIGHT_GREY = '#e6e6e6';
const BLACK_ALPHA_01 = 'rgba(0,0,0,.1)';
const MAIN_BLUE = '#7dc5e6';

export const colors = {
  header_bg: WHITE,
  header_border: LIGHT_GREY,
  header_shadow: BLACK_ALPHA_01,
  loading_bar: MAIN_BLUE,
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
  loading_bar: '3px',
};

export const shadows = {
  header_shadow: `0 0 10px ${colors.header_shadow}`,
};

export const transitions = {
  loading_bar: 'all .2s ease-in-out',
};

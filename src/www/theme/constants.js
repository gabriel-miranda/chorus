const WHITE = '#fff';
const LIGHT_GREY = '#ebebeb';
const MAIN_BLUE = '#7dc5e6';
const BACKGROUND_BLUE = '#ecf1f5';

export const colors = {
  body: BACKGROUND_BLUE,
  header_bg: WHITE,
  header_border: LIGHT_GREY,
  loading_bar: MAIN_BLUE,
  well: WHITE,
};

export const borders = {
  header: `1px solid ${colors.header_border}`,
};

export const sizes = {
  header_width: '100%',
  header: '70px',
  nav: '50px',
  main_width: '970px',
  main_padding: '20px',
  post_padding: '15px',
  post_radius: '3px',
  post_margin: '20px',
  loading_bar: '3px',
  feed: '615px',
  sidebar: '336px',
};

export const transitions = {
  loading_bar: 'all .2s ease-in-out',
};

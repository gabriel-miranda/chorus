const WHITE = '#fff';

const LIGHT_GREY = '#ebebeb';
const MEDIUM_GREY = '#888';
const DARK_GREY = '#666';

const MAIN_BLUE = '#7dc5e6';
const BACKGROUND_BLUE = '#ecf1f5';

export const colors = {
  body: BACKGROUND_BLUE,
  header_bg: WHITE,
  header_border: LIGHT_GREY,
  loading_bar: MAIN_BLUE,
  well: WHITE,
  logo_title: MEDIUM_GREY,
  nav_item: DARK_GREY,
  nav_item_hover: MAIN_BLUE,
};

export const borders = {
  header: `1px solid ${colors.header_border}`,
};

export const sizes = {
  header_width: '100%',
  header: '70px',
  nav: '45px',
  nav_item_padding: '20px',
  nav_item_font: '16px',

  main_width: '970px',
  main_padding: '20px',

  post_padding: '20px',
  post_radius: '3px',
  post_margin: '20px',

  loading_bar: '3px',

  feed: '615px',
  sidebar: '336px',

  logo: '40px',
  logo_margin: '10px',
  logo_title: '22px',
};

export const transitions = {
  loading_bar: 'all .2s ease-in-out',
};

export const mediaQueries = {
  desktop: `@media screen and (min-width: ${sizes.main_width})`,
};

export const LOGO_URL = '/static/logo.png';

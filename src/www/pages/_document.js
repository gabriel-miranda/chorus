import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { injectGlobal } from 'styled-components';
import styledNormalize from 'styled-normalize';

/* eslint-disable no-unused-expressions */
injectGlobal`
  ${styledNormalize}
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`;
/* eslint-enable no-unused-expressions */

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <title>Chorus</title>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import ApiClient from '../utils/chorus-api-client';

export default class Home extends PureComponent {
  static async getInitialProps({ req }) {
    try {
      const api = new ApiClient(req);
      const { data } = await api.get('/data');
      return { data };
    } catch (e) {
      console.error(e);
      return { data: 'There was an error fetching data from the server' };
    }
  }

  static propTypes = {
    data: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div>
        Hello Chorus:  {this.props.data}
        <Link href="/about">
          <a>About</a>
        </Link>
      </div>
    );
  }
}

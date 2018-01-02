import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import { ApolloProvider, getDataFromTree } from 'react-apollo';
import initApollo from './initApollo';
import { handleClientError } from '../lib/error';
import { buildSlugFromUrl } from '../lib/post';

// Gets the display name of a JSX component for dev tools
function getComponentDisplayName(Component) {
  return Component.displayName || Component.name || 'Unknown';
}

function handlePostRedirect(ctx, url, data) {
  if (url.pathname !== '/post') {
    return;
  }
  const { slug } = data[`Post:${url.query.id}`];
  if (buildSlugFromUrl(url) === slug) {
    return;
  }
  ctx.res.writeHead(301, { Location: `/${slug}` });
  ctx.res.end();
}

export default ComposedComponent =>
  class WithData extends React.Component {
    static displayName = `WithData(${getComponentDisplayName(
      ComposedComponent,
    )})`;
    static propTypes = {
      serverState: PropTypes.object.isRequired,
    };

    static async getInitialProps(ctx) {
      // Initial serverState with apollo (empty)
      let serverState = {
        apollo: {
          data: {},
        },
      };

      // Evaluate the composed component's getInitialProps()
      let composedInitialProps = {};
      if (ComposedComponent.getInitialProps) {
        composedInitialProps = await ComposedComponent.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data
      if (!process.browser) {
        const apollo = initApollo();
        // Provide the `url` prop data in case a GraphQL query uses it
        const url = { query: ctx.query, pathname: ctx.pathname };
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <ApolloProvider client={apollo}>
              <ComposedComponent url={url} {...composedInitialProps} />
            </ApolloProvider>
          );
        } catch (error) {
          handleClientError(error, ctx);
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // http://dev.apollodata.com/react/api-queries.html#graphql-query-data-error
        }
        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();

        // Extract query data from the Apollo store
        serverState = {
          apollo: {
            data: apollo.cache.extract(),
          },
        };

        handlePostRedirect(ctx, url, serverState.apollo.data);
      }

      return {
        serverState,
        ...composedInitialProps,
      };
    }

    constructor(props) {
      super(props);
      this.apollo = initApollo(this.props.serverState.apollo.data);
    }

    render() {
      return (
        <ApolloProvider client={this.apollo}>
          <ComposedComponent {...this.props} />
        </ApolloProvider>
      );
    }
  };

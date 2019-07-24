/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose, withApollo } from 'react-apollo';
import { invoiceHookups } from 'typedefs/invoiceHookup.gql';

export default (config = () => {}) => (WrappedComponent) => {
  let getInjectedPropName = (props) => {
    let params = config(props);
    return get(params, 'name', 'invoiceHookups');
  };

  let withInvoiceHookups = (props) => {
    const _getInvoiceHookups = async (options) => {
      let res = await props.client.query({
        query: invoiceHookups,
        variables: options.variables,
      });
      return res;
    };

    return (
      <WrappedComponent {...props} getInvoiceHookups={_getInvoiceHookups} />
    );
  };

  return compose(
    withApollo,
    graphql(invoiceHookups, {
      options: (props) => {
        const params = config(props);
        return {
          variables: get(params, 'variables', {
            filters: {},
          }),
          skip: get(params, 'skip', false) === true,
        };
      },
      props: ({ data, ownProps }) => {
        const propName = getInjectedPropName(ownProps);
        const edges = get(data, 'invoiceHookups.edges', []);
        const nodes = edges.map(({ node }) => node);
        return {
          [propName]: {
            data: nodes,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    })
  )(withInvoiceHookups);
};

/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose, withApollo } from 'react-apollo';
import * as invoiceHookupQuery from 'shared/graphql/typedefs/invoiceHookup.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'invoiceHookups');
  };

  let withInvoiceHookups = (props: any) => {
    const _getInvoiceHookups = async options => {
      let res = await props.client.query({
        query: invoiceHookupQuery.invoiceHookups,
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
    graphql(invoiceHookupQuery.invoiceHookups, {
      options: props => {
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

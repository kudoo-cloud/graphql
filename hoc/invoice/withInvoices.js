/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as invoiceQuery from 'shared/graphql/typedefs/invoice.gql';

export default (config: any = () => {}, responseFun: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'invoices');
  };

  let withInvoices = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return compose(
    graphql(invoiceQuery.invoices, {
      options: props => {
        const params = config(props);
        return {
          skip: get(params, 'skip', false) === true,
          variables: get(params, 'variables', {
            filters: {},
          }),
        };
      },
      props: ({ data, ownProps }) => {
        const edges = get(data, 'invoices.edges', []);
        let nodes = edges.map(({ node }) => node);
        nodes = nodes.map(node => {
          return {
            ...node,
            total: Number(node.total || 0),
          };
        });

        let resultProps;
        if (responseFun) {
          // for customized response
          resultProps = responseFun({ data: nodes, ownProps });
        } else {
          // for default response
          resultProps = {
            data: nodes,
          };
        }
        const propName = getInjectedPropName(ownProps);
        return {
          [propName]: {
            ...resultProps,
            loading: data.loading,
            refetch: data.refetch,
            pageInfo: get(data, 'invoices.pageInfo', {}),
          },
        };
      },
    })
  )(withInvoices);
};

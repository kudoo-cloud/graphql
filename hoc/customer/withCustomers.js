/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as customerQuery from 'shared/graphql/typedefs/customer.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'customers');
  };

  let withCustomers = (props: any) => {
		const { customers, ...rest } = props; //eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'customers', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  return compose(
    graphql(customerQuery.customers, {
      options: props => {
        const params = config(props);
        return {
          skip: get(params, 'skip', false) === true,
          variables: get(params, 'variables', {
            filters: {},
          }),
        };
      },
      props: ({ data }) => {
        const edges = get(data, 'customers.edges', []);
        const nodes = edges.map(({ node }) => node);
        return {
          customers: {
            data: nodes,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    })
  )(withCustomers);
};

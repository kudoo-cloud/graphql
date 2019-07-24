/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import { integrations } from 'typedefs/integration.gql';

export default (config = () => {}) => (WrappedComponent) => {
  let getInjectedPropName = (props) => {
    let params = config(props);
    return get(params, 'name', 'integrations');
  };

  let withIntegrations = (props) => {
    const { integrations, ...rest } = props; //eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'integrations', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  return compose(
    graphql(integrations, {
      options: (props) => {
        const params = config(props);
        return {
          variables: get(params, 'variables', {
            filters: {},
          }),
        };
      },
      props: ({ data }) => {
        const edges = get(data, 'integrations.edges', []);
        const nodes = edges.map(({ node }) => node);
        return {
          integrations: {
            data: nodes,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    })
  )(withIntegrations);
};

/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose, withApollo } from 'react-apollo';
import * as traderQuery from 'shared/graphql/typedefs/trader.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'trader');
  };

  let withTrader = (props: any) => {
    const { trader, client, ...rest } = props; // eslint-disable-line

    const _getTrader = async id => {
      let res = await client.query({
        query: traderQuery.trader,
        fetchPolicy: 'network-only',
        variables: {
          id,
        },
      });
      return res;
    };

    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'trader', {}),
    };

    return (
      <WrappedComponent {...rest} {...injectedProps} getTrader={_getTrader} />
    );
  };

  withTrader.propTypes = {
    client: PropTypes.any,
    trader: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    withApollo,
    graphql(traderQuery.trader, {
      options: props => {
        const params = config(props);
        return {
          skip: get(params, 'traderId', '') === '',
          variables: {
            id: get(params, 'traderId', ''),
          },
        };
      },
      props: ({ data }) => ({
        trader: {
          data: get(data, 'node', {}),
          loading: data.loading,
          refetch: data.refetch,
        },
      }),
    })
  )(withTrader);
};

/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { graphql, compose, withApollo } from 'react-apollo';
import * as customerQuery from 'typedefs/customer.gql';
import * as traderQuery from 'typedefs/trader.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let withCustomer = (props: any) => {
    const { customer, client, ...rest } = props;

    const _getCustomer = async id => {
      let res = await client.query({
        query: customerQuery.customer,
        variables: {
          id,
        },
      });
      res = get(res, 'data.node', {});
      if (!isEmpty(res)) {
        let traderRes = await client.query({
          query: traderQuery.trader,
          variables: {
            id: get(res, 'traderId', ''),
          },
        });
        if (get(traderRes, 'data.node')) {
          res = {
            ...get(traderRes, 'data.node', {}),
            ...res,
          };
        }
      }
      return res;
    };

    return (
      <WrappedComponent
        {...rest}
        customer={customer || {}}
        getCustomer={_getCustomer}
      />
    );
  };

  withCustomer.propTypes = {
    client: PropTypes.any,
    customer: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    withApollo,
    graphql(customerQuery.customer, {
      options: props => {
        const params = config(props);
        const id = get(params, 'id', '');
        return {
          skip: id === '',
          variables: {
            id,
          },
        };
      },
      props: ({ data }) => ({
        customer: {
          data: get(data, 'node', {}),
          loading: data.loading,
          refetch: data.refetch,
        },
      }),
    }),
    graphql(traderQuery.trader, {
      options: props => {
        const id = get(props, 'customer.data.traderId', '');
        return {
          skip: id === '',
          variables: {
            id,
          },
        };
      },
      props: ({ data, ownProps }) => ({
        customer: {
          data: {
            ...get(data, 'node', {}),
            ...get(ownProps, 'customer.data', {}),
          },
          loading: data.loading,
          traderRefetch: data.refetch,
          customerRefetch: get(ownProps, 'customer.refetch'),
        },
      }),
    })
  )(withCustomer);
};

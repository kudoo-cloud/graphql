/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as InvoiceQuery from 'typedefs/invoice.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'invoice');
  };

  let withInvoice = (props: any) => {
    const { invoice, ...rest } = props; // eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'invoice', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  withInvoice.propTypes = {
    invoice: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    graphql(InvoiceQuery.invoice, {
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
      props: ({ data }) => {
        let node = get(data, 'node', {});
        const items = get(node, 'items', []);
        let total = 0;
        let gst = 0;
        let subtotal = 0;
        items.map(item => {
          subtotal += item.quantity * parseFloat(get(item, 'price', 0));
          gst += parseFloat(get(item, 'tax.rate', 0));
        });

        total = subtotal + gst;

        return {
          invoice: {
            data: {
              ...node,
              total,
              subtotal,
              gst,
            },
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    })
  )(withInvoice);
};

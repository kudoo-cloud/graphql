/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as serviceQuery from 'shared/graphql/typedefs/service.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'service');
  };

  let withService = (props: any) => {
    const { service, ...rest } = props; // eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'service', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  withService.propTypes = {
    service: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    graphql(serviceQuery.service, {
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
        service: {
          data: get(data, 'node', {}),
          loading: data.loading,
          refetch: data.refetch,
        },
      }),
    })
  )(withService);
};

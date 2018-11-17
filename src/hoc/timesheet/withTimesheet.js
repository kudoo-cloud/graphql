/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as TimesheetsQuery from 'typedefs/timesheet.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'timesheet');
  };

  let withTimesheet = (props: any) => {
    const { timesheet, ...rest } = props; // eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'timesheet', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  withTimesheet.propTypes = {
    timesheet: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    graphql(TimesheetsQuery.timesheet, {
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
        timesheet: {
          data: get(data, 'node', {}),
          loading: data.loading,
          refetch: data.refetch,
        },
      }),
    })
  )(withTimesheet);
};

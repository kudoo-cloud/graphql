/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose, withApollo } from 'react-apollo';
import * as TimesheetsQuery from 'typedefs/timesheet.gql';

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'timeSheets');
  };

  let withTimesheets = (props: any) => {
    const _getTimesheets = async options => {
      let res = await props.client.query({
        query: TimesheetsQuery.timeSheets,
        variables: options.variables,
      });
      return res;
    };

    return <WrappedComponent {...props} getTimesheets={_getTimesheets} />;
  };

  return compose(
    withApollo,
    graphql(TimesheetsQuery.timeSheets, {
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
        const edges = get(data, 'timeSheets.edges', []);
        const nodes = edges.map(({ node }) => node);
        let resultProps;
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data: nodes, ownProps });
        } else {
          // default response
          resultProps = {
            data: nodes,
          };
        }
        return {
          [propName]: {
            ...resultProps,
            loading: data.loading,
            refetch: data.refetch,
            pageInfo: get(data, 'timeSheets.pageInfo', {}),
          },
        };
      },
    })
  )(withTimesheets);
};

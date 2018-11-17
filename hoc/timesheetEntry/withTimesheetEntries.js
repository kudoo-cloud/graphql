/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose, withApollo } from 'react-apollo';
import * as TimeSheetEntryQuery from 'shared/graphql/typedefs/timeSheetEntry.gql';

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'timeSheetEntries');
  };

  let withTimesheetEntries = (props: any) => {
    const { client, ...rest } = props; //eslint-disable-line
    const _getTimesheetEntries = async options => {
      let res = await client.query({
        query: TimeSheetEntryQuery.timeSheetEntries,
        variables: options.variables,
      });
      return res;
    };

    return (
      <WrappedComponent {...rest} getTimesheetEntries={_getTimesheetEntries} />
    );
  };

  return compose(
    withApollo,
    graphql(TimeSheetEntryQuery.timeSheetEntries, {
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
        const propName = getInjectedPropName(ownProps);
        const edges = get(data, 'timeSheetEntries.edges', []);
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
            pageInfo: get(data, 'timeSheetEntries.pageInfo', {}),
          },
        };
      },
    })
  )(withTimesheetEntries);
};

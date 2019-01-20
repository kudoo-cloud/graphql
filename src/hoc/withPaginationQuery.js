/* @flow */
import React from "react";
import get from "lodash/get";
import { graphql, withApollo } from "react-apollo";
import { compose, withProps } from "recompose";

type Param = {
  config: Function,
  responseFun?: Function,
  queryName: String,
  query: any,
  defaultPropName: string,
  functionName?: string // this is useful when we want to execute query and get result in the same context instead of in props
};

export default ({
  config = () => {},
  responseFun,
  queryName,
  query,
  defaultPropName = "data",
  functionName
}: Param) => {
  let getPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", defaultPropName);
  };

  let handleResult = ({ data, ownProps }) => {
    const edges = get(data, `${queryName}.edges`, []);
    const nodes = edges.map(({ node }) => node);
    const pageInfo = get(data, `${queryName}.pageInfo`, {});
    const count = get(data, `${queryName}.aggregate.count`, 0);
    return {
      data: nodes,
      pageInfo,
      count
    };
  };

  let handlePaginationResponse = (previousResult, { fetchMoreResult }) => {
    const result1 = get(fetchMoreResult, `${queryName}.edges`) || [];
    const result2 = get(previousResult, `${queryName}.edges`) || [];
    let finalEdges = [...result2, ...result1];
    const pageInfo = get(fetchMoreResult, `${queryName}.pageInfo`);
    return {
      [queryName]: {
        __typename: get(previousResult, `${queryName}.__typename`),
        edges: finalEdges,
        aggregate: {
          count: finalEdges.length,
          __typename: get(previousResult, `${queryName}.aggregate.__typename`)
        },
        pageInfo
      }
    };
  };

  return compose(
    withApollo,
    graphql(query, {
      options: props => {
        const params = config(props);
        return {
          variables: get(params, "variables"),
          skip: get(params, "skip", false) === true,
          notifyOnNetworkStatusChange: true
        };
      },
      props: ({ data, ownProps }) => {
        let resultProps = {};
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data, ownProps });
        } else {
          // default response
          const propName = getPropName(ownProps);
          const pageInfo = get(data, `${queryName}.pageInfo`, {});
          const resultData = handleResult({ data, ownProps });
          resultProps = {
            [propName]: {
              loading: data.loading,
              refetch: data.refetch,
              error: data.error,
              ...resultData,
              loadNextPage: options => {
                if (!pageInfo.hasNextPage) {
                  console.log("no next pages");
                  return;
                }
                data.fetchMore({
                  variables: {
                    ...options,
                    after: pageInfo.endCursor
                  },
                  updateQuery: handlePaginationResponse
                });
              }
            }
          };
        }
        return resultProps;
      }
    }),
    withProps(props => {
      if (functionName) {
        const prop = {
          [functionName]: async options => {
            return await props.client.query({
              query,
              variables: options.variables
            });
          }
        };
        return prop;
      }
      return props;
    })
  );
};

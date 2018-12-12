/* @flow */
import React from "react";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as serviceQuery from "typedefs/service.gql";

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", "services");
  };

  let withServices = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return compose(
    graphql(serviceQuery.services, {
      options: props => {
        const params = config(props);
        return {
          variables: get(params, "variables"),
          skip: get(params, "skip", false) === true
        };
      },
      props: ({ data, ownProps }) => {
        const propName = getInjectedPropName(ownProps);
        const edges = get(data, "services.edges", []);
        const nodes = edges.map(({ node }) => node);
        let resultProps = {};
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data: nodes, ownProps });
        } else {
          // default response
          resultProps = {
            data: nodes
          };
        }
        return {
          [propName]: {
            ...resultProps,
            loading: data.loading,
            refetch: data.refetch
          }
        };
      }
    })
  )(withServices);
};

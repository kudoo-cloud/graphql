/* @flow */
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as serviceQuery from "typedefs/service.gql";

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", "service");
  };

  let withService = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  withService.propTypes = {
    service: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func
    })
  };

  return compose(
    graphql(serviceQuery.service, {
      options: props => {
        const params = config(props);
        const id = get(params, "id", "");
        return {
          skip: id === "",
          variables: {
            where: {
              id
            }
          }
        };
      },
      props: ({ data, ownProps }) => {
        const propName = getInjectedPropName(ownProps);
        let resultProps;
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data, ownProps });
        } else {
          // default response
          resultProps = {
            data: get(data, "service", {})
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
  )(withService);
};

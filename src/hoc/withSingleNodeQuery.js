/* @flow */
import React from "react";
import PropTypes from "prop-types";
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

  return compose(
    withApollo,
    graphql(query, {
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
        const propName = getPropName(ownProps);
        let resultProps;
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data, ownProps });
        } else {
          // default response
          resultProps = {
            [propName]: {
              data: get(data, queryName) || {},
              loading: data.loading,
              refetch: data.refetch
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

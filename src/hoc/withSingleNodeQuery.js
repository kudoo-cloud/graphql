/* @flow */
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { graphql } from "react-apollo";

type Param = {
  config: Function,
  responseFun?: Function,
  queryName: String,
  query: any,
  defaultPropName: string
};

export default ({
  config = () => {},
  responseFun,
  queryName,
  query,
  defaultPropName = "data"
}: Param) => {
  let getPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", defaultPropName);
  };

  return graphql(query, {
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
  });
};

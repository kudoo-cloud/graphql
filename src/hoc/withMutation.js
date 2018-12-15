/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import get from "lodash/get";
import { graphqlResponse } from "helpers";

type Param = {
  config: Function,
  mutationName: String,
  mutation: any,
  defaultPropName: string
};

export default ({
  config = () => {},
  mutationName,
  mutation,
  defaultPropName
}) => {
  let getPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", defaultPropName);
  };

  return graphql(mutation, {
    props: ({ mutate, ownProps }) => {
      const propName = getPropName(ownProps);
      return {
        [propName]: async params => {
          const res = await mutate({
            variables: params
          });
          let parsedRes = graphqlResponse.handleMutationResponse(
            res,
            mutationName
          );
          if (parsedRes.success) {
            return { error: null, success: true, result: parsedRes.result };
          }
          return {
            error: get(parsedRes, "error") || [],
            success: false,
            result: parsedRes.result
          };
        }
      };
    }
  });
};

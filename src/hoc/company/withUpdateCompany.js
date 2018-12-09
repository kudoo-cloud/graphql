/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import get from "lodash/get";
import { graphqlResponse } from "helpers";
import * as companyQuery from "typedefs/company.gql";

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", "updateCompany");
  };

  let withUpdateCompany = (props: any) => {
    const updateCompany = async ({ id, ...rest }) => {
      const res = await props.updateCompany({
        where: {
          id
        },
        data: rest
      });

      let parsedRes = graphqlResponse.handleMutationResponse(
        res,
        "updateCompany"
      );
      if (parsedRes.success) {
        return { error: null, success: true, result: parsedRes.result };
      }
      return {
        error: get(parsedRes, "error", []),
        success: false,
        result: parsedRes.result
      };
    };

    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: updateCompany
    };

    return <WrappedComponent {...props} {...injectedProps} />;
  };

  withUpdateCompany.propTypes = {
    updateCompany: PropTypes.func
  };

  return compose(
    graphql(companyQuery.updateCompany, {
      props: ({ mutate }) => ({
        updateCompany: params => mutate({ variables: params })
      })
    })
  )(withUpdateCompany);
};

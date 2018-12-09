/* @flow */
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as companyQuery from "typedefs/company.gql";

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let withCompany = (props: any) => {
    return <WrappedComponent {...props} company={get(props, "company", {})} />;
  };

  withCompany.propTypes = {
    company: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func
    })
  };

  return compose(
    graphql(companyQuery.company, {
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
      props: ({ data }) => ({
        company: {
          data: get(data, "company", {}),
          loading: data.loading,
          refetch: data.refetch
        }
      })
    })
  )(withCompany);
};

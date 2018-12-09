/* @flow */
import React from "react";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as companyQuery from "typedefs/company.gql";

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, "name", "companies");
  };

  let withCompanies = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return compose(
    graphql(companyQuery.companies, {
      options: props => {
        const params = config(props);
        return {
          variables: get(params, "variables", {
            joined: false,
            created: false
          })
        };
      },
      props: ({ data, ownProps }) => {
        const companies = get(data, "companies", []);
        const propName = getInjectedPropName(ownProps);
        let resultProps;
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data, ownProps });
        } else {
          // default response
          resultProps = {
            data: companies
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
  )(withCompanies);
};

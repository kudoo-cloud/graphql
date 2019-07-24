/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import { companies } from 'typedefs/company.gql';

export default (config = () => {}, responseFun) => (WrappedComponent) => {
  let getInjectedPropName = (props) => {
    let params = config(props);
    return get(params, 'name', 'companies');
  };

  let withCompanies = (props) => {
    return <WrappedComponent {...props} />;
  };

  return compose(
    graphql(companies, {
      options: (props) => {
        const params = config(props);
        return {
          skip: params.skip,
          variables: get(params, 'variables', {
            joined: false,
            created: false,
          }),
        };
      },
      props: ({ data, ownProps }) => {
        const companies = get(data, 'companies', []);
        const propName = getInjectedPropName(ownProps);
        let resultProps;
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data, ownProps });
        } else {
          // default response
          resultProps = {
            data: companies,
          };
        }
        return {
          [propName]: {
            ...resultProps,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    })
  )(withCompanies);
};

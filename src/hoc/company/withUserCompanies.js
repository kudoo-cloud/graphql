/* @flow */
import React from 'react';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as companyQuery from 'typedefs/company.gql';
import * as accountQuery from 'typedefs/account.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'companies');
  };

  let withUserCompanies = (props: any) => {
    const { companies, ...rest } = props; //eslint-disable-line
    const propName = getInjectedPropName(props);
    const injectedProps = {
      [propName]: get(props, 'companies', {}),
    };
    return <WrappedComponent {...rest} {...injectedProps} />;
  };

  return compose(
    graphql(companyQuery.companies, {
      options: props => {
        const params = config(props);
        return {
          skip: get(params, 'skip', false) === true,
          variables: get(params, 'variables', {
            filters: {},
          }),
        };
      },
      props: ({ data }) => {
        const edges = get(data, 'companies.edges', []);
        const nodes = edges.map(({ node }) => ({ ...node, owner: true }));
        return {
          companies: {
            data: nodes,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    }),
    graphql(accountQuery.me, {
      options: props => {
        const params = config(props);
        return {
          skip: get(params, 'skip', false) === true,
        };
      },
      props: ({ data, ownProps }) => {
        const createdCompanies = get(ownProps, 'companies.data', []); // this is coming from above query
        const joinedCompanies = get(data, 'me.companies', []).map(
          ({ data }) => data
        );
        const companies = [...createdCompanies, ...joinedCompanies];
        return {
          companies: {
            data: companies,
            loading: get(ownProps, 'companies.loading', false),
            refetch: get(ownProps, 'companies.refetch'),
          },
        };
      },
    })
  )(withUserCompanies);
};

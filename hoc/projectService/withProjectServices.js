/* @flow */
import React from 'react';
import get from 'lodash/get';
import uniq from 'lodash/uniq';
import find from 'lodash/find';
import { graphql, compose } from 'react-apollo';
import * as projectServiceQuery from 'shared/graphql/typedefs/projectService.gql';
import * as serviceQuery from 'shared/graphql/typedefs/service.gql';

export default (config: any = () => {}, responseFun?: Function) => (
  WrappedComponent: any
) => {
  let getInjectedPropName = (props: any) => {
    let params = config(props);
    return get(params, 'name', 'projectServices');
  };

  let withProjectServices = (props: any) => {
    return <WrappedComponent {...props} />;
  };

  return compose(
    graphql(projectServiceQuery.projectsServices, {
      options: props => {
        const params = config(props);
        return {
          variables: get(params, 'variables', {
            filters: {},
          }),
          skip: get(params, 'skip', false) === true,
        };
      },
      props: ({ data, ownProps }) => {
        const propName = getInjectedPropName(ownProps);
        const edges = get(data, 'projectsServices.edges', []);
        const nodes = edges.map(({ node }) => node);
        return {
          [propName]: {
            data: nodes,
            loading: data.loading,
            refetch: data.refetch,
          },
        };
      },
    }),
    graphql(serviceQuery.services, {
      options: props => {
        const propName = getInjectedPropName(props);
        const ids = get(props, `${propName}.data`, []).map(
          service => service.serviceId
        );
        return {
          variables: {
            filters: {
              id: { any_of: uniq(ids) },
            },
          },
        };
      },
      props: ({ data, ownProps }) => {
        const propName = getInjectedPropName(ownProps);
        const edges = get(data, 'services.edges', []);
        const nodes = edges.map(({ node }) => node);
        const mergedServices = get(ownProps, `${propName}.data`, []).map(
          pService => {
            const ser = find(nodes, { id: pService.serviceId });
            return {
              ...pService,
              ...ser,
            };
          }
        );
        let resultProps = {};
        if (responseFun) {
          // custom response
          resultProps = responseFun({ data: mergedServices, ownProps });
        } else {
          // default response
          resultProps = {
            data: mergedServices,
          };
        }
        return {
          [propName]: {
            ...resultProps,
            loading: get(ownProps, `${propName}.loading`, false),
            refetch: get(ownProps, `${propName}.refetch`),
          },
        };
      },
    })
  )(withProjectServices);
};

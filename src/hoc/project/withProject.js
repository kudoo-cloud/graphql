/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as projectQuery from 'typedefs/project.gql';

export default (config: any = () => {}) => (WrappedComponent: any) => {
  let withProject = (props: any) => {
    return <WrappedComponent {...props} project={get(props, 'project', {})} />;
  };

  withProject.propTypes = {
    project: PropTypes.shape({
      data: PropTypes.object,
      loading: PropTypes.bool,
      refetch: PropTypes.func,
    }),
  };

  return compose(
    graphql(projectQuery.project, {
      options: props => {
        const params = config(props);
        const id = get(params, 'id', '');
        return {
          skip: id === '',
          variables: {
            id,
          },
        };
      },
      props: ({ data }) => ({
        project: {
          data: get(data, 'node', {}),
          loading: data.loading,
          refetch: data.refetch,
        },
      }),
    })
  )(withProject);
};

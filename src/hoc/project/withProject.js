/* @flow */
import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import { graphql, compose } from 'react-apollo';
import * as projectQuery from 'typedefs/project.gql';
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "project",
    query: projectQuery.project,
    defaultPropName: "project"
  });
};

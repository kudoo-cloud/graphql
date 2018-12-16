/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import get from "lodash/get";
import * as projectQuery from "typedefs/project.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: projectQuery.deleteProject,
    mutationName: "deleteProject",
    defaultPropName: "deleteProject"
  });
};

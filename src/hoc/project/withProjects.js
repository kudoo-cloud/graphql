/* @flow */
import React from "react";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as projectQuery from "typedefs/project.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "projects",
    query: projectQuery.projects,
    queryName: "projects"
  });
};

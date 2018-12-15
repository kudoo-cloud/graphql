/* @flow */
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as serviceQuery from "typedefs/service.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "service",
    query: serviceQuery.service,
    defaultPropName: "service"
  });
};

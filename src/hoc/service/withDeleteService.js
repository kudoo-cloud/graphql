/* @flow */

import React from "react";
import PropTypes from "prop-types";
import { graphql, compose } from "react-apollo";
import get from "lodash/get";
import * as serviceQuery from "typedefs/service.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: serviceQuery.deleteService,
    mutationName: "deleteService",
    defaultPropName: "deleteService"
  });
};

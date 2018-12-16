/* @flow */
import React from "react";
import PropTypes from "prop-types";
import { graphql } from "react-apollo";
import get from "lodash/get";
import * as customerQuery from "typedefs/customer.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: customerQuery.updateCustomer,
    mutationName: "updateCustomer",
    defaultPropName: "updateCustomer"
  });
};

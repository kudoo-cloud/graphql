/* @flow */
import React from "react";
import PropTypes from "prop-types";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as customerQuery from "typedefs/customer.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "customer",
    query: customerQuery.customer,
    defaultPropName: "customer"
  });
};

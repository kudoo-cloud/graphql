/* @flow */
import React from "react";
import get from "lodash/get";
import { graphql, compose } from "react-apollo";
import * as customerQuery from "typedefs/customer.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "customers",
    query: customerQuery.customers,
    queryName: "customers"
  });
};

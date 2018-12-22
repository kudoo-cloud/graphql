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

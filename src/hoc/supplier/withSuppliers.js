import * as supplierQuery from "typedefs/supplier.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "suppliers",
    query: supplierQuery.suppliers,
    queryName: "suppliers"
  });
};

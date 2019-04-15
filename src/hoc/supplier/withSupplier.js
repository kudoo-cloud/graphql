import * as supplierQuery from "typedefs/supplier.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "supplier",
    query: supplierQuery.supplier,
    defaultPropName: "supplier",
    functionName: "getSupplier"
  });
};

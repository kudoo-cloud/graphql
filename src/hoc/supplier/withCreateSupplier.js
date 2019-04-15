import * as supplierQuery from "typedefs/supplier.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: supplierQuery.createSupplier,
    mutationName: "createSupplier",
    defaultPropName: "createSupplier"
  });
};

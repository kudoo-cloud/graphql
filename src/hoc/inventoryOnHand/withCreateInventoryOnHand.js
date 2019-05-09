import * as query from "typedefs/inventoryOnHand.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.createInventoryOnHand,
    mutationName: "createInventoryOnHand",
    defaultPropName: "createInventoryOnHand"
  });
};

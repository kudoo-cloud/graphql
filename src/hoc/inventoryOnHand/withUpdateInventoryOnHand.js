import * as query from "typedefs/inventoryOnHand.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.updateInventoryOnHand,
    mutationName: "updateInventoryOnHand",
    defaultPropName: "updateInventoryOnHand"
  });
};

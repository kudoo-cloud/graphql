import * as inventoryQuery from "typedefs/inventory.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: inventoryQuery.updateInventory,
    mutationName: "updateInventory",
    defaultPropName: "updateInventory"
  });
};

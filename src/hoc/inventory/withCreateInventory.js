import * as inventoryQuery from "typedefs/inventory.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: inventoryQuery.createInventory,
    mutationName: "createInventory",
    defaultPropName: "createInventory"
  });
};

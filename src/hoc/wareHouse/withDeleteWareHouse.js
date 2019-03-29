import * as wareHouseQuery from "typedefs/wareHouse.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: wareHouseQuery.deleteWareHouse,
    mutationName: "deleteWareHouse",
    defaultPropName: "deleteWareHouse"
  });
};

import * as AccountQuery from "typedefs/account.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: AccountQuery.updateUser,
    mutationName: "updateUser",
    defaultPropName: "updateUser"
  });
};

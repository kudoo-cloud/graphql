import * as AccountQuery from "typedefs/account.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: AccountQuery.register,
    mutationName: "register",
    defaultPropName: "register"
  });
};

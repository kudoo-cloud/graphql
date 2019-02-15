import * as mainAccountQuery from "typedefs/mainAccount.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: mainAccountQuery.createMainAccount,
    mutationName: "createMainAccount",
    defaultPropName: "createMainAccount"
  });
};

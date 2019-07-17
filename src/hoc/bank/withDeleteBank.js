import * as bankQuery from "typedefs/bank.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: bankQuery.deleteBank,
    mutationName: "deleteBank",
    defaultPropName: "deleteBank"
  });
};

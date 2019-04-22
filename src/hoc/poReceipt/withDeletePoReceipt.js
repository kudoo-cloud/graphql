import * as poReceiptQuery from "typedefs/poReceipt.gql"
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: poReceiptQuery.deletePoReceipt,
    mutationName: "deletePoReceipt",
    defaultPropName: "deletePoReceipt"
  });
};

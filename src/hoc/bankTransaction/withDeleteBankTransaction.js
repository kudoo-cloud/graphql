import * as bankTransactionQuery from "typedefs/bankTransaction.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: bankTransactionQuery.deleteBankTransaction,
    mutationName: "deleteBankTransaction",
    defaultPropName: "deleteBankTransaction"
  });
};

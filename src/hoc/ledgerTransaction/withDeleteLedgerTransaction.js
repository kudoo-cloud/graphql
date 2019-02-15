import * as ledgerTransactionQuery from "typedefs/ledgerTransaction.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: ledgerTransactionQuery.deleteLedgerTransaction,
    mutationName: "deleteLedgerTransaction",
    defaultPropName: "deleteLedgerTransaction"
  });
};

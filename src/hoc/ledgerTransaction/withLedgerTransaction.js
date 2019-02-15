import * as ledgerTransactionQuery from "typedefs/ledgerTransaction.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "ledgerTransaction",
    query: ledgerTransactionQuery.ledgerTransaction,
    defaultPropName: "ledgerTransaction"
  });
};

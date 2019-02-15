import * as ledgerTransactionQuery from "typedefs/ledgerTransaction.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "ledgerTransactions",
    query: ledgerTransactionQuery.ledgerTransactions,
    queryName: "ledgerTransactions"
  });
};

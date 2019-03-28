import * as bankTransactionQuery from "typedefs/bankTransaction.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "bankTransactions",
    query: bankTransactionQuery.bankTransactions,
    queryName: "bankTransactions"
  });
};

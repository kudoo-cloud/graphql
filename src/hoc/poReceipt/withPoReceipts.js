import * as poReceiptQuery from "typedefs/poReceipt.gql"
import withPaginationQuery from "../withPaginationQuery";

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "poReceipts",
    query: poReceiptQuery.poReceipts,
    queryName: "poReceipts"
  });
};

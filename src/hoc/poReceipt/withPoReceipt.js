import * as poReceiptQuery from "typedefs/poReceipt.gql"
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "poReceipt",
    query: poReceiptQuery.poReceipt,
    defaultPropName: "poReceipt",
    functionName: "getPoReceipt"
  });
};

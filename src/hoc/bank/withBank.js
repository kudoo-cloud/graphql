import * as bankQuery from "typedefs/bank.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "bank",
    query: bankQuery.bank,
    defaultPropName: "bank"
  });
};

import * as mainAccountQuery from "typedefs/mainAccount.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "mainAccount",
    query: mainAccountQuery.mainAccount,
    defaultPropName: "mainAccount"
  });
};

import * as mainAccountQuery from "typedefs/mainAccount.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "mainAccounts",
    query: mainAccountQuery.mainAccounts,
    queryName: "mainAccounts"
  });
};

import * as bankQuery from "typedefs/bank.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "banks",
    query: bankQuery.banks,
    queryName: "banks"
  });
};

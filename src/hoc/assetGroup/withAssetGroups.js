import * as query from "typedefs/assetGroup.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "assetGroups",
    query: query.assetGroups,
    queryName: "assetGroups"
  });
};

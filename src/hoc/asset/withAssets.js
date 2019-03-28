import * as assetQuery from "typedefs/asset.gql";
import withPaginationQuery from "../withPaginationQuery";

export default (config: any = () => {}, responseFun?: Function) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: "assets",
    query: assetQuery.assets,
    queryName: "assets"
  });
};

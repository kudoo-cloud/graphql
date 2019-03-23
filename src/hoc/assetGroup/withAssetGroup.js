import * as query from "typedefs/assetGroup.gql";
import withSingleNodeQuery from "../withSingleNodeQuery";

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: "assetGroup",
    query: query.assetGroup,
    defaultPropName: "assetGroup"
  });
};

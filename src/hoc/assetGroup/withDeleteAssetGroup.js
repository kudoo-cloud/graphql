import * as query from "typedefs/assetGroup.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.deleteAssetGroup,
    mutationName: "deleteAssetGroup",
    defaultPropName: "deleteAssetGroup"
  });
};

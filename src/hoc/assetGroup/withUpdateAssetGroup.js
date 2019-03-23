import * as query from "typedefs/assetGroup.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.updateAssetGroup,
    mutationName: "updateAssetGroup",
    defaultPropName: "updateAssetGroup"
  });
};

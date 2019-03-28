import * as query from "typedefs/asset.gql";
import withMutation from "../withMutation";

export default config => {
  return withMutation({
    config,
    mutation: query.updateAsset,
    mutationName: "updateAsset",
    defaultPropName: "updateAsset"
  });
};

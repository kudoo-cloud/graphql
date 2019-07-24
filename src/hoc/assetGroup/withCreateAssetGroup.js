import { createAssetGroup } from 'typedefs/assetGroup.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createAssetGroup,
    mutationName: 'createAssetGroup',
    defaultPropName: 'createAssetGroup',
  });
};

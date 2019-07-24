import { updateAssetGroup } from 'typedefs/assetGroup.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateAssetGroup,
    mutationName: 'updateAssetGroup',
    defaultPropName: 'updateAssetGroup',
  });
};

import { deleteAssetGroup } from 'typedefs/assetGroup.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteAssetGroup,
    mutationName: 'deleteAssetGroup',
    defaultPropName: 'deleteAssetGroup',
  });
};

import { deleteAsset } from 'typedefs/asset.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteAsset,
    mutationName: 'deleteAsset',
    defaultPropName: 'deleteAsset',
  });
};

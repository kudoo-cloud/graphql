import { updateAsset } from 'typedefs/asset.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateAsset,
    mutationName: 'updateAsset',
    defaultPropName: 'updateAsset',
  });
};

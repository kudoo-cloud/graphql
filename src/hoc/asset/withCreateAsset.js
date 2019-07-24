import { createAsset } from 'typedefs/asset.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createAsset,
    mutationName: 'createAsset',
    defaultPropName: 'createAsset',
  });
};

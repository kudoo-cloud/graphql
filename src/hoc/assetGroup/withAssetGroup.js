import { assetGroup } from 'typedefs/assetGroup.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'assetGroup',
    query: assetGroup,
    defaultPropName: 'assetGroup',
  });
};

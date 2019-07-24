import { asset } from 'typedefs/asset.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'asset',
    query: asset,
    defaultPropName: 'asset',
  });
};

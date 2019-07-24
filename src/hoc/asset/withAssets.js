import { assets } from 'typedefs/asset.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'assets',
    query: assets,
    queryName: 'assets',
  });
};

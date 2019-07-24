import { assetGroups } from 'typedefs/assetGroup.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'assetGroups',
    query: assetGroups,
    queryName: 'assetGroups',
  });
};

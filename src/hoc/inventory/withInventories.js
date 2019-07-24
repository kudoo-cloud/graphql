import { inventories } from 'typedefs/inventory.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'inventories',
    query: inventories,
    queryName: 'inventories',
  });
};

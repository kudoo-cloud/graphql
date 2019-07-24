import { inventory } from 'typedefs/inventory.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'inventory',
    query: inventory,
    defaultPropName: 'inventory',
    functionName: 'getInventory',
  });
};

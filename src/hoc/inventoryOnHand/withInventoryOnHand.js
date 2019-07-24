import { inventoryOnHand } from 'typedefs/inventoryOnHand.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'inventoryOnHand',
    query: inventoryOnHand,
    defaultPropName: 'inventoryOnHand',
  });
};

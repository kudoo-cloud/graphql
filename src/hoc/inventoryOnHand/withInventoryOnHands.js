import { inventoryOnHands } from 'typedefs/inventoryOnHand.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'inventoryOnHands',
    query: inventoryOnHands,
    queryName: 'inventoryOnHands',
  });
};

import { purchaseOrders } from 'typedefs/purchaseOrder.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'purchaseOrders',
    query: purchaseOrders,
    queryName: 'purchaseOrders',
  });
};

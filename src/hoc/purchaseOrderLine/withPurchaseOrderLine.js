import { purchaseOrderLine } from 'typedefs/purchaseOrderLine.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'purchaseOrderLine',
    query: purchaseOrderLine,
    defaultPropName: 'purchaseOrderLine',
    functionName: 'getPurchaseOrderLine',
  });
};

import { updatePurchaseOrderLine } from 'typedefs/purchaseOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePurchaseOrderLine,
    mutationName: 'updatePurchaseOrderLine',
    defaultPropName: 'updatePurchaseOrderLine',
  });
};

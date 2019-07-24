import { createPurchaseOrderLine } from 'typedefs/purchaseOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPurchaseOrderLine,
    mutationName: 'createPurchaseOrderLine',
    defaultPropName: 'createPurchaseOrderLine',
  });
};

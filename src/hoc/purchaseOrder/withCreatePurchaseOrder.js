import { createPurchaseOrder } from 'typedefs/purchaseOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPurchaseOrder,
    mutationName: 'createPurchaseOrder',
    defaultPropName: 'createPurchaseOrder',
  });
};

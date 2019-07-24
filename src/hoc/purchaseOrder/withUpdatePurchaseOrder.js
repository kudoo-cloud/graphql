import { updatePurchaseOrder } from 'typedefs/purchaseOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePurchaseOrder,
    mutationName: 'updatePurchaseOrder',
    defaultPropName: 'updatePurchaseOrder',
  });
};

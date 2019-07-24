import { deletePurchaseOrder } from 'typedefs/purchaseOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePurchaseOrder,
    mutationName: 'deletePurchaseOrder',
    defaultPropName: 'deletePurchaseOrder',
  });
};

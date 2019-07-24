import { sendPurchaseOrderMail } from 'typedefs/purchaseOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: sendPurchaseOrderMail,
    mutationName: 'sendPurchaseOrderMail',
    defaultPropName: 'sendPurchaseOrderMail',
  });
};

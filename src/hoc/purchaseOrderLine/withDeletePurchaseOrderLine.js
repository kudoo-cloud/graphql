import { deletePurchaseOrderLine } from 'typedefs/purchaseOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePurchaseOrderLine,
    mutationName: 'deletePurchaseOrderLine',
    defaultPropName: 'deletePurchaseOrderLine',
  });
};

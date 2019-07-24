import { updateSalesOrder } from 'typedefs/salesOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateSalesOrder,
    mutationName: 'updateSalesOrder',
    defaultPropName: 'updateSalesOrder',
  });
};

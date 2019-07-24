import { createSalesOrder } from 'typedefs/salesOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createSalesOrder,
    mutationName: 'createSalesOrder',
    defaultPropName: 'createSalesOrder',
  });
};

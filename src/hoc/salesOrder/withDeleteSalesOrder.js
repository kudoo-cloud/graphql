import { deleteSalesOrder } from 'typedefs/salesOrder.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteSalesOrder,
    mutationName: 'deleteSalesOrder',
    defaultPropName: 'deleteSalesOrder',
  });
};

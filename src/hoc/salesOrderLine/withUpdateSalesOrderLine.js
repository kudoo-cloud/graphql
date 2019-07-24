import { updateSalesOrderLine } from 'typedefs/salesOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateSalesOrderLine,
    mutationName: 'updateSalesOrderLine',
    defaultPropName: 'updateSalesOrderLine',
  });
};

import { createSalesOrderLine } from 'typedefs/salesOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createSalesOrderLine,
    mutationName: 'createSalesOrderLine',
    defaultPropName: 'createSalesOrderLine',
  });
};

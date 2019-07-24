import { deleteSalesOrderLine } from 'typedefs/salesOrderLine.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteSalesOrderLine,
    mutationName: 'deleteSalesOrderLine',
    defaultPropName: 'deleteSalesOrderLine',
  });
};

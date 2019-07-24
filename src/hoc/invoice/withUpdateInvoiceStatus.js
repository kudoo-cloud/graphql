import { updateInvoiceStatus } from 'typedefs/invoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateInvoiceStatus,
    mutationName: 'updateInvoiceStatus',
    defaultPropName: 'updateInvoiceStatus',
  });
};

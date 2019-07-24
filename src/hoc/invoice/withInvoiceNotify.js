import { invoiceNotify } from 'typedefs/invoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: invoiceNotify,
    mutationName: 'invoiceNotify',
    defaultPropName: 'invoiceNotify',
  });
};

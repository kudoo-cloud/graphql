import { createInvoice } from 'typedefs/invoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createInvoice,
    mutationName: 'createInvoice',
    defaultPropName: 'createInvoice',
  });
};

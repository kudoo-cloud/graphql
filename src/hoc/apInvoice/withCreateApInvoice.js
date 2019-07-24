import { createApInvoice } from 'typedefs/apInvoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createApInvoice,
    mutationName: 'createApInvoice',
    defaultPropName: 'createApInvoice',
  });
};

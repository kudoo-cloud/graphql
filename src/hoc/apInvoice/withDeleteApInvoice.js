import { deleteApInvoice } from 'typedefs/apInvoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteApInvoice,
    mutationName: 'deleteApInvoice',
    defaultPropName: 'deleteApInvoice',
  });
};

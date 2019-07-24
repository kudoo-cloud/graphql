import { updateApInvoice } from 'typedefs/apInvoice.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateApInvoice,
    mutationName: 'updateApInvoice',
    defaultPropName: 'updateApInvoice',
  });
};

import { updateCustomer } from 'typedefs/customer.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateCustomer,
    mutationName: 'updateCustomer',
    defaultPropName: 'updateCustomer',
  });
};

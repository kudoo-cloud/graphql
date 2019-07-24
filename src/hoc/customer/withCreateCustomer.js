import { createCustomer } from 'typedefs/customer.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createCustomer,
    mutationName: 'createCustomer',
    defaultPropName: 'createCustomer',
  });
};

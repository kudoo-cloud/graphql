import { deleteCustomer } from 'typedefs/customer.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteCustomer,
    mutationName: 'deleteCustomer',
    defaultPropName: 'deleteCustomer',
  });
};

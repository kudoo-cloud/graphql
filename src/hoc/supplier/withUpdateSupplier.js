import { updateSupplier } from 'typedefs/supplier.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateSupplier,
    mutationName: 'updateSupplier',
    defaultPropName: 'updateSupplier',
  });
};

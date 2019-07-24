import { deleteSupplier } from 'typedefs/supplier.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteSupplier,
    mutationName: 'deleteSupplier',
    defaultPropName: 'deleteSupplier',
  });
};

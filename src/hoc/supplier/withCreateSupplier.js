import { createSupplier } from 'typedefs/supplier.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createSupplier,
    mutationName: 'createSupplier',
    defaultPropName: 'createSupplier',
  });
};

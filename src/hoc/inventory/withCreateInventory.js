import { createInventory } from 'typedefs/inventory.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createInventory,
    mutationName: 'createInventory',
    defaultPropName: 'createInventory',
  });
};

import { deleteInventory } from 'typedefs/inventory.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteInventory,
    mutationName: 'deleteInventory',
    defaultPropName: 'deleteInventory',
  });
};

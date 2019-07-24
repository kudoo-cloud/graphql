import { updateInventory } from 'typedefs/inventory.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateInventory,
    mutationName: 'updateInventory',
    defaultPropName: 'updateInventory',
  });
};

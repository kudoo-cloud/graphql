import { createInventoryOnHand } from 'typedefs/inventoryOnHand.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createInventoryOnHand,
    mutationName: 'createInventoryOnHand',
    defaultPropName: 'createInventoryOnHand',
  });
};

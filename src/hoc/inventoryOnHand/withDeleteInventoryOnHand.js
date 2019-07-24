import { deleteInventoryOnHand } from 'typedefs/inventoryOnHand.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteInventoryOnHand,
    mutationName: 'deleteInventoryOnHand',
    defaultPropName: 'deleteInventoryOnHand',
  });
};

import { updateInventoryOnHand } from 'typedefs/inventoryOnHand.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateInventoryOnHand,
    mutationName: 'updateInventoryOnHand',
    defaultPropName: 'updateInventoryOnHand',
  });
};

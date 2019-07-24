import { updateWareHouse } from 'typedefs/wareHouse.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateWareHouse,
    mutationName: 'updateWareHouse',
    defaultPropName: 'updateWareHouse',
  });
};

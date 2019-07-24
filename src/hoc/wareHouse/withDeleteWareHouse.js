import { deleteWareHouse } from 'typedefs/wareHouse.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteWareHouse,
    mutationName: 'deleteWareHouse',
    defaultPropName: 'deleteWareHouse',
  });
};

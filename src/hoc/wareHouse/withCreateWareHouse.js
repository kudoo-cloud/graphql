import { createWareHouse } from 'typedefs/wareHouse.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createWareHouse,
    mutationName: 'createWareHouse',
    defaultPropName: 'createWareHouse',
  });
};

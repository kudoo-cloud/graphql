import { updateUser } from 'typedefs/account.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateUser,
    mutationName: 'updateUser',
    defaultPropName: 'updateUser',
  });
};

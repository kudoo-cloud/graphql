import { resetPassword } from 'typedefs/account.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: resetPassword,
    mutationName: 'resetPassword',
    defaultPropName: 'resetPassword',
  });
};

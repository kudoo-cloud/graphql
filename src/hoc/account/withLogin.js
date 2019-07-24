import { login } from 'typedefs/account.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: login,
    mutationName: 'login',
    defaultPropName: 'login',
  });
};

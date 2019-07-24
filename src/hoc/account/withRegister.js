import { register } from 'typedefs/account.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: register,
    mutationName: 'register',
    defaultPropName: 'register',
  });
};

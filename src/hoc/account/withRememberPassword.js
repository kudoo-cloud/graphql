import { remember } from 'typedefs/account.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: remember,
    mutationName: 'remember',
    defaultPropName: 'remember',
  });
};

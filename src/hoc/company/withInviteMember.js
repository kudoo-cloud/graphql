import { invite } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: invite,
    mutationName: 'invite',
    defaultPropName: 'invite',
  });
};

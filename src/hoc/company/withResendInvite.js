import { resendInvite } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: resendInvite,
    mutationName: 'resendInvite',
    defaultPropName: 'resendInvite',
  });
};

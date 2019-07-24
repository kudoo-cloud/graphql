import { updateCompanyMember } from 'typedefs/companyUsers.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateCompanyMember,
    mutationName: 'updateCompanyMember',
    defaultPropName: 'updateCompanyMember',
  });
};

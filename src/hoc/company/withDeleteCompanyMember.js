import { deleteCompanyMember } from 'typedefs/companyUsers.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteCompanyMember,
    mutationName: 'deleteCompanyMember',
    defaultPropName: 'deleteCompanyMember',
  });
};

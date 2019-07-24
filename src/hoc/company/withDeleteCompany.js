import { deleteCompany } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteCompany,
    mutationName: 'deleteCompany',
    defaultPropName: 'deleteCompany',
  });
};

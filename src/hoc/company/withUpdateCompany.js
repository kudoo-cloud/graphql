import { updateCompany } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateCompany,
    mutationName: 'updateCompany',
    defaultPropName: 'updateCompany',
  });
};

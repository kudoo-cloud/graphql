import { createCompany } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createCompany,
    mutationName: 'createCompany',
    defaultPropName: 'createCompany',
  });
};

import { undeleteCompany } from 'typedefs/company.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: undeleteCompany,
    mutationName: 'undeleteCompany',
    defaultPropName: 'undeleteCompany',
  });
};

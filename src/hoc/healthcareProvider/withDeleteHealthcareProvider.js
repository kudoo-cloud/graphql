import { deleteHealthcareProvider } from 'typedefs/healthcareProvider.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteHealthcareProvider,
    mutationName: 'deleteHealthcareProvider',
    defaultPropName: 'deleteHealthcareProvider',
  });
};

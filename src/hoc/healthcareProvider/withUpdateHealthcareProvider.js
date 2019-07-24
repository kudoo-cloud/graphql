import { updateHealthcareProvider } from 'typedefs/healthcareProvider.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateHealthcareProvider,
    mutationName: 'updateHealthcareProvider',
    defaultPropName: 'updateHealthcareProvider',
  });
};

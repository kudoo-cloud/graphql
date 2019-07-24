import { createHealthcareProvider } from 'typedefs/healthcareProvider.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createHealthcareProvider,
    mutationName: 'createHealthcareProvider',
    defaultPropName: 'createHealthcareProvider',
  });
};

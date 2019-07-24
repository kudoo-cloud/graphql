import { createPatient } from 'typedefs/patient.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createPatient,
    mutationName: 'createPatient',
    defaultPropName: 'createPatient',
  });
};

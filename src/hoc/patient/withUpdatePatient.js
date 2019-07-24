import { updatePatient } from 'typedefs/patient.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updatePatient,
    mutationName: 'updatePatient',
    defaultPropName: 'updatePatient',
  });
};

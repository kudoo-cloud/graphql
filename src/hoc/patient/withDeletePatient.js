import { deletePatient } from 'typedefs/patient.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deletePatient,
    mutationName: 'deletePatient',
    defaultPropName: 'deletePatient',
  });
};

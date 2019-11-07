import { uploadBulkPatients } from 'typedefs/patient.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: uploadBulkPatients,
    mutationName: 'uploadBulkPatients',
    defaultPropName: 'uploadBulkPatients',
  });
};

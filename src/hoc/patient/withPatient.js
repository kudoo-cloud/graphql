import { patient } from 'typedefs/patient.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'patient',
    query: patient,
    defaultPropName: 'patient',
  });
};

import { patients } from 'typedefs/patient.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'patients',
    query: patients,
    queryName: 'patients',
  });
};

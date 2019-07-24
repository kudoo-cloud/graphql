import { company } from 'typedefs/company.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'company',
    query: company,
    defaultPropName: 'company',
  });
};

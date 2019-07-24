import { healthcareProviders } from 'typedefs/healthcareProvider.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'healthcareProviders',
    query: healthcareProviders,
    queryName: 'healthcareProviders',
  });
};

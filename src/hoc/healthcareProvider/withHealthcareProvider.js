import { healthcareProvider } from 'typedefs/healthcareProvider.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'healthcareProvider',
    query: healthcareProvider,
    defaultPropName: 'healthcareProvider',
  });
};

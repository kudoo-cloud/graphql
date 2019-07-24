import { service } from 'typedefs/service.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'service',
    query: service,
    defaultPropName: 'service',
  });
};

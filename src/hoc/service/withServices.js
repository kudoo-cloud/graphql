import { services } from 'typedefs/service.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'services',
    query: services,
    queryName: 'services',
  });
};

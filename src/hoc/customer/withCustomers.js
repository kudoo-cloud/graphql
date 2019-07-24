import { customers } from 'typedefs/customer.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'customers',
    query: customers,
    queryName: 'customers',
  });
};

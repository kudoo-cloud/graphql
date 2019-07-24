import { invoices } from 'typedefs/invoice.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'invoices',
    query: invoices,
    queryName: 'invoices',
  });
};

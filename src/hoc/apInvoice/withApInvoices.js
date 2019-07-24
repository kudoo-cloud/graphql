import { apInvoices } from 'typedefs/apInvoice.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'apInvoices',
    query: apInvoices,
    queryName: 'apInvoices',
  });
};

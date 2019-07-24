import { apInvoice } from 'typedefs/apInvoice.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'apInvoice',
    query: apInvoice,
    defaultPropName: 'apInvoice',
  });
};

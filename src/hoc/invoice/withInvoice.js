import { invoice } from 'typedefs/invoice.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'invoice',
    query: invoice,
    defaultPropName: 'invoice',
  });
};

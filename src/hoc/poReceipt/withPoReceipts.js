import { poReceipts } from 'typedefs/poReceipt.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'poReceipts',
    query: poReceipts,
    queryName: 'poReceipts',
  });
};

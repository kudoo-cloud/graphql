import { poReceipt } from 'typedefs/poReceipt.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'poReceipt',
    query: poReceipt,
    defaultPropName: 'poReceipt',
    functionName: 'getPoReceipt',
  });
};

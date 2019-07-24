import { bankTransaction } from 'typedefs/bankTransaction.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'bankTransaction',
    query: bankTransaction,
    defaultPropName: 'bankTransaction',
  });
};

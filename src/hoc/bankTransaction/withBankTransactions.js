import { bankTransactions } from 'typedefs/bankTransaction.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'bankTransactions',
    query: bankTransactions,
    queryName: 'bankTransactions',
  });
};

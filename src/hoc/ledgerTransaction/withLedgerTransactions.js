import { ledgerTransactions } from 'typedefs/ledgerTransaction.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'ledgerTransactions',
    query: ledgerTransactions,
    queryName: 'ledgerTransactions',
  });
};

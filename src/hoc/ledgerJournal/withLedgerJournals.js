import { ledgerJournals } from 'typedefs/ledgerJournal.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'ledgerJournals',
    query: ledgerJournals,
    queryName: 'ledgerJournals',
  });
};

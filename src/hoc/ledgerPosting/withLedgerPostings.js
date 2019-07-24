import { ledgerPostings } from 'typedefs/ledgerPosting.gql';
import withPaginationQuery from '../withPaginationQuery';

export default (config = () => {}, responseFun) => {
  return withPaginationQuery({
    config,
    responseFun,
    defaultPropName: 'ledgerPostings',
    query: ledgerPostings,
    queryName: 'ledgerPostings',
  });
};

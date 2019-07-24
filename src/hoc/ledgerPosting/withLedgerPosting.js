import { ledgerPosting } from 'typedefs/ledgerPosting.gql';
import withSingleNodeQuery from '../withSingleNodeQuery';

export default (config, responseFun) => {
  return withSingleNodeQuery({
    config,
    responseFun,
    queryName: 'ledgerPosting',
    query: ledgerPosting,
    defaultPropName: 'ledgerPosting',
  });
};

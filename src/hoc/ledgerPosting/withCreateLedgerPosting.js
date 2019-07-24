import { createLedgerPosting } from 'typedefs/ledgerPosting.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createLedgerPosting,
    mutationName: 'createLedgerPosting',
    defaultPropName: 'createLedgerPosting',
  });
};

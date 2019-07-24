import { updateLedgerPosting } from 'typedefs/ledgerPosting.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateLedgerPosting,
    mutationName: 'updateLedgerPosting',
    defaultPropName: 'updateLedgerPosting',
  });
};

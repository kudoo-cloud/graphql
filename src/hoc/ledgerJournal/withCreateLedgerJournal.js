import { createLedgerJournal } from 'typedefs/ledgerJournal.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createLedgerJournal,
    mutationName: 'createLedgerJournal',
    defaultPropName: 'createLedgerJournal',
  });
};

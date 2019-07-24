import { updateLedgerJournal } from 'typedefs/ledgerJournal.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateLedgerJournal,
    mutationName: 'updateLedgerJournal',
    defaultPropName: 'updateLedgerJournal',
  });
};

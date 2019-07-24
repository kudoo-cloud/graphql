import { deleteLedgerJournal } from 'typedefs/ledgerJournal.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteLedgerJournal,
    mutationName: 'deleteLedgerJournal',
    defaultPropName: 'deleteLedgerJournal',
  });
};

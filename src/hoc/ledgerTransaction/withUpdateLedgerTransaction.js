import { updateLedgerTransaction } from 'typedefs/ledgerTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateLedgerTransaction,
    mutationName: 'updateLedgerTransaction',
    defaultPropName: 'updateLedgerTransaction',
  });
};

import { createLedgerTransaction } from 'typedefs/ledgerTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createLedgerTransaction,
    mutationName: 'createLedgerTransaction',
    defaultPropName: 'createLedgerTransaction',
  });
};

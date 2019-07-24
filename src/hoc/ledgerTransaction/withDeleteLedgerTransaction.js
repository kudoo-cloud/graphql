import { deleteLedgerTransaction } from 'typedefs/ledgerTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteLedgerTransaction,
    mutationName: 'deleteLedgerTransaction',
    defaultPropName: 'deleteLedgerTransaction',
  });
};

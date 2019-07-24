import { deleteLedgerPosting } from 'typedefs/ledgerPosting.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteLedgerPosting,
    mutationName: 'deleteLedgerPosting',
    defaultPropName: 'deleteLedgerPosting',
  });
};

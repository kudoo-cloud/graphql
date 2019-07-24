import { updateBankTransaction } from 'typedefs/bankTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateBankTransaction,
    mutationName: 'updateBankTransaction',
    defaultPropName: 'updateBankTransaction',
  });
};

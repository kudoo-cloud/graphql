import { createBankTransaction } from 'typedefs/bankTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createBankTransaction,
    mutationName: 'createBankTransaction',
    defaultPropName: 'createBankTransaction',
  });
};

import { deleteBankTransaction } from 'typedefs/bankTransaction.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteBankTransaction,
    mutationName: 'deleteBankTransaction',
    defaultPropName: 'deleteBankTransaction',
  });
};

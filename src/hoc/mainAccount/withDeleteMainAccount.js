import { deleteMainAccount } from 'typedefs/mainAccount.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteMainAccount,
    mutationName: 'deleteMainAccount',
    defaultPropName: 'deleteMainAccount',
  });
};

import { updateMainAccount } from 'typedefs/mainAccount.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateMainAccount,
    mutationName: 'updateMainAccount',
    defaultPropName: 'updateMainAccount',
  });
};

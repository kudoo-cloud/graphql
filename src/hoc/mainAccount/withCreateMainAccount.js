import { createMainAccount } from 'typedefs/mainAccount.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: createMainAccount,
    mutationName: 'createMainAccount',
    defaultPropName: 'createMainAccount',
  });
};

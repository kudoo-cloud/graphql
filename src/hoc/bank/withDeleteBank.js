import { deleteBank } from 'typedefs/bank.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: deleteBank,
    mutationName: 'deleteBank',
    defaultPropName: 'deleteBank',
  });
};

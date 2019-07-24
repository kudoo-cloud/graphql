import { updateBank } from 'typedefs/bank.gql';
import withMutation from '../withMutation';

export default (config) => {
  return withMutation({
    config,
    mutation: updateBank,
    mutationName: 'updateBank',
    defaultPropName: 'updateBank',
  });
};
